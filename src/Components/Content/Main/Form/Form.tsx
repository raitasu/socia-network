import React from "react";
import classes from "./Form.module.css";
import Preloader from "../../../Common/Preloader/Preloader";

export type FormType = {
    profilePageState: any;
};
const Form = (props: FormType) => {
    if (!props.profilePageState.profile) {
        return (
            <>
                <Preloader />
            </>
        );
    }
    return (
        <div className={classes.form}>
            <img
                className={classes.avatar}
                src={
                    props.profilePageState.profile.photos.small !== null
                        ? props.profilePageState.profile.photos.small
                        : "https://cdn1.ozone.ru/s3/multimedia-n/c1200/6193427267.jpg"
                }
                alt="avatar"
            />
            <div className={classes.description}>
                <div className={classes.fullName}>
                    {props.profilePageState.profile.fullName !== null
                        ? props.profilePageState.profile.fullName
                        : props.profilePageState.myProfile.fullName}
                </div>

                <div className={classes.aboutMe}>
                    About me :{" "}
                    {props.profilePageState.profile.aboutMe
                        ? props.profilePageState.profile.aboutMe
                        : ""}
                </div>
                <div className={classes.itemName}>
                    Looking for a job :{" "}
                    {props.profilePageState.profile.lookingForAJob ? (
                        <input type="checkbox" checked={true} />
                    ) : (
                        <input type="checkbox" checked={false} />
                    )}
                </div>
                <div className={classes.contacts}>
                    <div className={classes.contactsName}>Contacts :</div>
                    <div className={classes.item}>
                        <a
                            className={classes.a}
                            href={
                                props.profilePageState.profile.contacts.vk !== null
                                    ? props.profilePageState.profile.contacts.vk
                                    : props.profilePageState.myProfile.contacts.vk
                            }
                        >
                            <img
                                className={classes.itemLogo}
                                src="https://cdn.icon-icons.com/icons2/687/PNG/512/vkontakte_icon-icons.com_61245.png"
                                alt="vk"
                            />
                        </a>
                    </div>
                    <div className={classes.item}>
                        <a
                            className={classes.a}
                            href={
                                props.profilePageState.profile.contacts.twitter !== null
                                    ? props.profilePageState.profile.contacts.twitter
                                    : props.profilePageState.myProfile.contacts.twitter
                            }
                        >
                            <img
                                className={classes.itemLogo}
                                src="https://cdn.icon-icons.com/icons2/687/PNG/512/twitter_icon-icons.com_61255.png"
                                alt="twitter"
                            />
                        </a>
                    </div>
                    <div className={classes.item}>
                        <a
                            className={classes.a}
                            href={
                                props.profilePageState.profile.contacts.instagram !== null
                                    ? props.profilePageState.profile.contacts.instagram
                                    : props.profilePageState.myProfile.contacts.instagram
                            }
                        >
                            <img
                                className={classes.itemLogo}
                                src="https://cdn.icon-icons.com/icons2/687/PNG/512/instagram_icon-icons.com_61256.png"
                                alt="instagram"
                            />
                        </a>
                    </div>
                    <div className={classes.item}>
                        <a
                            className={classes.a}
                            href={
                                props.profilePageState.profile.contacts.youtube !== null
                                    ? props.profilePageState.profile.contacts.youtube
                                    : props.profilePageState.myProfile.contacts.youtube
                            }
                        >
                            <img
                                className={classes.itemLogo}
                                src="https://cdn.icon-icons.com/icons2/687/PNG/512/youtube_icon-icons.com_61253.png"
                                alt="youtube"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
