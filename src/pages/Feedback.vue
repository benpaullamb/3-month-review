<template>
    <page title="Feedback">
        <content-panel title="ACE Feedback" anim="slideInLeft">
            <p>I am...</p>
        </content-panel>
        <content-panel title="Worries" anim="slideInRight">
            <p>I am...</p>
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