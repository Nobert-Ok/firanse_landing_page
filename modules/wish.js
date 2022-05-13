// /* eslint-disable no-async-promise-executor */
import { $axios } from '@/static/api'


class Wish {

    addToWish(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post('/user/wish/create', payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    getWish() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get('/user/wish')
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    getWishDetail(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/user/wish/${id}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    getFriendWish(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/user/wish/friends/${id}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    deleteWish(wish_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.delete(`/user/wish/delete/${wish_id}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    updateWish(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.put(`/user/wish/update`, payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
}

const WishController = new Wish()
export { WishController }
