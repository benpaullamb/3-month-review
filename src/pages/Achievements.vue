<template>
    <page title="Achievements">
        <content-panel title="Learned" anim="slideInLeft">
            <p>I have...</p>
        </content-panel>
        <content-panel title="Done" anim="dropIn">
            <p>I have...</p>
        </content-panel>
        <content-panel title="Seen" anim="slideInRight">
            <p>I have...</p>
        </content-panel>
    </page>
</template>

<script>
import Page from '../Components/Page.vue';
import ContentPanel from '../Components/ContentPanel.vue';

export default {
    components: {
        Page,
        ContentPanel
    }
}
</script>


<style lang="scss" scoped>

</style>