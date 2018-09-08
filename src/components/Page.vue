<template>
    <article>
        <header>
            <h1>{{title}}</h1>
        </header>
        <section>
            <slot></slot>
        </section>
    </article>
</template>

<script>
import ContentPanel from './ContentPanel.vue';

export default {
    props: {
        title: {
            type: String,
            required: true,
            default: 'Untitled Page'
        }
    },
    components: {
        ContentPanel
    }
}
</script>


<style lang="scss" scoped>
article {
    height: 100%;
    display: flex;
    flex-direction: column;

    h1 {
        margin: 1rem 5%;
    }

    section {
        height: fit-content;
        flex: auto;
        padding: 1rem;
        display: flex;
        justify-content: space-around;
    }
}
</style>