// /* eslint-disable no-async-promise-executor */
import { $axios } from '@/static/api'


class Food {
    FetchFoods(payload) {
        const { state, category = '', time_for_meal = "",
            type_of_meal = "", page = 1, limit = 30 } = payload
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/food/foods?state=${state}&category=${category}&time_for_meal=${time_for_meal}&type_of_meal=${type_of_meal}&page=${page}&count=${limit}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    FetchFood(food_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/food/${food_id}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    getHomeFood(location) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/food/home?state=${location}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    rateFood(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                // {
                //     "rating": 5,
                //         "food_id": "61899bcd0523873438ca365d"
                // }
                const response = await $axios.post(`/food/rate`, payload)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    searchFood(keyword) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/food/search?name=${keyword}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    }
}

const FoodController = new Food()
export { FoodController }
