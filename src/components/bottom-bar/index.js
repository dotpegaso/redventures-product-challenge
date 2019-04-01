import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Arrow from '../../res/images/utils/arrow.svg';
import style from './style.module.scss';
import { CountUp } from 'countup.js';

class BottomBar extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            data: false,
            car: false
        }
    }
        
    componentDidUpdate() {
        let {data, car} = this.props;
        let total = Object.values(car.total).reduce((a,b) => a + b) + data.price;
        let countUp = new CountUp('total', data.price , { startVal: total - 3000, prefix: '$' });

        if (data !== this.state.data) {
            countUp.start()
            this.setState({ data: data })
        }

        if( car !== this.state.car ){
            countUp.update(total)
        }
    }

    render(){

        let { nextUrl, car } = this.props;

        return(

            <section className={style.bottomBar}>

                <div className={style.total}>
                    <small>Total</small>
                    <p id="total" className={style.value}></p>
                </div>

                <div className={style.modelType}>
                    Model {car.model}
                </div>

                <div className={style.modelEngine}>
                    {car.engine.kwh}
                    <span className={style.detail}>{car.engine.type}</span>
                </div>

                <figure className={style.modelColor}>
                    { car.color.dot && <img src={car.color.dot} alt={`Vehicle Color}`}/> }
                </figure>

                <figure className={style.modelWheel}>
                    { car.wheel.label && <img src={car.wheel.thumb} alt={`Vehicle Wheel}`}/> }
                </figure>

                <Link to={`/${nextUrl}`} className={style.next}>
                    next
                    <img src={Arrow} alt="Arrow pointing right"/>
                </Link>

            </section>

        )
    }
}

const mapStateToProps = state => ({
    data: state.jsonData,
    car: state.car
})

export default connect(mapStateToProps)(BottomBar);