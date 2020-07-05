import React from "react";
import style from "./css/Aside.module.css";
import Nav from "./Nav";
import Friends from "./Frends";


const Aside = (props) => {
    return (
        <aside class={style.aside}>
            <Nav/>
            <Friends state = {props.state}/>
        </aside>
    );
};

export default Aside;
