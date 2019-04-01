import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Arrow from '../../res/images/utils/arrow.svg';
import style from './style.module.scss';
import { formatter } from '../../res/scripts/filters';

class BottomBar extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            data: this.props.data
        }
    }
        
    componentDidUpdate() {
        if (this.props.data !== this.state.data) {
            this.setState({ data: this.props.data })
        }
    }

    render(){

        let { nextUrl, car } = this.props;
        let { data } = this.state;
        let total = Object.values(car.total).reduce((a,b) => a + b)

        return(

            <section className={style.bottomBar}>

                <div className={style.total}>
                    <small>Total</small>
                    <p className={style.value}>{formatter(data.price + total)}</p>
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