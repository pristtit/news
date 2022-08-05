import { defineStore } from 'pinia'


export const authStore = defineStore('auth', {

    state: () => ({
        auth: [
            {
                type: 'registration',
                title: 'Регистрация',
                btnTitle: 'Зарегистрироваться',
            },
            {
                type: 'login',
                title: 'Войти',
                btnTitle: 'Войти',
            }
        ],
        currentType: 0,
    }),

    actions: {

        async registration(userName, password) {
            const massegeReq = await fetch('http://localhost:1337/api/users/registration', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName, password })
            });
            const massege = await massegeReq.json();
            return massege;
        },
        
        async login(userName, password) {
            const tokenReq = await fetch('http://localhost:1337/api/users/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                // credentials: 'include',
                body: JSON.stringify({ userName, password })
            });
            console.log(tokenReq.headers);
            const token = await tokenReq.json();
            return token;
        },
    }
})