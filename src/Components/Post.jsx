import React from 'react';
import MyButton from "./Ui/button/MyButton";
const Post = (props) => {
    return (
            <div className="post">
                <div className="postContent">
                    <strong>
                        {props.number}.
                        {props.post.title}
                    </strong>
                    <div>{props.post.body}</div>
                </div>
                <div className="postBtn">
                    <MyButton>Delete post</MyButton>
                </div>
            </div>

    );
};

export default Post;