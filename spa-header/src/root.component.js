import React from "react";
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {BrowserRouter as Router , Link, useHistory} from 'react-router-dom';

const Root =()=>{
const hystory=useHistory();


const{SubMenu}=Menu;

const { Header, Content, Footer } = Layout;

console.log('history',history);
return(
  <Router hystory={hystory}>
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="4">
          <Link to='/'>home</Link>
       
        
        
        </Menu.Item>
        <Menu.Item key="2">
        <Link to='/app1'>app1</Link>
        </Menu.Item>
        
        
        <Menu.Item key="3">
        <Link to='/app2'>app2</Link>
        </Menu.Item>
      
      
        <SubMenu key="SubMenu"  title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </Header>
   
  
      
   
   
  </Layout>
  </Router>
)

};
export default Root;
