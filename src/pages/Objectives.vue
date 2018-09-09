<template>
    <page title="Objectives">
        <content-panel title="Want To Do" anim="slideInLeft">
            <p>I will...</p>
        </content-panel>
        <content-panel title="By the 6 and 12 Month Review..." anim="dropIn">
            <p>I will...</p>
        </content-panel>
        <content-panel title="Growth Points" anim="slideInRight">
            <p>I will...</p>
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