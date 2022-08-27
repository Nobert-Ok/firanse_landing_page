
export const state = () => ({
    fetchingUser: true,
    userDto: null,
    businessDto: undefined,
    businesses: null,
    token: null,
    walletBalance: 0
})

export const getters = {
    getUserDto: state => {
        return state.userDto
    },
    getBusinessDto: state => {
        return state.businessDto
    },
    getBusinesses: state => {
        return state.businesses
    },
    getToken: state => {
        return state.token
    },
    getWalletBalance: state => {
        return state.walletBalance
    },
    getFetchingUser: state => {
        return state.fetchingUser
    },
}

export const mutations = {
    SET_USER_DTO: (state, user) => {
        state.userDto = user
    },
    SET_BUSINESS_DTO: (state, business) => {
        state.businessDto = business
    },
    SET_BUSINESSES: (state, businesses) => {
        state.businesses = businesses
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_WALLET_BALANCE: (state, balance) => {
        state.walletBalance = balance
    },
    SET_FETCHING_USER: (state, value) => {
        state.fetchingUser = value
    },
}

export const actions = {

    // Getting user
    async signUp(vuexContext, payload) {
        try {
            //get current user
            const response = await this.$axios.post(`/user/sign-up`, payload)
            if (!response.data.error) {
                vuexContext.commit('SET_USER_DTO', response.data.data.user)
                vuexContext.commit('SET_TOKEN', response.data.data.token)
                localStorage.setItem('firanse-token', response.data.data.token)

                return true
            }
            return false

        } catch (err) {
            console.log(err)
        }
    },
    async login(vuexContext, payload) {
        try {
            const headers = {
                'Content-Type': 'application/json'
            }
            vuexContext.commit('SET_FETCHING_USER', true)
            const response = await this.$axios.post(`/user/auth/sign-in`, payload, headers)
            if (!response.data.error) {
                vuexContext.commit('SET_USER_DTO', response.data.data.user)
                vuexContext.commit('SET_TOKEN', response.data.data.token)
                localStorage.setItem('firanse-token', response.data.data.token)
                
                const token = response.data.data.token
                headers.Authorization = `Bearer ${token}`
                const businesses = await this.$axios.get(`/user/businesses/mine?page=1&count=15`, { headers })
                console.log(businesses)
                if (businesses.data.data.business.length > 0) {
                    vuexContext.commit('SET_BUSINESSES', businesses.data.data.business)
                    vuexContext.commit('SET_BUSINESS_DTO', businesses.data.data.business[0])
                    vuexContext.commit('SET_FETCHING_USER', false)
                    localStorage.setItem('firanse-business', businesses.data.data.business[0]._id)
                }
                return true
            }
            return false

        } catch (err) {
            console.log(err.response)
        }
    },
    async getCurrent(vuexContext) {
        try {
            const token = await process.browser ? localStorage.getItem('firanse-token') : null
            // console.log(token)
            vuexContext.commit('SET_TOKEN', token)

            if (token != null) {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
                vuexContext.commit('SET_FETCHING_USER', true)
                await this.$axios.get(`/user/me`, { headers }).then(response => {
                    vuexContext.commit('SET_USER_DTO', response.data.data.user)
                    vuexContext.commit('SET_TOKEN', token)
                })
                await this.$axios.get(`/user/businesses/mine?page=1&count=15`, { headers }).then(businesses => {
                    vuexContext.commit('SET_BUSINESSES', businesses.data.data.business)
                    const business = localStorage.getItem('firanse-business')
                    // console.log('SET_BUSINESSES', businesses.data.data.business)
                    // console.log(business)
                    let foundBusiness = false
                    if (business) {
                        businesses.data.data.business.forEach(item => {
                            // console.log(item._id, business)
                            if (item._id == business) {
                                vuexContext.commit('SET_BUSINESS_DTO', item)
                                foundBusiness = true
                                console.log(item)
                            }
                        })
                        if (!foundBusiness) {
                            // logout

                            vuexContext.dispatch('logout')
                        }
                    } else {
                        if (businesses.data.data.business.length > 0) {
                            vuexContext.commit('SET_BUSINESS_DTO', businesses.data.data.business[0])
                        }
                    }
                    vuexContext.commit('SET_FETCHING_USER', false)
                })
                if (vuexContext.state.businessDto) {
                    const wallet = await this.$axios.get(`/business/wallet/details/${vuexContext.state.businessDto._id}`, { headers })
                    // console.log(wallet.data.data)
                    vuexContext.commit('SET_WALLET_BALANCE', wallet.data.data.balance)
                }
                vuexContext.commit('SET_FETCHING_USER', false)
                return true
            }
            vuexContext.commit('SET_FETCHING_USER', false)
            return false
        } catch (err) {
            console.log(err.response)
        }
    },
    async updateUser(vuexContext, payload) {
        try {
            const token = localStorage.getItem('firanse-token')
            const user = vuexContext.state.userDto
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await this.$axios.put(`/user/update`, payload, { headers })
            vuexContext.commit('SET_USER_DTO', { user, ...payload })
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async createBusiness(vuexContext, formdata) {
        try {
            const token = localStorage.getItem('firanse-token')
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await this.$axios.post(`/business/create`, formdata, { headers })
            vuexContext.commit('SET_BUSINESS_DTO', response.data.business)
            return response.data
        } catch (err) {
            console.log(err)
        }
    },
    async updateBusiness(vuexContext, payload) {
        try {
            const token = localStorage.getItem('firanse-token')
            const business = vuexContext.state.businessDto
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await this.$axios.put(`/business/update`, payload, { headers })
            delete payload.business_id;
            vuexContext.commit('SET_BUSINESS_DTO', { ...business, ...payload })

            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async updateBusinessImage(vuexContext, formdata) {
        try {
            const token = localStorage.getItem('firanse-token')
            const business = vuexContext.state.businessDto
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

            const response = await this.$axios.put(`/business/image/${business._id}`, formdata, { headers })
            vuexContext.commit('SET_BUSINESS_DTO', { ...business, image: response.data.data.image })

            return response.data.data.image
        } catch (err) {
            console.log(err)
        }
    },
    async updateBusinessDto(vuexContext, business) {
        localStorage.setItem('firanse-business', business._id)
        vuexContext.commit('SET_BUSINESS_DTO', business)
    },


    async getResturantReview(vuexContext, business_id) {

        const business = vuexContext.state.businessDto
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.$axios.get(`/business/review/${business._id}`)
                resolve(response.data.data)
            } catch (error) {
                reject(error)
            }
        })
    },
    async changePassword(vuexContext, payload) {
        try {
            const token = localStorage.getItem('firanse-token')
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await this.$axios.put(`/user/password`, payload, { headers })
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async getWalletHistoryAndBalance(vuexContext) {

        const token = vuexContext.state.token
        const business = vuexContext.state.businessDto
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        try {
            const response = await this.$axios.get(`/business/wallet/details/${business._id}`, { headers })
            return response.data.data.history.docs.map(doc => doc)

        } catch (error) {
            return error.response.data
        }
    },

    async getWalletDetails(vuexContext) {

        var headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        try {
            const response = await this.$axios.get(`/business/wallet/details/${business._id}`, { headers })
            vuexContext.commit('SET_WALLET_BALANCE', response.data.data.balance)
            console.log(response.data)

        } catch (error) {
            return error.response.data
        }
    },
    async createFood(vuexContext, formdata) {
        try {
            // const token = localStorage.getItem('firanse-token')
            const token = vuexContext.state.token
            console.log(token)
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            //form data
            await this.$axios.post(`/food/create`, formdata, { headers })
        } catch (err) {
            console.log(err)
        }
    },
    async updateFood(vuexContext, payload) {
        try {
            let token = vuexContext.state.token
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            await this.$axios.put(`/food/update`, payload, { headers })

        } catch (err) {
            console.log(err)
        }
    },
    async updateFoodImage(vuexContext, formdata) {
        try {
            const token = localStorage.getItem('firanse-token')
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

            const response = await this.$axios.put(`/food/image/${formdata.food_id}`, formdata.payload, { headers })

            return response.data.data.image
        } catch (err) {
            console.log(err)
        }
    },
    async getFoods(vuexContext) {
        try {
            let token = vuexContext.state.token
            const business = vuexContext.state.businessDto

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            console.log(business._id)
            const response = await this.$axios.get(`/food/plain?business_id=${business._id}&count=5`, { headers })
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async getFood(vuexContext, food_id) {
        try {
            let token = vuexContext.state.token

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await this.$axios.get(`/food/${food_id}`, { headers })
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async getBusinessFood(vuexContext) {
        try {
            const token = localStorage.getItem('firanse-token')
            let business = vuexContext.state.businessDto

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

            const response = await this.$axios.get(`/food/business/${business._id}`, { headers })
            return response.data.data

        } catch (err) {
            console.log(err)
        }
    },
    async toggleFoodActive(vuexContext, payload) {
        try {
            const token = vuexContext.state.token

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

            await this.$axios.put(`/food/toggle/${payload.food_id}`, { is_active: payload.is_active }, { headers })
        } catch (err) {
            console.log(err)
        }
    },
    async deleteFood(vuexContext, food_id) {
        try {
            let token = vuexContext.state.token
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

            await this.$axios.delete(`/food/delete/${food_id}`, { headers })

        } catch (err) {
            console.log(err)
        }
    },
    async getOrderFood(vuexContext) {
        try {
            const business = vuexContext.state.businessDto
            const token = vuexContext.state.token

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

            const response = await this.$axios.get(`/order/business/${business._id}`, { headers })
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async requestPickup(vuexContext, tracking_id) {
        try {
            const business = vuexContext.state.businessDto
            const token = vuexContext.state.token

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            let payload = {
                tracking_id: tracking_id,
                business_id: business._id
            }
            const response = await this.$axios.post(`/order/create-order/gokada`, payload, { headers })
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async updateOrderStatus(vuexContext, data) {
        try {
            const business = vuexContext.state.businessDto
            const token = vuexContext.state.token

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            let payload = {
                tracking_id: data.tracking_id,
                status: data.status,
                business_id: business._id
            }
            const response = await this.$axios.post(`/order/update-status`, payload, { headers })
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async getOrderById(vuexContext, tracking_id) {
        try {
            const token = vuexContext.state.token

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await this.$axios.get(`/order/${tracking_id}`, { headers })
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async getConfirmOrder(vuexContext, tracking_id) {
        try {
            const token = vuexContext.state.token

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await this.$axios.get(`/order/confirm-order/${tracking_id}`, { headers })
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async declineOrder(vuexContext, { tracking_id, decline_reason }) {
        try {
            const token = vuexContext.state.token

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            console.log(decline_reason)

            const response = await this.$axios.post(`/order/decline-order/${tracking_id}`, { decline_reason: decline_reason }, { headers })
            return response.data
        } catch (err) {
            console.log(err)
        }
    },
    async createAdvert(vuexContext, formdata) {
        try {

            const token = vuexContext.state.token
            var headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }

            const response = await this.$axios.post(`/business/advert/create`, formdata, { headers })
            return response.data
        } catch (err) {
            console.log(err)
        }
    },
    async getAdverts(vuexContext) {
        try {
            const business = vuexContext.state.businessDto
            const token = vuexContext.state.token
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await this.$axios.get(`/business/advert/mine/${business._id}`, { headers })
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async deleteAdvert(vuexContext, advert_id) {
        try {
            const business = vuexContext.state.businessDto
            const token = vuexContext.state.token

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await this.$axios.delete(`/business/advert/delete/${business._id}/${advert_id}`, { headers })
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async createVoucher(vuexContext, payload) {
        try {
            const token = vuexContext.state.token
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await this.$axios.post(`/business/voucher/create`, payload, { headers })
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async getVouchers(vuexContext) {
        try {
            const business = vuexContext.state.businessDto
            const token = vuexContext.state.token

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await this.$axios.get(`/business/voucher/get/${business._id}`, { headers })
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async deleteVoucher(vuexContext, code) {
        try {
            const token = vuexContext.state.token
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await this.$axios.delete(`/business/voucher/delete/${code}`, { headers })
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async logout(vuexContext) {
        try {
            console.log('second')
            vuexContext.commit('SET_USER_DTO', null)
            vuexContext.commit('SET_BUSINESS_DTO', undefined)
            vuexContext.commit('SET_BUSINESSES', null)
            vuexContext.commit('SET_TOKEN', null)

            localStorage.removeItem('firanse-token')
            localStorage.removeItem('firanse-business')
            return true;
        } catch (err) {
            console.log(err)
        }
    },
    async createBankAccount(vuexContext, payload) {
        try {
            const token = vuexContext.state.token
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await this.$axios.post(`/business/bank-account/create`, payload, { headers })
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    },
    async deleteBankAccount(vuexContext, account_id) {
        try {
            const token = vuexContext.state.token

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            await this.$axios.delete(`/business/bank-account/delete/${account_id}`, { headers })

        } catch (err) {
            console.log(err)
        }
    },
    async getBankAccount(vuexContext) {
        try {
            const token = localStorage.getItem('firanse-token')
            const business = vuexContext.state.businessDto

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await this.$axios.get(`/business/bank-account/all`, { business_id: business._id }, { headers })
            return response.data.data
        } catch (err) {
            console.log(err.response.data.message)
        }
    },
    async getBankAccountss(vuexContext, id) {
        try {
            const token = localStorage.getItem('firanse-token')
            const business = vuexContext.state.businessDto

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            // const response = await this.$axios.get(`/business/bank-account/all`, { business_id: business._id }, { headers })
            // return response.data.data

            let data
            await this.$axios.get(`/business/bank-account/all/${id}`, { headers })
                .then(response => {
                    data = response.data.data
                })
            return data
        } catch (err) {
            console.log(err.response.data.message)
        }
    },
    async getTransactions(vuexContext, { business_id, page = 1 }) {
        try {
            const token = localStorage.getItem('firanse-token')
            const business = vuexContext.state.businessDto

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            let data
            await this.$axios.get(`/business/wallet/details/${business_id}?page=${page}`, { headers })
                .then(response => {
                    console.log(response.data)
                    data = response.data.data
                })
            return data
        } catch (err) {
            console.log(err.response.data.message)
        }
    },

    async getAllBanks(vuexContext) {
        try {
            const token = localStorage.getItem('firanse-token')
            var headers = {
                'Authorization': `Bearer ${token}`
            }
            let data
            await this.$axios.get(`/business/bank-account/banks`, { headers }).then(response => {
                data = response.data.data
            })
            return data
        } catch (error) {
            console.log(error)
        }
    },

    async changePassword(vuexContext, payload) {
        try {
            const token = localStorage.getItem('firanse-token')
            var headers = {
                'Authorization': `Bearer ${token}`
            }

            const data = await this.$axios.put(`/user/password`, {
                password: payload.password,
                new_password: payload.new_password
            }, { headers })
            return data
        } catch (err) {

        }
    },
    async makeWithdrawal(vuexContext, payload) {
        try {

            const token = vuexContext.state.token
            const balance = vuexContext.state.walletBalance

            var headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await this.$axios.post(`/business/wallet/withdraw/flutterwave`, payload, { headers })
            vuexContext.commit('SET_WALLET_BALANCE', (balance - payload.amount))
            return response.data.data
        } catch (err) {
            console.log(err.response)
        }
    },
    async showNotification(vuexContext, payload) {
        if (payload.type == "success") {
            this.$toast.success(payload.message)
        }
        if (payload.type == "info") {
            this.$toast.info(payload.message)
        }
        if (payload.type == "error") {
            this.$toast.error(payload.message)
        }
        if (payload.type == "warning") {
            this.$toast.warning(payload.message)
        }
    },
}