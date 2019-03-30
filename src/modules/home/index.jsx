import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/header';
import style from './style.module.scss';
import Arrow from '../../res/images/utils/arrow.svg';

class Home extends Component{
    render(){
        const model = 'R';

        return(
            <section className={style.home}>
                <Header />

                <div className={style.showcase}>

                    <p className={style.intro}>Build your</p>
                    <p className={style.modelName}>
                        Model <span className={style.type}>{model}</span>
                    </p>

                    <picture className={style.vehicleFigure}>
                        <img src={require('../../res/images/home/car-home.png')} alt={`Vehicle Model ${model}`}/>
                    </picture>

                    <Link to="/engine" className={style.begin}>
                        Begin 
                        <img src={Arrow} alt="Arrow pointing right"/>
                    </Link>

                </div>

                <footer>
                    <div className={style.info}>
                        <p className={style.value}>
                            2.5 <span className={style.speedUnit}>s</span>
                        </p>
                        <p className={style.description}>
                            From 0 to 100
                        </p>
                    </div>

                    <div className={style.info}>
                        <p className={style.value}>
                            420 <span className={style.speedUnit}>mi</span>
                        </p>
                        <p className={style.description}>
                            Miles range
                        </p>
                    </div>

                    <div className={style.info}>
                        <p className={style.value}>
                            250 <span className={style.speedUnit}>mp/h</span>
                        </p>
                        <p className={style.description}>
                            Max speed
                        </p>
                    </div>
                </footer>

            </section>
        )
    }
}

export default Home;
