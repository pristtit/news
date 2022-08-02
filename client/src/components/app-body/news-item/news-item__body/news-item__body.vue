<template>
  <div class="news-item__body">
    <h3 v-if="!edit">{{ item?.body }}</h3>
    <input v-else type="text">
  </div>
</template>

<script>
export default {

  props: {
        item: {
            type: Object,
        },
        edit: {
            type: Boolean,
        }
    },
}
</script>

<style>

</style>