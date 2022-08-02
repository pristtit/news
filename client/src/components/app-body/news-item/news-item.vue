<template>
    <div class="news-item">
        <div class="news-item__title">
            <h2 v-if="!edit">{{ item?.title }}</h2>
            <input
            v-else
            v-model="news.title"
            >
        </div>
        <div class="news-item__body">
            <h3 v-if="!edit">{{ item?.body }}</h3>
            <input
            v-else
            v-model="news.body"
            >
        </div>
        <h6>Id: {{ item?._id }}</h6>
        <div class="news-item_control-panel">
            <button v-if="!edit" @click="deleteN">Удалить</button>
            <button v-if="!edit" @click="edit = !edit">Изменить</button>
            <button v-else @click="createN">Опубликовать</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "pinia";
import { newsStore } from '@/store/news'

export default {

    data() {
        return {
        news: this.item || {title: null, body: null},
        edit: !this.item
        }
    },

    props: {
        item: {
            type: Object,
        },
    },

    methods: {
      ...mapActions(newsStore, ['createNews', 'deleteNews', 'visiblOff', 'updateNews']),

      async createN() {
        if (this.item) {
            const news = await this.updateNews(this.item._id, this.news);
            this.$emit('refresh', news);
            this.edit = false;
        } else {
            const news = await this.createNews(this.news);
            this.visiblOff();
            this.$emit('refresh', news)
        }
      },
      
      async updateN() {
        const news = await this.updateNews(this.item._id, this.news);
        this.$emit('refresh', news)
      },

      async deleteN() {
        const news = await this.deleteNews(this.item._id);
        this.$emit('refresh', news)
      }
    },

}
</script>

<style>

.news-item__title {
    height: 3em;
}

.news-item {
  display: flex;
  flex-direction: column;
  background-color: rgb(200, 200, 200);
}

.news-item_control-panel {
    align-self: flex-end;
}

</style>