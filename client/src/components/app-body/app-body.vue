<template>
  <div class="app-body">
    <newsItem
      v-if="createVisible"
      :edit="true"
    />
    <newsItem
      v-for="item of news"
      :key="item._id"
      :item="item"
      :edit="false"
      class="news-item"/>
  </div>
</template>

<script>
import newsItem from '@/components/app-body/news-item/news-item.vue'
import { mapState } from "pinia";
import { newsStore } from '@/store/news'

export default {

    components: {
        newsItem: newsItem
    },

    data() {
      return {
        news: null,
      }
    },

    computed: {
    ...mapState(newsStore, {createVisible: 'createVisible'}),
    },

    async created() {
      const response = await fetch('http://localhost:1337/api/news/getAll');
      this.news = await response.json();
    }

}
</script>

<style scoprd>

.app-body {
  display: flex;
  flex-direction: column;
  padding: 10px 5%;
  box-sizing: border-box; 
}
</style>