<template>
  <div class="app-header">
    <accountControl/>
    <btnAddNews/>
    <searchNews/>
  </div>
</template>

<script>
import accountControl from '@/components/app-header/account-control/account-control.vue'
import btnAddNews from '@/components/app-header/btn-add-news/btn-add-news.vue'
import searchNews from '@/components/app-header/search-news/search-news.vue'

export default {

    components: {
        accountControl: accountControl,
        btnAddNews: btnAddNews,
        searchNews: searchNews
    }
}
</script>

<style scoped>

.app-header {
    display: flex;
    margin: 40px 20px;
}
</style>