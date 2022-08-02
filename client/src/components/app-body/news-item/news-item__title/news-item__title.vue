<template>
  <div class="news-item__title">
    <h2 v-if="!edit">{{ item?.title }}</h2>
    <input
      v-else
      type="text"
      v-model="title"
    >
  </div>
  <div class="news-item__body">
    <h3 v-if="!edit">{{ item?.body }}</h3>
    <input
      v-else
      type="text"
      v-model="body"
    >
  </div>
</template>

<script>
import { mapState } from "pinia";
import { newsStore } from '@/store/news'

export default {

  props: {
      edit: {
        type: Boolean,
      },
      item: {
        type: Object,
      },
  },

  computed: {
    ...mapState(newsStore, ['title', 'body']),
    },
}
</script>

<style>
.news-item__title {
    height: 3em;
}

</style>