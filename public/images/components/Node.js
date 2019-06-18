import React from 'react';
  function Node() {
    return (
      <React.Fragment>
      <div className="container" style={{marginTop:"50px"}}>
      <h1 className="mt-4 mb-3">About
          <small>Node </small>
      </h1>
      <ol className="breadcrumb">
          <li className="breadcrumb-item">
              <a href="Home.js">Home</a>
          </li>
          <li className="breadcrumb-item active">
              <a href="About.js">HTML&CSS</a></li>
              <li className="breadcrumb-item active">
              <a href="MOngodb.js">Mongodb</a></li>
              <li className="breadcrumb-item active">
              <a href="Express.js">Express js</a></li>
              <li className="breadcrumb-item active">
              <a href="React1.js">React1</a> </li>
              <li className="breadcrumb-item active">
              <a href="about.html"></a>Node js </li>
             
      </ol>
      </div>
      <div>
     <h1>What is Node JS</h1>
     <p> 
     Node.js is a JavaScript runtime environment. Sounds great, but what does that mean? How does that work?

The Node run-time environment includes everything you need to execute a program written in JavaScript.

Node.js came into existence when the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application.

Now you can do much more with JavaScript than just making websites interactive.

JavaScript now has the capability to do things that other scripting languages like Python can do.

Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low-level code which the computer can run without needing to first interpret it.
     </p>
     <h1>Why Node JS</h1>
     <p>Here’s a formal definition as given on the official Node.js website:

Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
We already discussed the first line of this definition: “Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.” Now let’s understand the other two lines so we can find out why Node.js is so popular.</p>
<p>I/O refers to input/output. It can be anything ranging from reading/writing local files to making an HTTP request to an API.</p>

<p>I/O takes time and hence blocks other functions.

Consider a scenario where we request a backend database for the details of user1 and user2 and then print them on the screen/console. The response to this request takes time, but both of the user data requests can be carried out independently and at the same time.</p>


  </div>
  <div className="col-lg-13 col-sm-14 mb-10">
                        <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
                    </div>
<a href='https://nodejs.org/en/'><u>Click here to know more about Node JS</u></a>

    
    </React.Fragment>
  );
}
export default Node;