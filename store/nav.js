export const state = () => ({
    currentPage: 'index'
})


export const getters = {
    getCurrentPage: state => {
        return state.currentPage;
    }
}

export const mutations = {
    SET_CURRENT_PAGE: (state, page) => {
        // console.log('setting user =>', page)
        state.currentPage = page
    }
}

export const actions = {
    changePage(vuexContext, page) {
        vuexContext.commit('SET_CURRENT_PAGE', page)
    }
}
