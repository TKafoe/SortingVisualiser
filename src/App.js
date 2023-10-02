import React from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import { SortingVisualisationsPage } from "./pages/sorting_visualisation/SortingVisualisationsPage";

const { Header, Content, Footer } = Layout;

function App() {
  return (
      <Layout style={{height:"100vh"}} className="layout">
          <Header>
              <div className="logo" />
              <h1 style={{color: "white"}}>Sorting Visualisations</h1>
          </Header>
          <Content id="bar-graph-content" style={{ padding: '0 50px'}}>
            <SortingVisualisationsPage />
          </Content>
          <Footer style={{ textAlign: 'center', position: "absolute", bottom: 0, left: 0, right: 0 }}>Tom Kafoe 2020</Footer>
      </Layout>
  );
}

export default App;
