import React from 'react'

import Layout from '../templates/layout'
import Header from '../organism/header';
import Menu from "../organism/menu";
import Subheader from '../organism/subheader';

import "../styles/app.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header/>
        <Menu/>
        <Subheader/>
      </Layout>
    </div>
  );
}
export default App;