// /* eslint-disable no-async-promise-executor */
import { $axios } from '@/static/api'

class Address {
    createAddress(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post('/user/address/create', payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    setDefaultAddress(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.put('/user/address/set-default', payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    deleteAddress(address_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.delete(`/user/address/delete/${address_id}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    getAddresses() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/user/address`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }

}

const AddressController = new Address()
export { AddressController }
