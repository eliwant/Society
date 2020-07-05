import React from "react";
import style from "./css/Frends.module.css";
import FriendsItem from "./FrendsItem";

const Friends = (props) => {

    let AsideFriendRender = props.state.friends.map(
        friend => <FriendsItem
            src ={friend.avatar}
            name={friend.name}
        />
    )
    return (
        <div className={style.topFriends}>
            <h2>Friends</h2>
            <div className={style.friendsBox}>
                {AsideFriendRender}
            </div>
        </div>
    );
};

export default Friends;
