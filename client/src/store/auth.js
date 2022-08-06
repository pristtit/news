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
        isLogin: JSON.parse(localStorage.getItem("isLogin")) || false
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
            const isLoginReq = await fetch('http://localhost:1337/api/users/login', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ userName, password })
            });

            if (isLoginReq.ok) {
                const isLogin = await isLoginReq.json();
                localStorage.setItem('isLogin', JSON.stringify(isLogin));
                this.isLogin = isLogin;
            }
        },
        
        async logout() {
            const isLoginReq = await fetch('http://localhost:1337/api/users/logout', {
                method: 'POST',
                credentials: 'include',
            });

            if (isLoginReq.ok) {
                const isLogin = await isLoginReq.json();
                localStorage.setItem('isLogin', JSON.stringify(isLogin));
                this.isLogin = isLogin;
            }
        },
    }
})