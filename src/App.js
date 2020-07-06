import React from "react"
import "./App.css"
import "./components/Header/Header"
import Header from "./components/Header/Header"
import Wrapper from "./components/Wrapper"

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Wrapper state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText} updateNewMessageText={props.updateNewMessageText} />
        </div>
    )
}

export default App
