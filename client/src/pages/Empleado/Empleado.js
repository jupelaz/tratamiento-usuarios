// Empleado.js
import React
//, { useState, useEffect } 
from 'react'
import { Link, useHistory } from 'react-router-dom'
import API from '../../utils/API'
import { Space, Form, Input, Button, Typography, Divider } from 'antd'
const { Title } = Typography

const Empleado = (props) => {

  const [form] = Form.useForm()

  API.getEmpleado(props.match.params.id)
        .then(({data}) => {
          form.setFieldsValue(data)
        })
        .catch(console.log)
        
  const history = useHistory()

  //const [empleado, setEmpleado] = useState(
  //   {
  //   nombre: '',
  //   apellido1: '',
  //   apellido2: ''
  // }
  //)
  

  // useEffect(() => {
  //   //loadEmpleado()
  //   API.getEmpleado(props.match.params.id)
  //       .then(({data}) => {
  //         //setEmpleado(data)
  //         form.setFieldsValue(data)
  //         console.log(form.getFieldValue('_id'))
  //       })
  //       .catch(console.log)
  // },[])
  
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

  // const loadEmpleado = () => {
  //   if(props.match.params.id !== '0'){
  //     API.getEmpleado(props.match.params.id)
  //       .then(({data}) => {
  //         setEmpleado(data)
  //         form.setFieldsValue(data)
  //       })
  //       .catch(console.log)
  //   }
  // }

  const onFinish = (values) => {
    if(values._id){
        API.updateEmpleado(values)
          .then(history.push('/empleados'))
          .catch(console.log)
    }else{
        values.fechaAlta = Date.now().toString()
        API.saveEmpleado(values)
          .then(history.push('/empleados'))
          .catch(console.log)
    }
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  // const valoresInicio = () => {
  //   if(props.match.params.id){
  //     form.setFieldsValue({...empleado})//...empleado convierte {nombre,apellido1,apellido2} en nombre,apellido1,apellido2
  //   }else{
  //     form.resetFields()
  //   }
  // }

  return (
    <div>
      <Title style={titleStyle} level={4}>
        {props.match.params.id?"Editar empleado":"Añadir empleado"}
        </Title>
      <Form {...layout} 
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="_id"/>
        <Form.Item
          label="Nombre"
          name="nombre"
          //value={empleado.nombre}
          rules={[{ required: true, message: 'Introduzca un nombre' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Apellido 1"
          name="apellido1"
          //value={empleado.apellido1}
          rules={[{ required: true, message: 'Introduzca el primer apellido' }]}
        >
          <Input />
        </Form.Item>
          <Form.Item
          label="Apellido 2"
          name="apellido2"
          //value={empleado.apellido2}
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
              {props.match.params.id?"Editar":"Crear"}
            </Button>
            <Divider/>
            <Button 
              type="primary" danger
              //onClick={valoresInicio}
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