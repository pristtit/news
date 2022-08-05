<template>
  <div class="app-header">
    <btnAddNews class="btn-add-news"/>
    <searchNews class="search__news"/>
    <accountControl class="account__control"/>
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
  margin: 5px 0;
  display: flex;
  gap: 5px 10px;
  justify-content: space-between ;
  flex-wrap: wrap-reverse;
}

.search__news {
  display: flex;
  flex-grow: 100;
  flex-wrap: wrap;
}
.account__control {
  display: flex;
  flex-wrap: wrap;
}

.btn-add-news {
  flex-grow: 1;
}
</style>