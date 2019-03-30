import React, { Component } from 'react';
import Header from '../../components/header';
import BottomBar from '../../components/bottom-bar';
import style from './style.module.scss';

class Color extends Component{
    render(){
        return(
            <section className={style.color}>

                <Header />

                <div className={style.colorSelection}>

                    <div className={style.vehicle}>
                        <figure className={style.color}>
                            <img src={require('../../res/images/color/color-red.png')} alt="Red Vehicle"/>
                        </figure>

                        <p className={style.name}>Metallic Vermillion</p>
                        <p>Included</p>
                    </div>

                    <div className={style.avaibleColors}>

                        <div className={style.intro}>
                            <p className={style.title}>Color</p>
                            <p className={style.description}>
                            The 2019 Model R have 3 unique metalic color options. Each color was meticulously developed to look like something completely new to your eyes.
                            </p>
                        </div>

                        <div className={style.colorSelector}>
                            <div className={`${style.colorItem} ${style.active}`}>
                                <img src={require('../../res/images/utils/dot-red.png')} alt=""/>
                            </div>
                            <div className={style.colorItem}>
                                <img src={require('../../res/images/utils/dot-blue.png')} alt=""/>
                            </div>
                            <div className={style.colorItem}>
                                <img src={require('../../res/images/utils/dot-grey.png')} alt=""/>
                            </div>
                        </div>

                    </div>
                </div>

                <BottomBar nextUrl={'wheel'} />

            </section>
        )
    }
}

export default Color;