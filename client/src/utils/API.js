import axios from 'axios';

export default {
  getAgendas: () => {
    return axios.get('/api/agendas');
  },
  getAgenda: (id) => {
    return axios.get('/api/agendas/' + id);
  },
  deleteAgenda: (id) => {
    return axios.delete('/api/agendas/' + id);
  },
  saveAgenda: (data) => {
    return axios.post('/api/agendas', data);
  },
  updateAgenda: (data) => {
    return axios.post('/api/agendas/' + data._id, data);
  },
    getEmpleados: () => {
    return axios.get('/api/empleados');
  },
  getEmpleado: (id) => {
    return axios.get('/api/empleados/' + id);
  },
  deleteEmpleado: (id) => {
    return axios.delete('/api/empleados/' + id);
  },
  saveEmpleado: (data) => {
    return axios.post('/api/empleados', data);
  },
  updateEmpleado: (data) => {
    return axios.post('/api/empleados/' + data._id, data);
  },
  getEmpresas: () => {
    return axios.get('/api/empresas');
  },
  getEmpresa: (id) => {
    return axios.get('/api/empresas/' + id);
  },
  deleteEmpresa: (id) => {
    return axios.delete('/api/empresas/' + id);
  },
  saveEmpresa: (data) => {
    return axios.post('/api/empresas', data);
  },
  updateEmpresa: (data) => {
    return axios.post('/api/empresas/' + data._id, data);
  }
};