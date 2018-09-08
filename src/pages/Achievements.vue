<template>
    <page title="Achievements">
        <content-panel title="Learned">
            <p>I have...</p>
        </content-panel>
        <content-panel title="Done">
            <p>I have...</p>
        </content-panel>
        <content-panel title="Seen">
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