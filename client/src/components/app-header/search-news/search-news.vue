<template>
<div>
  <form class="serch-news__form" @submit.prevent>
    <input
      type="text"
      class="serch-news__input"
      v-model="id"
    >
    <button style="flex-grow: 1" @click="findNews(id); id=''">Найти</button>
  </form>
  <button style="flex-grow: 1" @click="ShowAllNews">Все</button>
</div>
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
  flex-grow: 10;
  width: 70%;
}

.serch-news__form {
  flex-grow: 10;
  display: flex;
  flex-wrap: wrap;
}
</style>