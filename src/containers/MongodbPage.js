import React from 'react';
import Mongodb from '../components/Mongodb';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Ref from '../components/Ref';


function MongodbPage() {
  return (
    <div>
      
      <Header/>
     <Mongodb/>
     <Ref/>
     <Footer/>
   
    </div>
  );
}

export default MongodbPage;
