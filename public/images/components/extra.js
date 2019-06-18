<h1>Mongodb Commands</h1>
                   <ul>
<li>1.	USE DATABSE_NAME<li/>
<li>2.	USE MYDB<li/>
<li>3.	SHOW DBS<li/>
<li>4.	db.createCollection(“collectionName”)<li/>
<li>5.	db.collectionname.find()<li/>
<li>6.	Show collections<li/>
<li>7.	db.collectionname.insert()<li/>
<li>8.	db.collectionname.find().pretty() ->(“it gives a good formate of a document”)<li/>
<li>9.	db.collectionname.findOne()<li/>
<li>10.	db.collectionname.update()<li/>
<li>11.	db.dropDatabase()<li/>
<li>12.	db.collectionname.find({},{KEy:1})<li/>
<li>13.	db.collectionname.({},{‘fieldname’:1,_id:0})<li/>
<li>14.	
<li>db.collection.insertOne()<li/>
<li>Insert a new document into the collection.<li/>
<li>db.collection.insertMany()<li/>
<li>Insert multiple new documents into the collection.<li/>
<li>db.collection.updateOne()<li/>
<li>Update a single existing document in the collection.<li/>
<li>db.collection.updateMany()<li/>
<li>Update multiple existing documents in the collection.<li/>
<li>db.collection.save()<li/>
<li>Insert either a new document or update an existing document in the collection.<li/>
<li>db.collection.deleteOne()<li/>
<li>Delete a single document from the collection.<li/>
<li>db.collection.deleteMany()<li/>
<li>Delete documents from the collection.<li/>
<li>db.collection.drop()<li/>
<li>Drops or removes completely the collection.<li/>
<li>db.collection.createIndex()<li/>
<li>Create a new index on the collection if the index does not exist; otherwise, the operation has no effect.<li/>
<li>db.getSiblingDB()<li/>
<li>Return a reference to another database using this same connection without explicitly switching the current database. This allows for cross database queries.<li/>
<div className="col-lg-6">
        <h1>What is Mongodb ?</h1>
        <ol>
            <li>MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time</li>
            <li>The document model maps to the objects in your application code, making data easy to work with</li>
            <li>Ad hoc queries, indexing, and real time aggregation provide powerful ways to access and analyze your data</li>
            <li>MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use</li>
            <li>MongoDB is free to use. Versions released prior to October 16, 2018 are published under the AGPL. All versions released after October 16, 2018, including patch fixes for prior versions, are published under the Server Side Public License (SSPL) v1.</li>
            </ol>
            </div>
                     <ul/>
 import React from 'react';
function Mongodb() {
  return (
    <React.Fragment>
    <div className="container" style={{marginTop:"50px"}}>
    <h1 className="mt-4 mb-3">About
        <small> Mongodb</small>
    </h1>
    <ol className="breadcrumb">
        <li className="breadcrumb-item">
            <a href="Home.js">Home</a>
        </li>
        <li className="breadcrumb-item active">
            <a href="About.js">HTML&CSS</a></li>
            <li className="breadcrumb-item active">
            <a href="MOngodb.js"></a>Mongodb</li>
           
           
    </ol>
    </div>
    
    
                    
    <div className="col-lg-6">
        <h1>What is Mongodb ?</h1>
        <ol>
            <li>MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time</li>
            <li>The document model maps to the objects in your application code, making data easy to work with</li>
            <li>Ad hoc queries, indexing, and real time aggregation provide powerful ways to access and analyze your data</li>
            <li>MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use</li>
            <li>MongoDB is free to use. Versions released prior to October 16, 2018 are published under the AGPL. All versions released after October 16, 2018, including patch fixes for prior versions, are published under the Server Side Public License (SSPL) v1.</li>
            </ol>
            </div>
     
</React.Fragment>
  );
}

export default Mongodb;