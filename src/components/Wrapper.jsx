import React from "react";
import "./Wrapper.css"
import Aside from "./Aside/Aside";
import Main from "./main/Main";
import App from "../App";
import { addPost } from "../state";

const Wrapper = (props) => {
    return (
        <div className="wrapper">
            <Aside state={props.state} />
            <Main state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText} updateNewMessageText={props.updateNewMessageText} />
        </div>
    );
};

export default Wrapper;
