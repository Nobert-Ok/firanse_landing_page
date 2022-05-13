// /* eslint-disable no-async-promise-executor */
import { $axios } from '@/static/api'

import AsyncStorage from '@react-native-async-storage/async-storage';

class Cart {
    addToCart(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post('/user/cart/add-to-cart', payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    addToCamp(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post('/user/cart/camp', payload)
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    getCart() {
        return new Promise(async (resolve, reject) => {
            const token = await AsyncStorage.getItem('firanse_token');
            if (token && token != null) {

                try {
                    const response = await $axios.get('/user/cart')
                    resolve(response.data.data)
                } catch (error) {
                    reject(error)
                }
            }
        })
    }
    deleteCart() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.delete(`/user/cart/delete`)
                resolve(response)
            } catch (error) {
                reject(error)
            }
        })
    }
    updateCart(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.put(`/user/cart/update`, payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
}

const CartController = new Cart()
export { CartController }
