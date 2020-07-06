import React from "react";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from './News/News';
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import { Route } from "react-router-dom";
import { addPost } from "../../state";

const Main = (props) => {
    return (
        <main class="main">
            <Route exact path="/profile" render={() =>
                <Profile
                    state={props.state.profilePage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />
            } />
            <Route path="/messages" render={() =>
                <Dialogs
                    state={props.state.dialogsPage}
                    updateNewMessageText={props.updateNewMessageText}
                />
            } />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
        </main>
    );
};

export default Main;
