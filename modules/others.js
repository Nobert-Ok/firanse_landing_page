import { $axios } from '@/static/api'

class Others {
    getDeliveryPlaces() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/order/delivery-places`)
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
}

const OthersController = new Others()
export { OthersController }
