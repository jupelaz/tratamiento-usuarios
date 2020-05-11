// Empresa.js
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import API from '../../utils/API';
import { Space, Form, Input, Button, Typography, Divider, Select } from 'antd';
const { Title } = Typography;
const { Option } = Select;

const Empresa = (props) => {
  const [empresa, setEmpresa] = useState(0)
  const [empleados, setEmpleados] = useState(0)

  const history = useHistory();

  useEffect(() => {
    loadEmpresa()
  })
  
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

  const loadEmpresa = () => {
    if(props.match.params.id !== '0'){
      API.getEmpresa(props.match.params.id)
        .then(res => {
          setEmpresa(res.data)
          form.setFieldsValue({
            nombre: res.data.nombre,
            responsable: res.data.responsable
          })
        })
        .catch(err => console.log(err));
    }
  }

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values)
    if (values.nombre) {
      if(empresa._id){
        var emp = empresa
        emp.nombre = values.nombre
        emp.responsable = values.responsable
        setEmpresa(emp)
        API.updateEmpresa(empresa)
          .then(history.push('/empresas'))
          .catch(err => console.log(err));
      }else{
        API.saveEmpresa({
          nombre: values.nombre,
          responsable: values.responsable,
          fechaAlta: Date.now().toString()
        })
          .then(history.push('/empresas'))
          .catch(err => console.log(err));
      }
    }
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const valoresInicio = () => {
    if(empresa._id){
      form.setFieldsValue({
        nombre: empresa.nombre,
        responsable: empresa.responsable
      })
    }else{
      form.resetFields()
    }
  }

  const cargarSelect = () => {
    if(!empleados){
      
      API.getEmpleados().then(
        res => {
        setEmpleados(res.data)
        return (
          <Select>
            { res.data.map(empleado => (
              <Option value={empleado._id}>{empleado.nombre}</Option>
            ))}
          </Select>
        )})
        .catch(err => {
          console.log(err)
          return(
            <Select>
              <Option>Sin resultados</Option>
            </Select>
          )
        })
    }else if(empleados.length){
      return(
        <Select>
          { empleados.map(empleado => (
            <Option value={empleado._id}>{empleado.nombre}</Option>
          ))}
        </Select>
      )
    }else{
      return(
        <Select>
          <Option>Sin resultados</Option>
        </Select>
      )
    }
  }
  
  return (
    <div>
      <Title style={titleStyle} level={4}>{empresa._id?"Editar empresa":"Añadir empresa"}</Title>
      <Form {...layout} 
        form={form}
        onFinish={onFinish}
        initialValues={valoresInicio}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[{ required: true, message: 'Introduzca un nombre' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Select"
          name="responsable"
          hasFeedback
          rules={[{ required: true, message: 'Selecciona un responsable' }]}
        >
          {cargarSelect()}
          
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