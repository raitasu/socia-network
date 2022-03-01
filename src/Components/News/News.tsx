import React from 'react';
import classes from './News.module.css'

const News = () => {
    return (
        <div className={classes.news}>
            <div className={classes.newsTitle} >News</div>
            <img src="https://s15.postimg.cc/4rmnhlpi3/H-_DCR_384_of_1051_photo-resizer.ru.png" alt="generalLogo" />
        </div>
    );
};

export default News;