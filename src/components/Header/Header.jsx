// React ecosystem imports
import React from "react";
import { NavLink } from "react-router-dom";

// Styles imports
import classes from './Header.module.css'

const Header = (props) => {

    return (
        <header className={classes.header}>
            <img src="https://lezebre.lu/images/detailed/14/17552-rolling-stones.png" alt="logo" />
            {<div className={classes.title}>Social Network</div>}
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;