import React from "react";
import style from "./css/FrendsItem.module.css";

const FriendsItem = (props) => {
    return (
        <div className={style.friend}>
            <div className={style.friendImg}>
                <img src={props.src} alt=""/>
            </div>
            <div className={style.friendName}>
                {props.name}
            </div>
        </div>

    );
};

export default FriendsItem;
