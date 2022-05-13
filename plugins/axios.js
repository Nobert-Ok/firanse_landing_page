import { initializeAxios } from '@/static/api'

export default function (context
    // { context.$axios, notifier, store, redirect }
) {
    // context.$axios.onRequest((config) => {
    //     let token = context.store.getters['index/getToken']
    //     if (token) {
    //         config.headers.Authorization = `Bearer ${token}`
    //     }
    // })

    context.$axios.onResponse(response => {
        if (response.config.method !== 'get') {
            // context.store.dispatch('showNotification', { type: "success", message: response.data.message })
        }
    })

    initializeAxios(context.$axios)
    context.$axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        // context.store.dispatch('showNotification', { type: "error", message: error.response.data.message })
    })
}
