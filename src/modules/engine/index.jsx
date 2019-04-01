import React, { Component } from 'react';
import Header from '../../components/header';
import BottomBar from '../../components/bottom-bar';
import style from './style.module.scss';
import { connect } from 'react-redux';
import { updateEngine } from '../../_actions';
import { formatter } from '../../res/scripts/filters';

class Engine extends Component{

    constructor(props){
        super(props);

        this.state = { 
            jsonData: false,
            activeEngine: 0
        }

        this.onUpdateEngine = this.onUpdateEngine.bind(this);
    }

    onUpdateEngine = ({price, type, kwh}, index) => {
        const payload = {
            total: price,
            engine: {type, kwh}
        }
        
        this.props.onUpdateEngine(payload);
        this.setState({ activeEngine: index })
    }

    populateState = () => {
        let { jsonData } = this.state;
        let { data } = this.props;

        if( jsonData !== data ){            
            let engine = data.engine.items[0];
            this.onUpdateEngine({...engine}, 0);

            this.setState({ jsonData: data });
        }
    }

    componentDidMount(){ this.populateState() }
    componentDidUpdate(){ this.populateState() }    

    render(){
        let { jsonData, activeEngine } = this.state;       

        return(
            <section className={style.engine}>

                <Header />

                <div className={style.engineSelection}>
                    
                    <figure className={style.engineImage}>
                        <img src={require(`../../res/images/engine/engine-${activeEngine === 0 ? '1' : '2'}.png`)} alt="Detailed engine"/>
                    </figure>

                    <div className={style.avaibleEngines}>
                        <p className={style.title}>Engine</p>

                        {
                            jsonData && jsonData.engine.items.map( (item, index) => (
                                
                                <div 
                                    className={`${style.engineDetails} ${index === activeEngine && style.active}`}
                                    onClick={() => this.onUpdateEngine({...item}, index)}
                                    key={index}
                                >
                                    <ul className={style.items}>
                                        <li>{item.kwh} <strong>{item.type}</strong></li>
                                        <li><strong>{item.kwh}</strong> kWh</li>
                                        <li><strong>{item.range}</strong> miles range</li>
                                    </ul>

                                    <input className={style.action} type="radio" name="selectedEngine" checked={index === activeEngine && 'checked'} readOnly/>

                                    { (index > 0 && activeEngine === index) && 
                                        <p className={style.price}>
                                            +{ formatter(item.price) }
                                        </p>
                                    }

                                </div>
                            ))
                        }
                        
                    </div>

                </div>

                <BottomBar nextUrl={'color'} />

            </section>
        )
    }
}

const mapStateToProps = state => ({
    data: state.jsonData
});

const mapActionsToProps = {
    onUpdateEngine: updateEngine
}

export default connect(mapStateToProps, mapActionsToProps)(Engine);