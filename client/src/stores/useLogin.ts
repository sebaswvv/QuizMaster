import {defineStore} from 'pinia'

export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        loggedIn: false,
        username: '',
        token: '',
    }),
    getters: {
        isLoggedIn: (state) => state.loggedIn,
        getUsername: (state) => state.username,
        getToken: (state) => state.token,
    },  
    actions: {
        login(username: string, token: string) {
            this.loggedIn = true
            this.username = username
            this.token = token
        },
        logout() {
            this.loggedIn = false
            this.username = ''
            this.token = ''
        },
    },
})

