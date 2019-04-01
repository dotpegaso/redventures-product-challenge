import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import logo from '../../res/images/utils/RV-logo.svg';
import style from './style.module.scss';
import { rebuild } from '../../_actions';


const Header = () => (
    <header>
        <Link to="/" onClick={() => this.props.onRebuild()}>
            <img src={logo} alt="Red Ventures Logo"/>
        </Link>
        <nav>
            <ul>
                <li className={style.active}><a href="/">Model R</a></li>
                <li>Model IQ</li>
                <li>Model Mobi</li>
                <li>Model Charlie</li>
                <li>Model Italy</li>
            </ul>
        </nav>
    </header>
)


const mapActionsToProps = {
    onRebuild: rebuild
}

export default connect(null, mapActionsToProps)(Header);