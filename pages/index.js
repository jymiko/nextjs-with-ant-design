import React from 'react';
import Router from 'next/router';
import AntdModal from '../components/Antd_Modal/Antd_Modal.js';

class Index extends React.Component {

  constructor(){
    super();
  }

  componentDidMount(){
    //location.href = "https://www.edgeprop.sg/";
  }

  render(){
    return (
      <div>
          <AntdModal></AntdModal>
      </div>
    )
  }
}

export default Index;
