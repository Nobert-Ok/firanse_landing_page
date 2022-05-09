// /* eslint-disable no-async-promise-executor */
import { $axios } from '@/static/api'


class Others {
    getVoucher(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post('/business/voucher/get', payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }

    getAdverts() {
        return new Promise(async (resolve, reject) => {
            try {
                // {
                //     "business_id": "6188227ba3ae8218384e3df4"
                // }
                const response = await $axios.get('/business/advert/get')
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }

    createOrderWish(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post('/order/create-wish', payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    fetchFare(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get('/user/cart/fetch-delivery', payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    getNotification() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get('/user/notification/get')
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    deliveryPlaces() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get('/order/delivery-places')
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    }
}

const OthersController = new Others()
export { OthersController }
