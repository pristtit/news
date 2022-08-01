<template>
  <div class="app-body">
    <newsItem class="news-item"/>
  </div>
</template>

<script>
import newsItem from '@/components/app-body/news-item/news-item.vue'

export default {

    components: {
        newsItem: newsItem
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