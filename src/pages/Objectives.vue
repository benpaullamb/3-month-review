<template>
    <page title="Objectives">
        <content-panel title="Want To Do" anim="slideInLeft">
            <ul>
                <li><i class="fas fa-code"></i>Learn better design practices</li>
                <li><i class="fas fa-code"></i>Complete a project on my own</li>
                <li><i class="fas fa-code"></i>Use Mobile-First design</li>
                <li><i class="fas fa-code"></i>I wanna be the very best</li>
                <li><i class="fas fa-code"></i>like no one ever was</li>
            </ul>
        </content-panel>
        <content-panel title="By the 6 and 12 Month Review..." anim="dropIn">
            <p>I will...</p>
        </content-panel>
        <content-panel title="Growth Points" anim="slideInRight">
            
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
li {
    margin-bottom: 9%;
}
</style>