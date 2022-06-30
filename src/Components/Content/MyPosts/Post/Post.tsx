import React from "react";
import classes from "./Post.module.css";
import avatar from "./avatar-post.png";
import like from "./like-removebg-preview.png";

type PostPropsType = {
    posts: Array<PostType>;
};
export type PostType = {
    id: string;
    message: string;
    amountLike: number;
};

const Post = (props: PostPropsType) => {
    const mapperPost = props.posts.map((el) => {
        return (
            <div className={classes.post}>
                <img className={classes.postImg} src={avatar} alt="avatar_users" />
                <div className={classes.description_post}>{el.message}</div>
                <div className={classes.like}>
                    <img className={classes.like} src={like} alt="like_logo" />
                    <div className={classes.amountLike}>{el.amountLike}</div>
                </div>
            </div>
        );
    });
    return <>{mapperPost}</>;
};

export default Post;
