import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:"50px"}}>
                <h1 className="mt-4 mb-3">About
                    <small> Mongodb</small>
                </h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="Home.js">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                        <a href="About.js">html&css</a></li>
                        <li className="breadcrumb-item active">
                        <a href="About.html"></a>Mongodb</li>
                </ol>

                <div className="row">
                    <div className="col-lg-6">
                        <img className="img-fluid rounded mb-4" src="http://placehold.it/750x350" alt="HTML&CSS" />
                        <img className="img-fluid rounded mb-4" src="http://placehold.it/750x350" alt="HTML&CSS"/>
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
                </div>
               
            </div>
        )
    }
}

export default About;