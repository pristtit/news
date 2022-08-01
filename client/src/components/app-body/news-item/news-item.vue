<template>
    <div class="news-item">
        <newsItemTitle class="news-item__title"/>
        <newsItemBody class="news-item__body"/>
        <newsItemControlPanel class="news-item_control-panel"/>
    </div>
</template>

<script>
import newsItemTitle from '@/components/app-body/news-item/news-item__title/news-item__title.vue'
import newsItemBody from '@/components/app-body/news-item/news-item__body/news-item__body.vue'
import newsItemControlPanel from '@/components/app-body/news-item/news-item__control-panel/news-item_control-panel.vue'

export default {

    components: {
        newsItemTitle: newsItemTitle,
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