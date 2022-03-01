import React from 'react';
import classes from './Post.module.css'
import avatar from './avatar-post.png'
import like from './like.png'
import {mapperPost, PropsType} from "../../../../index";




const Post = (props: PropsType) => {





    return (<>
            {mapperPost}
        </>
    );
};

export default Post;