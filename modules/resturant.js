// /* eslint-disable no-async-promise-executor */
import { $axios } from '@/static/api'


class Resturant {
    getResturant(location, page = 1, limit = 12) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/business/get?state=${location}&page=${page}&count=${limit}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    getResturantDetail(business_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/business/${business_id}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    getResturantReview(business_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/business/review/${business_id}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    rateResturant(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                // {
                //     "rating": 4,
                //         "business_id": "619aaa16ca5fe50004ffcd58",
                //             "review": "Best Business"
                // }
                const response = await $axios.post(`/business/rate-business`, payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    searchResturant(keyword) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/business/search?name=${keyword}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
}

const ResturantController = new Resturant()
export { ResturantController }