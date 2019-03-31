import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Arrow from '../../res/images/utils/arrow.svg';
import style from './style.module.scss';

const BottomBar = ({nextUrl, totalValue}) => (
    
    <section className={style.bottomBar}>

        <div className={style.total}>
            <small>Total</small>
            <p className={style.value}>${totalValue}</p>
        </div>

        <div className={style.modelType}>
            Model R
        </div>

        <div className={style.modelEngine}>
            75<span className={style.detail}>P</span>
        </div>

        <figure className={style.modelColor}>
            <img src={require('../../res/images/utils/dot-red.png')} alt={`Vehicle Color}`}/>
        </figure>

        <figure className={style.modelWheel}>
            <img src={require('../../res/images/wheel/wheel-gray-grafitti.png')} alt={`Vehicle Wheel}`}/>
        </figure>

        <Link to={`/${nextUrl}`} className={style.next}>
            next
            <img src={Arrow} alt="Arrow pointing right"/>
        </Link>

    </section>
)

const mapStateToProps = state => ({
    totalValue: state.totalValue
})

export default connect(mapStateToProps)(BottomBar);