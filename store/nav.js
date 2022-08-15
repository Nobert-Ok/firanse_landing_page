export const state = () => ({
    currentPage: 'index',
    previousPage: null
})

export const getters = {
    getCurrentPage: state => {
        return state.currentPage;
    },
    getPreviousPage: state => {
        return state.currentPage;
    }
}

export const mutations = {
    SET_CURRENT_PAGE: (state, page) => {
        state.currentPage = page
    },
    SET_PREVIOUS_PAGE: (state, page) => {
        state.previousPage = page
    }
}

export const actions = {
    changePage(vuexContext, page) {
        vuexContext.commit('SET_CURRENT_PAGE', page)
    },
    setPreviousPage(vuexContext, page) {
        vuexContext.commit('SET_PREVIOUS_PAGE', page)
    }
}