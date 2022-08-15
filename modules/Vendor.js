import { $axios } from '@/static/api'

class Vendor {
    getBusinesses() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/user/businesses/mine?page=1&count=15`)
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
}

const VendorController = new Vendor()
export { VendorController }
