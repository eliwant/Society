import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.item}>
            <div className={style.image_container}>
                <img
                    src={props.src}
                    alt=""
                />
            </div>
            <div className={style.text}>{props.text}</div>
            <div className={style.likes}>
                {props.likesCount}
            </div>
        </div>
    );
};

export default Post;
