import { $axios } from '@/static/api'

export function createAdvert(business_id) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.get(`/business/voucher/get/${business_id}`)
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}
export function getAdverts(business_id) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.get(`/business/advert/mine/${business_id}`)
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}
export function deleteAdvert({ business_id, advert_id }) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.delete(`/business/advert/delete/${business_id}/${advert_id}`)
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}