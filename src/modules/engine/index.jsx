import React, { Component } from 'react';
import Header from '../../components/header';
import BottomBar from '../../components/bottom-bar';
import style from './style.module.scss';

class Engine extends Component{
    render(){
        return(
            <section className={style.engine}>
                <Header />
                <BottomBar nextUrl={'color'} />
            </section>
        )
    }
}

export default Engine;