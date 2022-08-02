<template>
    <div class="news-item">
        <newsItemBody
            class="news-item__title"
            :item="item"
            :edit="edit"
        />
        <newsItemControlPanel
            class="news-item_control-panel"
            :edit="edit"
        />
    </div>
</template>

<script>
import newsItemBody from '@/components/app-body/news-item/news-item__title/news-item__title.vue'
import newsItemControlPanel from '@/components/app-body/news-item/news-item__control-panel/news-item_control-panel.vue'

export default {

    data() {
        return {
        news: this.item || {title: null, body: null},
        }
    },

    props: {
        item: {
            type: Object,
        },
        edit: {
            type: Boolean,
        }
    },

    components: {
        newsItemBody: newsItemBody,
        newsItemControlPanel: newsItemControlPanel,
    }

}
</script>

<style>
.news-item {
  display: flex;
  flex-direction: column;
  background-color: rgb(200, 200, 200);
}

.news-item_control-panel {
    align-self: flex-end;
}

</style>