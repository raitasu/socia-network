import React from 'react';
import classes from './CreatePosts.module.css'

const CreatePosts = () => {
    return (
        <div className={classes.create_posts}>
            <textarea className={classes.textarea}>Something text</textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
    );
};

export default CreatePosts;