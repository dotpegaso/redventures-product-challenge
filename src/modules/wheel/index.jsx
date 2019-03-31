import React, { Component } from 'react';
import Header from '../../components/header';
import BottomBar from '../../components/bottom-bar';
import style from './style.module.scss';

class Home extends Component{
    render(){
        return(
            <section className={style.wheel}>
                
                <Header />

                <div className={style.wheelSelection}>

                    <p className={style.title}>Wheels</p>

                    <div className={style.container}>

                        <figure className={`${style.wheel} ${style.active}`}>
                            <img src={require('../../res/images/wheel/wheel-metalic.png')} alt=""/>

                            <figcaption  className={style.description}>
                                <p>20" Silver Metallic</p>
                                <p>Included</p>
                            </figcaption>
                        </figure>

                        <figure className={style.wheel}>
                            <img src={require('../../res/images/wheel/wheel-carbon-dark.png')} alt=""/>

                            <figcaption  className={style.description}>
                                <p>20" Silver Metallic</p>
                                <p>Included</p>
                            </figcaption>
                        </figure>

                        <figure className={style.wheel}>
                            <img src={require('../../res/images/wheel/wheel-gray-grafitti.png')} alt=""/>

                            <figcaption  className={style.description}>
                                <p>20" Silver Metallic</p>
                                <p>Included</p>
                            </figcaption>
                        </figure>

                    </div>

                </div>

                <BottomBar />

            </section>
        )
    }
}

export default Home;