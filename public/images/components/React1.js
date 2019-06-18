
  import React from 'react';
  function React1() {
    return (
      <React.Fragment>
      <div className="container" style={{marginTop:"50px"}}>
      <h1 className="mt-4 mb-3">About
          <small>React </small>
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
              <a href="about.html"></a>React1 </li>
             
      </ol>
      </div>
      <div>
     <h1>What is React?</h1>
     <p> React is a JavaScript library for building user interfaces. It is the view layer for web applications.

At the heart of all React applications are components. A component is a self-contained module that renders some output.</p>
<p> We can write interface elements like a button or an input field as a React component. Components are composable. A component might include one or more other components in its output.</p>

<p>Broadly speaking, to write React apps we write React components that correspond to various interface elements. We then organize these components inside higher-level components which define the structure of our application.</p>

<p>For example, take a form. A form might consist of many interface elements, like input fields, labels, or buttons. Each element inside the form can be written as a React component. We'd then write a higher-level component, the form component itself. The form component would specify the structure of the form and include each of these interface elements inside of it.</p>

<p>Importantly, each component in a React app abides by strict data management principles. Complex, interactive user interfaces often involve complex data and application state. The surface area of React is limited and aimed at giving us the tools to be able to anticipate how our application will look with a given set of circumstances. We dig into these principles later in the course.</p>
</div>
<div>
  <h1>why do we use it</h1>
  <p>React is a JavaScript framework. Using the framework is as simple as including a JavaScript file in our HTML and using the React exports in our application's JavaScript.</p>
  
  <p>Although it might look a little scary, the JavaScript code is a single line that dynamically adds Hello world to the page.</p> 
  <p>Note that we only needed to include a handful of JavaScript files to get everything working.</p>
<h1>How does it work!!!</h1>
<p>Unlike many of its predecessors, React operates not directly on the browser's Document Object Model (DOM) immediately, but on a virtual DOM. </p>
<p>That is, rather than manipulating the document in a browser after changes to our data (which can be quite slow) it resolves changes on a DOM built and run entirely in memory.</p>
<p> After the virtual DOM has been updated, React intelligently determines what changes to make to the actual browser's DOM.</p>

<p>The React Virtual DOM exists entirely in-memory and is a representation of the web browser's DOM. </p>
<p>Because of this, when we write a React component, we're not writing directly to the DOM, but we're writing a virtual component that React will turn into the DOM.</p>
<h3>What are components</h3>
<p>Components are the building blocks of any React app and a typical React app will have many of these.</p> 
<p>Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.</p>
<h3>your first component</h3>
          <b><mark> const Greeting = () => Hello World today!</mark></b>;
         <p> This is a functional component (called Greeting) written using ES6’s arrow function syntax that takes no props and returns an H1 tag with the text “Hello World today!” </p>

         <p>In Chapter 1, you learnt how to set up a React App using the create-react-app tool. We’ll take a step back momentarily and use a basic setup to learn the basics of components. </p> 
         <p>You can find the starter app here and clone it to your computer. </p>

<p>In order to run the code examples in this chapter on your machine, you first have to install a server globally using nodeJs. Below is the command to install the http-server on your machine. </p> 
<u>Open your terminal and run:-</u>
<b><mark>npm install http-server -g</mark></b>
<p>Open the index.html file within the Chapter 2/starter-code folder in your text editor and add the Greeting component where you see the instructions to do so.</p>
<p> Below is a code snippet of how your index.html file should look like after this change.</p>

<p>Within the starter-code folder run the command below to start the server:-</p>
<p><mark>http-server .</mark></p>
<p>Open the url within the terminal in your browser and you should see the text “Hello World Today!”.</p>

<p>In case you make changes to the code and they are not shown in the browser even after refresh.</p> 
<p>Try hard refreshing that tab or page.
You did it! You created and rendered your first component.
</p> 
<p>Let’s take a closer look to help us understand what just happened.</p>

<p>Your index.html should look like this at this point</p>


  </div>
  <div className="col-lg-13 col-sm-14 mb-10">
                        <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
                    </div>
<a href='https://reactjs.org/'><u>Click here to know more about React JS</u></a>

    
    </React.Fragment>
  );
}
export default React1;