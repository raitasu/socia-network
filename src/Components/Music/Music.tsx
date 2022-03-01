import React from 'react';
import classes from './Music.module.css'

const Music = () => {
    return (
        <div className={classes.musicTitle}>
          Music
            <div>
                <audio className={classes.audio} controls={true} >Music</audio>
            </div>
            <div>
                <audio className={classes.audio} controls={true} >Music</audio>
            </div>
            <div>
                <audio className={classes.audio} controls={true} >Music</audio>
            </div>
        </div>

    );
};

export default Music;