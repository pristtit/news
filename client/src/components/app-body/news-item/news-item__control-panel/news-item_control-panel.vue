<template>
<div>
    <newsItemDelete v-if="!edit" class="news-item__delete"/>
    <newsItemEdit v-if="!edit" class="news-item__edit"/>
    <newsItemPublish v-else class="news-item__publish"/>
</div>
</template>

<script>
import newsItemDelete from '@/components/app-body/news-item/news-item__control-panel/news-item__delete.vue'
import newsItemEdit from '@/components/app-body/news-item/news-item__control-panel/news-item__edit.vue'
import newsItemPublish from '@/components/app-body/news-item/news-item__control-panel/news-item__publish.vue'

export default {
    components: {
        newsItemDelete: newsItemDelete,
        newsItemEdit: newsItemEdit,
        newsItemPublish: newsItemPublish,
    },

    props: {
        edit: {
            type: Boolean,
        }
    },
}
</script>

<style>

</style>