import React, { Component } from 'react';
import Header from '../../components/header';
import './style.scss';

class Home extends Component{
    render(){
        return(
            <section id="home">
                <Header />
            </section>
        )
    }
}

export default Home;