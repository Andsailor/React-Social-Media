// React ecosystem imports
import React from "react";

// External libraries imports
import { NavLink } from "react-router-dom";

// Styles imports
import classes from '../Dialogs.module.css'

const DialogItem = (props) => {

    return (
        <div className={classes.personItem}>
            <img className={classes.avatar} src={props.avatar} alt="avatar" />
            <NavLink
                className={navData => navData.isActive ? classes.active : classes.personName}
                to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;