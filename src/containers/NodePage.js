import React from 'react';
import Node from '../components/Node';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Ref from '../components/Ref';


function NodePage() {
  return (
    <div>
      <Header/>
     <Node/>
     <Ref/>
     <Footer/>
    </div>
  );
}

export default NodePage;