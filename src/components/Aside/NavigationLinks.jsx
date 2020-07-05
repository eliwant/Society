import React from "react";
import {NavLink} from "react-router-dom";
import style from "./css/NavLink.module.css";

const NavigationLinks = (props) => {
    return (
        <li className={style.li}>
            <NavLink className={style.link} activeClassName={style.linkActive} to={props.link}>{props.linkText}</NavLink>
        </li>
    );
};

export default NavigationLinks;
