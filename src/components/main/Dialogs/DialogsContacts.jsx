import React from "react";
import style from "./css/DialogsContacts.module.css"
import {NavLink} from "react-router-dom";

const DialogsContacts = (props) => {

    let path = '/messages/id'+props.id

    return (
        <li>
            <NavLink className = {style.link} activeClassName={style.linkActive} to={path}>
                {props.name}
            </NavLink>
        </li>
    )
};

export default DialogsContacts;
