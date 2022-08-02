<template>
  <form @submit.prevent>
    <input
      type="text"
      class="serch-news__input"
      v-model="id"
    >
    <button @click="findNews(id); id=''">Найти</button>
    <button @click="ShowAllNews">Все</button>
  </form>
</template>

<script>
import { newsStore } from '@/store/news'
import { mapActions } from "pinia";

export default {
  data() {
    return {
      id: null
    }
  },

  methods: {
    ...mapActions(newsStore, ['findNews', 'addNewsPinia']),

    async ShowAllNews() {
      const response = await fetch('http://localhost:1337/api/news/getAll');
      this.addNewsPinia(await response.json());
    }
  }
}

</script>

<style>
.serch-news__input {
  flex-grow: 1;
  width: 60%;
}
</style>