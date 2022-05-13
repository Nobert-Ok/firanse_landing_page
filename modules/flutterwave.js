import axios from "axios";
import { $axios } from '@/static/api'

export function makePaymentFLW(data) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data)
            const response = await $axios.post('/business/wallet/pay/flutterwave', data)
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}
