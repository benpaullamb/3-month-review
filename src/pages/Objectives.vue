<template>
    <page title="Objectives">
        <content-panel title="Want To Do" anim="slideInLeft">
            <ul class="right-list">
                <li><i class="fas fa-code"></i>Go back to Japan on my own in April 2019</li>
                <li><i class="fas fa-code"></i>Have a Wake Induced Lucid Dream (WILD)</li>
                <li><i class="fas fa-code"></i>Re-create my workout keeper Android app</li>
            </ul>
            <ul>
                <li><i class="fas fa-code"></i>Learn better design practices</li>
                <li><i class="fas fa-code"></i>Complete a project on my own</li>
                <li><i class="fas fa-code"></i>Use Mobile-First design</li>
                <li><i class="fas fa-code"></i>Work on a client project instead of an internal one</li>
            </ul>
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
ul {
    width: 50%;

    li {
        margin-bottom: 14%;
    }
}

.right-list {
    float: right;
}
</style>