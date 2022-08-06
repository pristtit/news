<template>
  <button v-if="isLogin" @click="visiblOn">Создать</button>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { newsStore } from '@/store/news'
import { authStore } from '@/store/auth'

export default {

    methods: {
      ...mapActions(newsStore, {visiblOn: 'visiblOn'}),
    },

    computed: {
      ...mapState(authStore, ['isLogin'])
    }
}
</script>

<style>

</style>