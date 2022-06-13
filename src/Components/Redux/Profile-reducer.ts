import {v1} from "uuid";
import {ActionType} from "./Redux-store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../../Api/Api";
import {PostType} from "../Content/MyPosts/Post/Post";

type PhotosType = {
    small: string,
    large: string,
}
type ContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string,
}
export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
}

export type ProfileStateType = {
    posts: PostType[]
    textForTextArea: string,
    profile: ProfileType | null,
    myProfile: ProfileType,
    status: string
}

let InitialProfileState = {
    posts: [
        {id: v1(), message: "Hello, how are you?", amountLike: 10},
        {id: v1(), message: "What is the best moto?", amountLike: 7},
        {id: v1(), message: "Harley-Davidson is a top motorcycle!", amountLike: 33},
        {id: v1(), message: "Maybe Yamaha ?", amountLike: 0},
        {id: v1(), message: "No-no-no ))", amountLike: 100},
    ],
    textForTextArea: "",
    profile: null,
    myProfile: {
        aboutMe: "Creator this application",
        contacts: {
            facebook: "",
            website: '',
            vk: "https://vk.com/soul1n",
            twitter: "https://twitter.com/@sdf",
            instagram: "https://instagram.com/shakesoul",
            youtube: '',
            github: "https://github.com/raitasu",
            mainLink: '',
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "Pavel Buryak",
        userId: 1,
        photos: {
            small: "https://cdn1.ozone.ru/s3/multimedia-n/c1200/6193427267.jpg",
            large: "https://cdn1.ozone.ru/s3/multimedia-n/c1200/6193427267.jpg",
        },
    },
    status: ''
};

export const profileReducer = (state = InitialProfileState, action: ActionType): ProfileStateType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: v1(), message: state.textForTextArea, amountLike: 0};
            return {...state, posts: [newPost, ...state.posts], textForTextArea: ""};
        case "UPDATE-TEXT-FOR-TEXT-AREA": {
            let stateCopy = {...state};
            stateCopy.textForTextArea = action.payload.newText;
            return stateCopy;
        }
        case "SET-USER-PROFILE":
            return {...state, profile: action.payload.profile};
        case "SET-STATUS":
            return {...state, status: action.payload.status}
        default:
            return state;
    }
};
export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const;
};

export const updateTextForTextAreaAC = (newText: string) => {
    return {
        type: "UPDATE-TEXT-FOR-TEXT-AREA",
        payload: {
            newText: newText,
        },
    } as const;
};
export const setUserProfileAC = (profile: any) => {
    return {
        type: "SET-USER-PROFILE",
        payload: {
            profile: profile,
        },
    } as const;
};

export const setStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        payload: {
            status
        }
    } as const
}


export default profileReducer;

export const getProfile = (userId: string | undefined, myProfile: any): any => {
    return (dispatch: Dispatch<ActionType>) => {
        if (!userId) {
            userId = "1";
            dispatch(setUserProfileAC(myProfile));
        }

        usersAPI.getProfile(userId).then((response) => {
            dispatch(setUserProfileAC(response));
        });
    };
};

export const getStatus = (userId: string | undefined): any => {
    return (dispatch: Dispatch<ActionType>) => {
        if (userId) {
            profileAPI.getStatus(userId)
                .then(response => {
                    dispatch(setStatusAC(response.data)
                    )
                    console.log(response.data)
                })
        }

    }
}

export const updateStatus = (status: string): any => {
    return (dispatch: Dispatch<ActionType>) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }
            })
    }


}