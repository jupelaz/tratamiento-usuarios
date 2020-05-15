import axios from 'axios';
import { Store } from 'antd/lib/form/interface';


export default {
  getAgendas: () => {
    return axios.get('/agendas');
  },
  getAgenda: (id: string) => {
    return axios.get('/agendas/' + id);
  },
  deleteAgenda: (id: string) => {
    return axios.delete('/agendas/' + id);
  },
  saveAgenda: (data: any) => {
    return axios.post('/agendas', data);
  },
  updateAgenda: (data: { _id: string; }) => {
    return axios.put('/agendas/' + data._id, data);
  },
  getEmpleados: () => {
    console.log("react empleados")
    return axios.get('/empleados');
  },
  getEmpleado: (id: string) => {
    return axios.get('/empleados/' + id);
  },
  deleteEmpleado: (id: string) => {
    return axios.delete('/empleados/' + id);
  },
  saveEmpleado: (data: any) => {
    return axios.post('/empleados', data);
  },
  updateEmpleado: (data: Store) => {
    return axios.put('/empleados/' + data._id, data);
  },
  getEmpresas: () => {
    return axios.get('/empresas');
  },
  getEmpresa: (id: string) => {
    return axios.get('/empresas/' + id);
  },
  deleteEmpresa: (id: string) => {
    return axios.delete('/empresas/' + id);
  },
  saveEmpresa: (data: any) => {
    return axios.post('/empresas', data);
  },
  updateEmpresa: (data: { _id: string; }) => {
    return axios.put('/empresas/' + data._id, data);
  }
};