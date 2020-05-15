// Empleados.js
import React, { useState,useEffect } from 'react';
import API from '../../utils/API';
import { Table, Form, Input, Space, Button, Typography, Divider } from 'antd';
import { EditOutlined, CloseCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
const { Title } = Typography;

const Empleados = () => {
  const [empleados, setEmpleados] = useState()
  const [loading, setLoading] = useState(false)
  const [editable, setEditable]= useState(false)
  const [claveEmpleado, setClaveEmpleado]= useState('')

  const [form] = Form.useForm()

  const titleStyle = {
    marginTop: 20
  }

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { offset: 1, span: 16 },
  }
  
  const tailLayout = {
    wrapperCol: { offset: 5, span: 16 },
  }

  useEffect(() => {
    API.getEmpleados()
      .then(({data}) => {
          data.forEach((e: { nombreCompleto: string; nombre: any; apellido1: any; apellido2: any; }) => e.nombreCompleto = `${e.nombre} ${e.apellido1} ${e.apellido2}`)
          setEmpleados(data)
        })
      .catch(console.log)
    if(claveEmpleado){
    API.getEmpleado(claveEmpleado)
          .then(({data}) => {
            form.setFieldsValue(data)
          })
          .catch(console.log)
    }else{
      form.setFieldsValue({
        _id: '',
        nombre: '',
        apellido1: '',
        apellido2: ''
      })
    }
    setLoading(false);
  },[editable,form,claveEmpleado,loading])

  const columns = [
    {
      title : 'Nombre',
      dataIndex: 'nombreCompleto',
      key: 'nombreCompleto'
    },
    {
      title: 'Acción',
      key: 'action',
      render: (text: any, record: { _id: string }) => (
        <Space size="middle">
          <Button 
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            disabled={editable} 
            onClick={() => {
              setClaveEmpleado(record._id)
              setEditable(true)
            }}
          />
          <Divider/>
          <Button 
            type="primary" 
            disabled={editable} 
            shape="circle"
            danger 
            icon={<CloseCircleOutlined />}
            onClick={() => deleteEmpleado(record._id)}
          />
        </Space>
      ),
    },
  ]

  const deleteEmpleado = (id: string) => {
    API.deleteEmpleado(id)
      .catch(console.log)
    setLoading(true)
  }

  return (
    
    <div >
      <Title style={titleStyle} level={3}>Lista de empleados</Title>
      <Table 
        loading={loading}
        columns={columns} 
        dataSource={empleados} 
        footer={() => 
          <Button 
            disabled={editable}
            type="primary" 
            shape="circle"
            icon={<PlusCircleOutlined />}
            onClick={() => setEditable(true)}
          />
        }
      />
      <Title style={titleStyle} level={4}>Empleado</Title>
      <Form {...layout} 
        form={form}
        onFinish={(values) => {
          if(values._id){
              API.updateEmpleado(values)
              .then((i: any) => setEditable(false))
              .catch(console.log)
          }else{
              values.fechaAlta = Date.now().toString()
              delete values._id
              API.saveEmpleado(values)
              .then(i => setEditable(false))
              .catch(console.log)
          }
          console.log('Success:', values)
        }}
        onFinishFailed={(errorInfo) => 
          console.log('Failed:', errorInfo)}
      >
        <Form.Item 
          name="_id">
          <Input type = "hidden"/>
        </Form.Item>
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[{required: true, message: 'Introduzca un nombre' }]}
        >
          <Input disabled={!editable}/>
        </Form.Item>
        <Form.Item
          label="Apellido 1"
          name="apellido1"
          rules={[{ required: true, message: 'Introduzca el primer apellido' }]}
        >
          <Input disabled={!editable}/>
        </Form.Item>
          <Form.Item
          label="Apellido 2"
          name="apellido2"
          rules={[{ required: true, message: 'Introduzca el segundo apellido' }]}
        >
          <Input disabled={!editable}/>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space size="middle">
            <Button 
              disabled={!editable}
              type="primary" 
              htmlType="submit" 
              >
              Guardar
            </Button>
            <Divider/>
            <Button 
              disabled={!editable}
              type="primary" danger
              onClick={() => {
                setClaveEmpleado('')
                setEditable(false)
              }}
              >
              Volver
            </Button>	
          </Space>
        </Form.Item>
      </Form>
    </div>
)}

export default Empleados