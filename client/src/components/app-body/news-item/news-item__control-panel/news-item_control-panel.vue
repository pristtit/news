<template>
<div>
    <newsItemDelete class="news-item__delete"/>
    <newsItemEdit class="news-item__edit"/>
</div>
</template>

<script>
import newsItemDelete from '@/components/app-body/news-item/news-item__control-panel/news-item__delete.vue'
import newsItemEdit from '@/components/app-body/news-item/news-item__control-panel/news-item__edit.vue'

export default {
    components: {
        newsItemDelete: newsItemDelete,
        newsItemEdit: newsItemEdit,
    }
}
</script>

<style>

</style>