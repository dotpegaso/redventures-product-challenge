import React, { Component } from 'react';
import Header from '../../components/header';
import style from './style.module.scss';
import { connect } from 'react-redux';
import { formatter } from '../../res/scripts/filters';
import { rebuild } from '../../_actions';
import { Link } from "react-router-dom";

import vehicleRed from '../../res/images/result/final-red.png';
import vehicleBlue from '../../res/images/result/final-blue.png';
import vehicleGrey from '../../res/images/result/final-grey.png';

class Result extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            data: false,
            car: false,
            vehicle: []
        }

        this.populateState = this.populateState.bind(this);
        this.onRebuild = this.onRebuild.bind(this);
    }

    populateState = () => {
        if (this.props.data !== this.state.data) {
            this.setState({ 
                data: this.props.data, 
                car: this.props.car,
                vehicle: [vehicleRed, vehicleBlue, vehicleGrey]
            })
        }
    }

    onRebuild = () => {
        this.props.onRebuild();
    }
        
    componentDidMount(){ this.populateState() }
    componentDidUpdate(){ this.populateState() }

    render(){
        let { data, vehicle, car } = this.state;
        let total = Object.values(this.props.car.total).reduce((a,b) => a + b)

        return(
            <section className={style.result}>

                <Header />

                { data && 

                    <div className={style.container}>

                        <div className={style.vehicle}>
                            {car.color.id && <img src={vehicle[car.color.id - 1]} alt="Red Vehicle"/> }
                        </div>

                        <div className={style.invoice}>                        
                            <p className={style.title}>Your Model {car.model}</p>

                            <div className={style.item}>
                                <p className={style.desc}>Starting price</p>
                                <p className={style.value}>{formatter(data.price)}</p>
                            </div>

                            <hr/>

                            <div className={`${style.item} ${style.details}`}>

                                <div className={style.detailedItem}>
                                    <p className={style.desc}>
                                        {`${car.engine.kwh} ${car.engine.type} - ${car.engine.kwh} KWh - ${car.engine.range} miles range`}
                                    </p>
                                    <p className={style.value}>
                                        {`${car.engine.price > 0 ? formatter(car.engine.price) : 'Included'}`}
                                    </p>
                                </div>

                                <div className={style.detailedItem}>
                                    <p className={style.desc}>
                                        {`${car.color.label} Paint`}
                                    </p>
                                    <p className={style.value}>
                                        {`${car.color.price > 0 ? formatter(car.color.price) : 'Included'}`}
                                    </p>
                                </div>

                                <div className={style.detailedItem}>
                                    <p className={style.desc}>
                                        {`${car.wheel.label}`}
                                    </p>
                                    <p className={style.value}>
                                        {`${car.wheel.price > 0 ? formatter(car.wheel.price) : 'Included'}`}
                                    </p>
                                </div>

                            </div>

                            <hr/>

                            <div className={`${style.item} ${style.finalPrice}`}>
                                <p className={style.desc}>Final Price</p>
                                <p className={style.value}>{formatter(data.price + total)}</p>
                            </div>

                            <Link to="/" onClick={this.onRebuild} className={style.rebuild}>
                                <p>Rebuild</p>
                                <img src={require('../../res/images/result/rebuild.svg')} alt="Rebuild link"/>
                            </Link>
                        
                        </div>

                    </div>
                
                }

                

            </section>
        )
    }
}

const mapStateToProps = state => ({
    data: state.jsonData,
    car: state.car
})

const mapActionsToProps = {
    onRebuild: rebuild
}

export default connect(mapStateToProps, mapActionsToProps)(Result);