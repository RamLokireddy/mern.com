import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:"50px"}}>
                <h1 className="mt-4 mb-3">About
                    <small> HTML&CSS</small>
                </h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                        <a href="about.html"></a>html&css</li>
                </ol>

                <div className="row">
                    <div className="col-lg-6">
                        <img className="img-fluid rounded mb-4" src="./images/html.jpg" alt="HTML&CSS" />
                        <img className="img-fluid rounded mb-4" src="./images/css.jpg" alt="HTML&CSS" />
                    </div>
                    <div className="col-lg-6">
                        <h2>What is HTML?</h2>
                        <p>HTML is the standard markup language for creating Web pages.</p>
                        <p>HTML stands for Hyper Text Markup Language</p>
                        <p>HTML describes the structure of Web pages using markup</p>
                        <p> HTML elements are the building blocks of HTML pages</p>
                        <p>HTML elements are represented by tags</p>
                        <p>HTML tags label pieces of content such as "heading", "paragraph", "table", and so on</p>
                        <p>Browsers do not display the HTML tags, but use them to render the content of the page</p>
                        <u><a href="https://www.w3schools.com/html/default.asp">click here to know more about html</a></u>
                      <h4>What is CSS?</h4>
                      <p>CSS stands for Cascading Style Sheets</p>
                      <p> CSS describes how HTML elements are to be displayed on screen, paper, or in other media</p>
                      <p> CSS saves a lot of work. It can control the layout of multiple web pages all at once</p>
                      <p> External stylesheets are stored in CSS files</p>
                      <u><a href="https://www.w3schools.com/css/default.asp">click here to know more about css</a></u>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default About;