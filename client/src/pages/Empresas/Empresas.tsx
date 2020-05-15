// Empresas.js

import React, { useState,useEffect } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Table, Space, Button, Typography, Divider } from 'antd';
const { Title } = Typography;

const Empresas = () => {
  const [empresas, setEmpresas] = useState()
  const [reload, setReload] = useState(0)

  useEffect(() => {
    API.getEmpresas()
    .then(res => {
      res.data.forEach((e: { nombreResponsable: string; responsable: { nombre: any; apellido1: any; apellido2: any; }; }) => e.nombreResponsable = `${e.responsable.nombre} ${e.responsable.apellido1} ${e.responsable.apellido2}`)
      setEmpresas(res.data)
      setReload(0)
    })
    .catch(console.log)
  },[reload])

  const titleStyle = {
    marginTop: 20
  }

  const columns = [
    {
      title : 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre'
    },
    {
      title : 'Responsable',
      dataIndex: 'nombreResponsable',
      key: 'nombreResponsable'
    },
    {
      title: 'Acción',
      key: 'action',
      render: (text: any, record: { _id: string; }) => (
        <Space size="middle">
          <Button type="primary">
            <Link to={'/empresas/' + record._id}>Editar</Link>
          </Button>
          <Divider />
          <Button type="primary" danger onClick={() => deleteEmpresa(record._id)}>Borrar</Button>
        </Space>
      ),
      },
  ]

  const deleteEmpresa = (id: string) => {
    API.deleteEmpresa(id)
      .then(i => setReload)
      .catch(console.log)
  }

  return (
    <div >
      <Title style={titleStyle} level={3}>Lista de empresas</Title>
      <Table 
        columns={columns} 
        dataSource={empresas} 
          footer={() => <Link to={'/empresas/0'}>Crear Empresa</Link>}
        />
    </div>
  );
}

export default Empresas