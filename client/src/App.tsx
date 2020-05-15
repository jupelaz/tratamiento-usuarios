import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './pages/Start';
import Empleados from './pages/Empleados';
import Empresas from './pages/Empresas';
import Empresa from './pages/Empresa';
import NoMatch from './pages/NoMatch';
import 'antd/dist/antd.min.css';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

const App = () => (
  <Router>
    <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <a href="/">Inicio</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="/empleados">Empleados</a>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="/empresas"> Empresas</a>
          </Menu.Item>
            </Menu>
        </Header>
      <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/empleados" component={Empleados} />
          <Route exact path="/empresas" component={Empresas} />
          <Route exact path="/empresas/:id" component={Empresa} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Atención a usuarios ©2020 Created by Lurconis</Footer>
      </Layout>
  </Router>
);
export default App;