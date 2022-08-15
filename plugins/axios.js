import { initializeAxios } from '@/static/api'

export default function (context
    // { context.$axios, notifier, store, redirect }
) {
    initializeAxios(context.$axios)

    context.$axios.onRequest((config) => {
        let token = context.store.getters['getToken']

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
    })

    context.$axios.onResponse(response => {
        if (response.config.method !== 'get') {
            context.store.dispatch('showNotification', { type: "success", message: response.data.message })
        }
    })

    context.$axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        // if (code === 400) {
        //     redirect('/400')
        // }
        context.store.dispatch('showNotification', { type: "error", message: error.response.data.message })
    })
}