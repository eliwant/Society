import React from "react";
import Post from "./Post";
import style from "./Profile.module.css"

const Profile = (props) => {
    debugger

    let PostRender = props.state.posts.map(
        postItem => <Post src={postItem.src} text={postItem.text} likesCount={postItem.likes} />
    )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
        props.updateNewPostText('')
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={style.profile}>
            <div className={style.imageBox}>
                <img
                    src="https://static001.infoq.cn/resource/image/c6/b3/c6c9d3323635494f9d9b01468fae97b3.png"
                    alt=""
                />
            </div>
            <div className={style.personBox}>
                <div className="avatar main__person-avatar">
                    <img
                        src="https://im0-tub-ru.yandex.net/i?id=752c84f08c638acfb2b02e2e8b908a89&n=13&exp=1"
                        alt=""
                    />
                </div>
                <div className="main__user">
                    <li>Artem Novikov</li>
                    <li>Date of Birth: 23 January</li>
                    <li>City: Minsk</li>
                    <li>Education: CHTPTU</li>
                    <li>Web Site: https://eliwant.com</li>
                </div>
            </div>
            <div className={style.newPost}>
                <h2 className={style.newPostTite}>My post</h2>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    className={style.newPostTextarea}
                    name=""
                    placeholder="You news...."
                    value={props.state.newPostText}
                />
                <div className={style.newPostSend}>
                    <button onClick={addPost} className="new-post__send">Send</button>
                </div>
            </div>
            <div className={style.renderPostItem}>
                {PostRender}
            </div>
        </div>
    );
};

export default Profile;
