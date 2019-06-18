import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

class MyOrdersPage extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <h1>you are in MERN.COM</h1>
                <p>check for references and tutorials and also examples</p>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default MyOrdersPage;