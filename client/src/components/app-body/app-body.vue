<template>
  <div class="app-body">
    <newsItem
      v-if="createVisible"
      @refresh="(newsUp) => addNewsPinia(newsUp)"
    />
    <newsItem
      v-for="item of ne"
      :key="item._id"
      :item="item"
      @refresh="(newsUp) => addNewsPinia(newsUp)"
      class="news-item"/>
  </div>
</template>

<script>
import newsItem from '@/components/app-body/news-item/news-item.vue'
import { mapState } from "pinia";
import { newsStore } from '@/store/news'
import { mapActions } from "pinia";

export default {

    components: {
        newsItem: newsItem
    },

    data() {
      return {
        news: this.ne,
      }
    },

    computed: {
      ...mapState(newsStore, {createVisible:'createVisible', ne:'news'}),
    },

    methods: {
    ...mapActions(newsStore, ['addNewsPinia']),
    },

    async created() {
      const response = await fetch('http://localhost:1337/api/news/getAll');
      this.addNewsPinia(await response.json());
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