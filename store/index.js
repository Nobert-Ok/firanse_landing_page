// import { fieldValue, firestore } from '@/services/firebase'
// import axios from 'axios'

export const state = () => ({
    vendorDto: null,
})

export const getters = {
    getOtherStores: (state) => {
        // console.log('getting store', state.storeDto)
        return state.otherStores
    },
}

export const mutations = {
    SET_STORE_DTO: (state, store) => {
        // console.log('setting store')
        state.storeDto = store
    },
}

export const actions = {
    async getNickNames(context) {
        const nickNames = await firestore.doc(`special-collection/names`).get()
        context.commit('SET_MY_STORES', myStores)
        context.commit('SET_OTHER_STORES', otherStores)
        return nickNames.data()
    },
}
