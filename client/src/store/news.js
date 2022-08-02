import { defineStore } from 'pinia'


export const newsStore = defineStore('news', {

    state: () => ({
        createVisible: false,
        news: [],
    }),

    actions: {
        findNews(id) {
            this.news = this.news.filter(item => item._id === id);
        },

        addNewsPinia(news) {
            this.news = news
        },

        async createNews(news) {
            const allNews = await fetch('http://localhost:1337/api/news/create', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(news)
            });
            const refNews = await allNews.json();
            return refNews;
        },
        
        async updateNews(id, news) {
            const allNews = await fetch(`http://localhost:1337/api/news/patch/${id}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(news)
            });
            const refNews = await allNews.json()
            console.log(refNews);
            return refNews;
        },
        
        async deleteNews(id) {
            const allNews = await fetch(`http://localhost:1337/api/news/delete/${id}`, {
                method: 'DELETE',
            });
            const refNews = await allNews.json();
            return refNews;
        },

        visiblOn() {
            this.createVisible = true;
        },
        
        visiblOff() {
            this.createVisible = false;
        },
    }
})