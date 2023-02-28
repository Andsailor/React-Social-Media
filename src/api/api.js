import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '127fd3e3-fecf-482c-a80d-325a6ba039f8'
    }
})

const usersAPI = {
    async getUsers(page, usersCount) {
        return await instance
            .get(`users?page=${page}&count=${usersCount}`)
            .then(response => response.data)
    },

    async followUser(id) {
        return await instance
            .post('follow/' + id, {})
    },

    async unfollorUser(id) {
        return await instance
            .delete('follow/' + id)
    },
}

const authAPI = {
    async me() {
        return await instance
            .get('auth/me')
    }
}

const profileAPI = {
    async getUserProfile(id) {
        return await instance
            .get(`profile/${id}`)
    },

    async getStatus(id) {
        return await instance
            .get(`/profile/status/${id}`)
    },

    async updateStatus(status) {
        return await instance
            .put(`/profile/status`, {
                status: status
            })
    }
}

export { usersAPI, authAPI, profileAPI }

