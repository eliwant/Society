import React from "react";
import style from "./css/MessageItem.module.css"
import {NavLink} from "react-router-dom";

const MessagesItem = (props) => {

    let newMessage = React.createRef()

    return (
        <div className={style.userBox}>
            <div className={style.userInfo}>
                <div className={style.userAvatarBox}>
                    <img src={props.userImage} alt=""/>
                    <div className={style.userName}>
                        {props.userName}
                    </div>

                </div>
                <div className={style.userMessage}>

                    <p>
                        {props.userMessage}
                    </p>

                </div>
            </div>
            <div className={style.newMessageBox}>
                <textarea placeholder="New message...."></textarea>
                <button ref={newMessage}>Send</button>
            </div>
        </div>
    )
};

export default MessagesItem;
