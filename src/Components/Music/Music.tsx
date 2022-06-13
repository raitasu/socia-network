import React from "react";
import classes from "./Music.module.css";
import { HOC } from "../../Hoc/AuthRedirect";

export const Music = () => {
    return (
        <div className={classes.musicTitle}>
            Music
            <div>
                <audio className={classes.audio} controls={true}>
                    Music
                </audio>
            </div>
            <div>
                <audio className={classes.audio} controls={true}>
                    Music
                </audio>
            </div>
            <div>
                <audio className={classes.audio} controls={true}>
                    Music
                </audio>
            </div>
        </div>
    );
};

export const MusicRedirectComponent = HOC(<Music />);
