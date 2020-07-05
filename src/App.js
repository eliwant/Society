import React from "react";
import "./App.css";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper";
import {addPost} from "./state";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Wrapper state = {props.state} addPost = {props.addPost}/>
        </div>
    );
};

export default App;
