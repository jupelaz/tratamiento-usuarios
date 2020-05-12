// Empresa.js
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import API from '../../utils/API';
import { Space, Form, Input, Button, Typography, Divider, Select } from 'antd';
const { Title } = Typography;
const { Option } = Select;

const Empresa = (props) => {

  const history = useHistory();
  const [form] = Form.useForm();

  const [empresa, setEmpresa] = useState(0)
  const [empleados, setEmpleados] = useState(
    [
      {
        _id: '',
        nombre: ''
      }
    ]
  )

  useEffect(() => {
    API.getEmpresa(props.match.params.id)
        .then(({data}) => {
          setEmpresa(data)
          form.setFieldsValue(data)
        })
        .catch(console.log)
    loadEmpleados()
  },[props.match.params.id, form])
  
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  
  const titleStyle = {
    marginTop: 20,
  }

  const loadEmpleados = () => {
    API.getEmpleados()
      .then(({data}) => {
        setEmpleados(data)
      })
      .catch(console.log);
  }

  const onFinish = ({nombre, responsable}) => {
    if (nombre) {
      if(empresa._id){
        setEmpresa({nombre, responsable})
        API.updateEmpresa(empresa)
          .then(history.push('/empresas'))
          .catch(console.log);
      }else{
        API.saveEmpresa({
          nombre,
          responsable,
          fechaAlta: Date.now().toString()
        })
          .then(history.push('/empresas'))
          .catch(console.log);
      }
    }
    console.log('Success:', {nombre, responsable});
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const valoresInicio = () => {
    if(empresa._id){
      form.setFieldsValue({...empresa})
    }else{
      form.resetFields()
    }
  }
  
  return (
    <div>
      <Title style={titleStyle} level={4}>{empresa._id?"Editar empresa":"Añadir empresa"}</Title>
      <Form {...layout} 
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nombre"
          name="nombre"
          value={empresa.nombre}
          rules={[{ required: true, message: 'Introduzca un nombre' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Select"
          name="responsable"
          value={empresa.nombre}
          hasFeedback
          rules={[{ required: true, message: 'Selecciona un responsable' }]}
        >
          <Select>
            {empleados.map(({_id,nombre})=> {
              return (
              <Option value={_id}>{nombre}</Option>
              )
            })}
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space size="middle">
            <Button 
              type="primary" 
              htmlType="submit" 
              >
              {empresa._id?"Editar":"Crear"}
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
      <Link to="/empresas">← Volver a Empresas</Link>
    </div>
  );
}

export default Empresa