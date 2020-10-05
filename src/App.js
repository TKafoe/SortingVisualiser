import React from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import { SortingVisualisationsPage } from "./pages/sorting_visualisation/SortingVisualisationsPage";

const { Header, Content, Footer } = Layout;

function App() {
  return (
      <Layout className="layout">
          <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                  <Menu.Item key="1">Sorting Visualisations</Menu.Item>
              </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <SortingVisualisationsPage />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Tom Kafoe 2020</Footer>
      </Layout>
  );
}

export default App;
