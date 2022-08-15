import { $axios } from '@/static/api'

export function createBankAccount(payload) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.post(`/business/bank-account/create`, payload)
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}

export function resolveAccount(payload) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.post(`/business/bank-account/account-number/resolve`, payload)
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}

export function deleteBankAccount(account_id) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await this.$axios.delete(`/business/bank-account/delete/${account_id}`)
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}
export function getAllBankAccount(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.get(`/business/bank-account/all`, { business_id: id })
            resolve(response.data.data)
        } catch (error) {
            reject(error)
        }
    })
}
export function getAllBankAccountById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.get(`/business/bank-account/all/${id}`)
            resolve(response.data.data)
        } catch (error) {
            reject(error)
        }
    })
}
export function getAllBanks() {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await $axios.get(`/business/bank-account/banks`)
            resolve(response.data.data)
        } catch (error) {
            reject(error)
        }
    })
}
