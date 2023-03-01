import {defineStore} from 'pinia'

export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        loggedIn: false,
        username: '',
        id: 0,
        token: '',
    }),
    getters: {
        isLoggedIn: (state) => state.loggedIn,
        getUsername: (state) => state.username,
        getId: (state) => state.id,
        getToken: (state) => state.token,
    },  
    actions: {
        login(username: string, token: string, id: number) {
            this.loggedIn = true
            this.username = username
            this.token = token
            this.id = id
        },
        logout() {
            this.loggedIn = false
            this.username = ''
            this.token = ''
            this.id = 0
        },
    },
})

