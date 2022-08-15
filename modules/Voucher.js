/* eslint-disable no-async-promise-executor */
import { $axios } from '@/static/api'

export function createVoucher(payload) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.post(`/business/voucher/create`, payload)
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}
export function getVouchers(business_id) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.get(`/business/voucher/get/${business_id}`)
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}
export function deleteVoucher(code) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.delete(`/business/voucher/delete/${code}`)
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}