// /* eslint-disable no-async-promise-executor */
import { $axios } from '@/static/api'


class Orders {
    getOrders(status) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/order/user?status=${status}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    createOrder(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post('/order/create', payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    trackOrder(tracking_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/order/${tracking_id}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    confirmOrder(tracking_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/order/confirm-order/${tracking_id}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    createGokadaOrder(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post('/order/create-order/gokada', payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }

    getOrderStatus(tracking_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/order/status/gokada/${tracking_id}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }

    declineOrder(tracking_id, decline_reason) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/order/decline-order/${tracking_id}/${decline_reason}`)
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    }

    updateOrderStatus(tracking_id) {
        return new Promise(async (resolve, reject) => {
            try {
                // {
                //     "tracking_id": "7amnHW7Sq",
                //         "status": "in-progress"
                // }

                const response = await $axios.post(`/order/update-status`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    ratePersonalOrder(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                // {
                //     "order_id": "61b3262b92e3fb0004e1d023",
                //         "rating": 4
                // }
                const response = await $axios.post(`/order/rate-order`, payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    getPersonalOrderRate(payload) {
        return new Promise(async (resolve, reject) => {
            // {
            //     "order_id": "61b3262b92e3fb0004e1d023",
            // }
            try {
                const response = await $axios.get(`order/rate`, payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
}

const OrdersController = new Orders()
export { OrdersController }
