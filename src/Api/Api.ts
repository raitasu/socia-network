import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "c5885415-5770-4253-9d4d-cbc430888919",
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`, { withCredentials: true })
            .then((response) => response.data);
    },
    unfollowUser(userId: string) {
        return instance.delete(`follow/${userId}`);
    },
    followUser(userId: string) {
        return instance.post(`follow/${userId}`);
    },
    getProfile(userId: string) {
        return profileAPI.getProfile(userId);
    },
    authMe() {
        return authAPI.authMe();
    },
};

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`).then((response) => response.data);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status });
    },
};

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then((response) => response.data);
    },
};
