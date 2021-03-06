import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { addPost } from "./state"
import { updateNewPostText } from "./state"
import { updateNewMessageText } from "./state"

export let renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
