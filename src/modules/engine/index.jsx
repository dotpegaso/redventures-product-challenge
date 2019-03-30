import React, { Component } from 'react';
import Header from '../../components/header';
import BottomBar from '../../components/bottom-bar';
import style from './style.module.scss';

class Engine extends Component{
    render(){
        return(
            <section className={style.engine}>

                <Header />

                <div className={style.engineSelection}>
                    
                    <figure className={style.engineImage}>
                        <img src={require('../../res/images/engine/engine-2.png')} alt="Detailed engine"/>
                    </figure>

                    <div className={style.avaibleEngines}>
                        <p className={style.title}>Engine</p>

                        <div className={`${style.engineDetails} ${style.active}`}>
                            <ul className={style.items}>
                                <li>75 <strong>P</strong></li>
                                <li><strong>75</strong> kWh</li>
                                <li><strong>275</strong> miles range</li>
                            </ul>

                            <input className={style.action} type="radio" name="selectedEngine" defaultChecked/>
                        </div>

                        <div className={style.engineDetails}>
                            <ul className={style.items}>
                                <li>75 <strong>P</strong></li>
                                <li><strong>75</strong> kWh</li>
                                <li><strong>275</strong> miles range</li>
                            </ul>

                            <input className={style.action} type="radio" name="selectedEngine"/>
                        </div>

                        <div className={style.engineDetails}>
                            <ul className={style.items}>
                                <li>75 <strong>P</strong></li>
                                <li><strong>75</strong> kWh</li>
                                <li><strong>275</strong> miles range</li>
                            </ul>

                            <input className={style.action} type="radio" name="selectedEngine"/>
                        </div>
                    </div>

                </div>

                <BottomBar nextUrl={'color'} />

            </section>
        )
    }
}

export default Engine;