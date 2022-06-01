import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "abaf6d7d-3636-4277-82e8-cbf95a909917",
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
        return instance.get(`profile/${userId}`).then((response) => response.data);
    },
    authMe() {
        return instance.get(`auth/me`).then((response) => response.data);
    },
};
