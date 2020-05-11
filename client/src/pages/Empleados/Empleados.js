// Empleados.js
import React, { useState,useEffect } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Table, Space, Button, Typography, Divider } from 'antd';
const { Title } = Typography;

const Empleados = () => {
  const [empleados, setEmpleados] = useState(0)

  const titleStyle = {
    marginTop: 20
  }

  useEffect(() => {
    loadEmpleados()
  })

  const columns = [
    {
      title : 'Nombre',
      dataIndex: 'nombreCompleto',
      key: 'nombreCompleto'
    },
    {
      title: 'Acción',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">
            <Link to={'/empleados/' + record._id}>Editar</Link>
          </Button>  
          <Divider />
          <Button type="primary" danger onClick={() => deleteEmpleado(record._id)}>Borrar</Button>  
        </Space>
      ),
    },
  ]

  const loadEmpleados = () => {
    API.getEmpleados()
      .then(res => {
        res.data.forEach(e => e.nombreCompleto = `${e.nombre} ${e.apellido1} ${e.apellido2}`)
        setEmpleados(res.data)
      })
      .catch(err => console.log(err))
  }

  const deleteEmpleado = (id) => {
    API.deleteEmpleado(id)
      .then(res => this.loadEmpleados())
      .catch(err => console.log(err))
  }

  return (
    <div >
      <Title style={titleStyle} level={3}>Lista de empleados</Title>
      <Table 
        columns={columns} 
        dataSource={empleados} 
        footer={() => 
          <Link to={'/empleados/0'}>Crear Empleado</Link>
        }
      />
    </div>
  );
}

export default Empleados