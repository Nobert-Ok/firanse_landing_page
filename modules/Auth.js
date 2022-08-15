import { $axios } from '@/static/api'

class Auth {
    signUp(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post(`/user/sign-up`, payload)
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
    login(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post(`/user/auth/sign-in`, payload)
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
    changePassword(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.put(`/user/password`, payload)
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
    resetPassword(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post(`/user/reset-password`, payload)
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
    sendResetToken(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post(`/user/send-reset-token`, payload)
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
}

const AuthController = new Auth()
export { AuthController }
