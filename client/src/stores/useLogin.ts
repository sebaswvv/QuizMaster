import {defineStore} from 'pinia'
import axios from 'axios'
import router from '../router';

export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        loggedIn: false,
        username: '',
        id: 0,
        token: '',
        redirect: '',
    }),
    getters: {
        isLoggedIn: (state) => state.loggedIn,
        getUsername: (state) => state.username,
        getId: (state) => state.id,
        getToken: (state) => state.token,
    },  
    actions: {
        async login(username: string, password: string) {
            try {
                const response = await axios.post("http://localhost:3000/api/users/login", {
                  username: username,
                  password: password,
                });
            
                // check if response is 200
                if (response.status === 200) {
                  // store login in the store
                  this.loggedIn = true;
                  this.username = username;
                  this.id = response.data.userId;
                  this.token = response.data.token;
                  // check if the redirect is not empty
                  if (this.redirect !== '') {
                    // redirect to the redirect
                    router.push(this.redirect);
                    this.redirect = '';
                  }
                  return true;
                }
              } catch (error: any) {
                // check if error is 401
                return false;
              }
        },
        logout() {
            this.loggedIn = false
            this.username = ''
            this.token = ''
            this.id = 0
        },
    },
})

