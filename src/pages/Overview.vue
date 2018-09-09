<template>
    <page title="Overview">
        <content-panel title="Personal" anim="slideInLeft">
            <p>I am...</p>
        </content-panel>
        <content-panel title="Role" anim="slideInRight">
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