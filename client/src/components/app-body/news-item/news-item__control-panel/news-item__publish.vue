<template>
  <button @click="createNews()">Опубликовать</button>
</template>

<script>
import { mapActions } from 'pinia'
import { newsStore } from '@/store/news'

export default {

    methods: {
      ...mapActions(newsStore, {createNews: 'createNews'}),
    }
}
</script>

<style>

</style>