import { defineStore } from 'pinia'


export const newsStore = defineStore('news', {

    state() {
        return {
            createVisible: false,
            title: null,
            body: 5,
        }
    },

    actions: {
        async createNews(news) {
            await fetch('http://localhost:1337/api/news/create', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(news)
            });
        },
        visiblOn() {
            this.createVisible = !this.createVisible
        }
    }
})