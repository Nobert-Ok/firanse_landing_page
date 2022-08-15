import { $axios } from '@/static/api'

class Food {
    createFood(formdata) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.post(`/food/create`, formdata)
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
    updateFood(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.$axios.put(`/food/update`, payload)
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }

    updateFoodImage(formdata) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.put(`/food/image/${formdata.food_id}`, formdata.payload)
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
    getFood(food_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/food/${food_id}`)
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
    getBusinessFood() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/food/business/${business._id}`)
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
    toggleFoodActive(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.$axios.put(`/food/toggle/${payload.food_id}`, { is_active: payload.is_active })
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
    deleteFood(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.$axios.delete(`/food/delete/${food_id}`)
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
}

const FoodController = new Food()
export { FoodController }
