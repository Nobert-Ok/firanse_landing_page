// /* eslint-disable no-async-promise-executor */
import { $axios } from '@/static/api'

class User {
    logIn(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post('/user/auth/sign-in', payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    signUp(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post('/user/sign-up', payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    updateFiranseTag(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.put('/user/update-tag', payload)
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    getCurrentUser(payload) {
        return new Promise(async (resolve, reject) => {
            const token = await AsyncStorage.getItem('firanse_token');
            if (token && token != null) {
                try {
                    const response = await $axios.get('/user/me', payload)
                    resolve(response.data.data)
                } catch (error) {
                    reject(error)
                    console.log(error)
                }
            }
        })
    }
    getUserByTagPhone(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post('/user/user', payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    searchUsers(keyword) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/user/search?name=${keyword}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    updateUser(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.put(`/user/update`, payload)
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    uploadImage(formdata) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.put(`/user/image`, formdata)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    changePassword(formdata) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.put(`/user/password`, formdata)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    resetPassword(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post('/user/reset-password', payload)
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    }

}

const UserController = new User()
export { UserController }
