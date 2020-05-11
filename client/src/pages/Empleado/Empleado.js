// Empleado.js
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import API from '../../utils/API'
import { Space, Form, Input, Button, Typography, Divider } from 'antd'
const { Title } = Typography

const Empleado = (props) => {
  const [empleado, setEmpleado] = useState({
    nombre: '',
    apellido1: '',
    apellido2: ''
  })
  const history = useHistory()

  useEffect(() => {
    loadEmpleado()
  })
  
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
  
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  }
  
  const titleStyle = {
    marginTop: 20,
  }

  const loadEmpleado = () => {
    if(!empleado.nombre && props.match.params.id !== '0'){
      API.getEmpleado(props.match.params.id)
        .then(res => {
          setEmpleado(res.data)
          form.setFieldsValue({
            nombre: res.data.nombre,
            apellido1: res.data.apellido1,
            apellido2: res.data.apellido2
          })
        })
        .catch(err => console.log(err))
    }
  }

  const [form] = Form.useForm()

  const onFinish = (values) => {
    if (values.nombre && values.apellido1 && 
      values.apellido2) {
      if(empleado._id){
        var emp = empleado
        emp.nombre = values.nombre
        emp.apellido1 = values.apellido1
        emp.apellido2 = values.apellido2	
        setEmpleado(emp)
        API.updateEmpleado(empleado)
          .then(history.push('/empleados'))
          .catch(err => console.log(err))
      }else{
        API.saveEmpleado({
          nombre: values.nombre,
          apellido1: values.apellido1,
          apellido2: values.apellido2,
          fechaAlta: Date.now().toString()
        })
          .then(history.push('/empleados'))
          .catch(err => console.log(err))
      }
    }
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const valoresInicio = () => {
    if(empleado._id){
      form.setFieldsValue({
        nombre: empleado.nombre,
        apellido1: empleado.apellido1,
        apellido2: empleado.apellido2
      })
    }else{
      form.resetFields()
    }
  }

  return (
    <div>
      <Title style={titleStyle} level={4}>{empleado._id?"Editar empleado":"Añadir empleado"}</Title>
      <Form {...layout} 
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nombre"
          name="nombre"
          value={empleado.nombre}
          rules={[{ required: true, message: 'Introduzca un nombre' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Apellido 1"
          name="apellido1"
          value={empleado.apellido1}
          rules={[{ required: true, message: 'Introduzca el primer apellido' }]}
        >
          <Input />
        </Form.Item>
          <Form.Item
          label="Apellido 2"
          name="apellido2"
          value={empleado.apellido2}
          rules={[{ required: true, message: 'Introduzca el segundo apellido' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space size="middle">
            <Button 
              type="primary" 
              htmlType="submit" 
              >
              {empleado._id?"Editar":"Crear"}
            </Button>
            <Divider/>
            <Button 
              type="primary" danger
              onClick={valoresInicio}
              >
              Cancelar
            </Button>	
          </Space>
        </Form.Item>
      </Form>
      <Link to="/empleados">← Volver a Empleados</Link>
    </div>
  )
}

export default Empleado