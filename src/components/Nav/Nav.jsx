//React ecosystem imports
import React from 'react';

// External libraries imports
import { NavLink } from 'react-router-dom';

// Styles imports
import classes from './Nav.module.css'

const Nav = () => {

    return (
        <nav className={classes.nav}>
            <li className={classes.item}>
                <NavLink to='/profile' className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to='/news' className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to='/music' className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to='/settings' className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to='/users' className={navData => navData.isActive ? classes.active : classes.item}>Users</NavLink>
            </li>
        </nav>
    )

}

export default Nav;