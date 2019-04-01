import React, { Component } from 'react';
import Header from '../../components/header';
import BottomBar from '../../components/bottom-bar';
import style from './style.module.scss';
import { connect } from 'react-redux';
import { updateColor } from '../../_actions';
import { formatter } from '../../res/scripts/filters';

import colorRed from '../../res/images/utils/dot-red.png';
import colorBlue from '../../res/images/utils/dot-blue.png';
import colorGrey from '../../res/images/utils/dot-grey.png';

import vehicleRed from '../../res/images/color/color-red.png';
import vehicleBlue from '../../res/images/color/color-blue.png';
import vehicleGrey from '../../res/images/color/color-grey.png';

class Color extends Component{
    
    constructor(props){
        super(props);

        this.state = { 
            jsonData: false,
            activeColor: 0
        }

        this.onUpdateColor = this.onUpdateColor.bind(this);
    }

    onUpdateColor = ({id, price, dot, label}, index) => {
        const payload = {
            total: price,
            color: {id, label, dot, price}
        }
        
        this.props.onUpdateColor(payload);
        this.setState({ activeColor: index })
    }

    populateState = () => {
        let { jsonData } = this.state;
        let { data } = this.props;

        if( jsonData !== data ){            
            let color = data.color.items[0];
            
            data.color.items[0].dot = colorRed;
            data.color.items[1].dot = colorBlue;
            data.color.items[2].dot = colorGrey;

            data.color.items[0].vehicle = vehicleRed;
            data.color.items[1].vehicle = vehicleBlue;
            data.color.items[2].vehicle = vehicleGrey;

            this.onUpdateColor({...color}, 0);
            this.setState({ jsonData: data });
        }
    }

    componentDidMount(){ this.populateState() }
    componentDidUpdate(){ this.populateState() }

    render(){
        let { jsonData, activeColor } = this.state;
        const colors = jsonData.color;

        return(
            <section className={style.color}>

                <Header />

                { colors &&

                    <div className={style.colorSelection}>

                        <div className={style.vehicle}>
                            <figure className={style.color}>
                                <img src={colors.items[activeColor].vehicle} alt=""/>
                            </figure>

                            <p className={style.name}>{ colors.items[activeColor].label }</p>
                            <p>
                                { 
                                    colors.items[activeColor].price > 0 ?
                                        formatter(colors.items[activeColor].price) 
                                        : 'Included'
                                }
                            </p>
                        </div>

                        <div className={style.avaibleColors}>

                            <div className={style.intro}>
                                <p className={style.title}>Color</p>
                                <p className={style.description}>
                                    {colors.description}
                                </p>
                            </div>                            

                            <div className={style.colorSelector}>
                                {
                                    colors.items.map( (color, index) => (
                                        <div 
                                            className={`${style.colorItem} ${index === activeColor &&style.active}`}
                                            onClick={() => this.onUpdateColor({...color}, index)}
                                            key={index}
                                        >
                                            <img src={color.dot} alt=""/>
                                        </div>                                        
                                    ))
                                }
                            </div>

                        </div>
                    </div>

                    }

                <BottomBar nextUrl={'wheel'} />

            </section>
        )
    }
}

const mapStateToProps = state => ({
    data: state.jsonData
});

const mapActionsToProps = {
    onUpdateColor: updateColor
}

export default connect(mapStateToProps, mapActionsToProps)(Color);