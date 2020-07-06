import React from "react";
import style from "./css/Dialogs.module.css"
import DialogsContacts from "./DialogsContacts";
import MessagesItem from "./MessagesItem";
import { Route } from "react-router-dom";

const Dialogs = (props) => {

    let DialogsElement = props.state.dialogsData.map(dialog =>
        <DialogsContacts
            id={dialog.id}
            name={dialog.name}
        />
    )

    let MessagesElement = props.state.messageData.map(message =>
        <MessagesItem
            userImage={message.src}
            userName={message.name}
            userMessage={message.message}
        /* createRef={newMessageElement} */
        />
    )

    let newMessageElement = React.createRef();

    let addPost = () => {
        props.addPost()
        props.updateNewPostText('')
    }

    /* let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    } */

    return (
        <div className={style.dialogContent}>
            <h2>DIALOGS</h2>
            <div className={style.contacts}>
                <ul className={style.ul}>
                    {DialogsElement}
                </ul>
            </div>
            <div className={style.messages}>
                <div className={style.messagesContainer}>
                    <Route path={'/messages/id555555'}>
                        {MessagesElement}
                    </Route>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
