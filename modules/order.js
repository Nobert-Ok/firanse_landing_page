/* eslint-disable no-async-promise-executor */
import { $axios } from '@/static/api'

export function getOrderFood(payload, filter) {
    const { business_id, page = 1, limit = 10 } = payload
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.get(`/order/business/${business_id}?page=${page}&limit=${limit}&${filter}`)
            resolve(response.data.data)
        } catch (error) {
            reject(error)
        }
    })
}

export function requestFoodPickup(payload) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.post(`/order/create-order/gokada`, payload)
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}

export function getOrderById(tracking_id) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.get(`/order/${tracking_id}`)
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}
export function getConfirmOrder(tracking_id) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.get(`/order/confirm-order/${tracking_id}`, { headers })
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}

export function declineOrder(tracking_id, decline_reason) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.put(`/order/decline-order/${tracking_id}`, { headers }, { decline_reason })
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}