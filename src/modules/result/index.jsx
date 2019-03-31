import React, { Component } from 'react';
import Header from '../../components/header';
import style from './style.module.scss';

class Home extends Component{
    render(){
        const model = 'R';

        return(
            <section className={style.result}>

                <Header />

                <div className={style.container}>

                    <div className={style.vehicle}>
                        <img src={require('../../res/images/result/final-red.png')} alt="Red Vehicle"/>
                    </div>

                    <div className={style.invoice}>                        
                        <p className={style.title}>Your Model {model}</p>

                        <div className={style.item}>
                            <p className={style.desc}>Starting price</p>
                            <p className={style.value}>$63.000</p>
                        </div>

                        <hr/>

                        <div className={`${style.item} ${style.details}`}>

                            <div className={style.detailedItem}>
                                <p className={style.desc}>75 P - 75 KWh - 275 miles range</p>
                                <p className={style.value}>+ $5.500</p>
                            </div>

                            <div className={style.detailedItem}>
                                <p className={style.desc}>Metallic Vermilion Paint</p>
                                <p className={style.value}>Included</p>
                            </div>

                            <div className={style.detailedItem}>
                                <p className={style.desc}>22” Performance Carbon</p>
                                <p className={style.value}>+ $2.000</p>
                            </div>

                        </div>

                        <hr/>

                        <div className={`${style.item} ${style.finalPrice}`}>
                            <p className={style.desc}>Final Price</p>
                            <p className={style.value}>$71.000</p>
                        </div>

                        <div className={style.rebuild}>
                            <p>Rebuild</p>
                            <img src={require('../../res/images/result/rebuild.svg')} alt=""/>
                        </div>
                    
                    </div>

                </div>

            </section>
        )
    }
}

export default Home;