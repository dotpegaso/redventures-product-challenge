import React, { Component } from 'react';
import Header from '../../components/header';
import BottomBar from '../../components/bottom-bar';
import style from './style.module.scss';
import { connect } from 'react-redux';
import { updateWheel } from '../../_actions';
import { formatter } from '../../res/scripts/filters';

import wheelCarbon from '../../res/images/wheel/wheel-carbon-dark.png';
import wheelGrey from '../../res/images/wheel/wheel-gray-grafitti.png';
import wheelMetalic from '../../res/images/wheel/wheel-metalic.png';

class Wheel extends Component{

    constructor(props){
        super(props);

        this.state = { 
            jsonData: false,
            activeWheel: 0
        }

        this.onUpdateWheel = this.onUpdateWheel.bind(this);
    }

    onUpdateWheel = ({price, label, thumb}, index) => {
        const payload = {
            total: price,
            wheel: {label, thumb, price}
        }
        
        this.props.onUpdateWheel(payload);
        this.setState({ activeWheel: index })
    }

    populateState = () => {
        let { jsonData } = this.state;
        let { data } = this.props;

        if( jsonData !== data ){            
            let wheel = data.wheels.items[0];

            data.wheels.items[0].thumb = wheelMetalic;
            data.wheels.items[1].thumb = wheelCarbon;
            data.wheels.items[2].thumb = wheelGrey;

            this.onUpdateWheel({...wheel}, 0);
            this.setState({ jsonData: data });
        }
    }

    componentDidMount(){ this.populateState() }
    componentDidUpdate(){ this.populateState() }
    
    render(){
        let { jsonData, activeWheel } = this.state;
        const wheels = jsonData.wheels;

        return(
            <section className={style.wheel}>
                
                <Header />

                <div className={style.wheelSelection}>

                    <p className={style.title}>Wheels</p>

                    <div className={style.container}>

                        {
                            wheels &&
                                wheels.items.map( (wheel, index) => (
                                    <figure 
                                        className={`${style.wheel} ${index === activeWheel && style.active}`}
                                        onClick={() => this.onUpdateWheel({...wheel}, index)}
                                        key={index}
                                    >
                                        <img src={wheel.thumb} alt="Wheel model"/>

                                        <figcaption  className={style.description}>
                                            <p>{wheel.label}</p>
                                            <p>{wheel.price > 0 ? formatter(wheel.price) : 'Included'}</p>
                                        </figcaption>
                                    </figure>
                                ))
                        }

                    </div>

                </div>

                <BottomBar nextUrl={'result'} />

            </section>
        )
    }
}

const mapStateToProps = state => ({
    data: state.jsonData
});

const mapActionsToProps = {
    onUpdateWheel: updateWheel
}

export default connect(mapStateToProps, mapActionsToProps)(Wheel);