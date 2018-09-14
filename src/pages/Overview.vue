<template>
    <page title="Overview">
        <content-panel title="Personal" anim="slideInLeft">
            <h3>My Origin</h3>
            <ul>
                <li><i class="fas fa-code"></i>Video Games</li>
                <li><i class="fas fa-code"></i>Brother started Computer Science</li>
                <li><i class="fas fa-code"></i>Head First Java</li>
                <li><i class="fas fa-code"></i>Game development with Unity3D</li>
                <li><i class="fas fa-code"></i>Computing at 6th Form</li>
                <li><i class="fas fa-code"></i>Computer Science (Digital Media and Games) at University</li>
            </ul>
        </content-panel>
        <content-panel title="Role" anim="slideInRight">
            <img alt="Rapid Prototyping Team logo" src="../images/rpt-logo.svg">
            <ul>
                <li><i class="fas fa-code"></i>Rapid Prototype Developer</li>
                <li><i class="fas fa-code"></i>I create websites/web apps</li>
                <li><i class="fas fa-code"></i>Internal MVPs and external prototypes</li>
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
li {
    margin-bottom: 7%;
}

img {
    width: 100%;
}
</style>