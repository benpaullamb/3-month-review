<template>
    <div class="panel">
        <h2>{{title}}</h2>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: 'Untitled Panel'
        }
    }
}
</script>

<style lang="scss" scoped>
$panel-opacity: 0.9;

.panel {
    border: 0.8rem solid white;
    opacity: $panel-opacity;
    box-shadow: 0 0 1px 1px white;
    width: 30%;
    height: 100%;
    border-radius: 2rem;
    padding: 1rem 2rem;
    animation-name: dropIn;
    animation-duration: 1s;

    .content {
        margin-top: 1rem;
    }
}

@keyframes dropIn {
    from {
        transform: translate(0, -100vh);
        opacity: 0;
    }
    to {
        transform: translate(0);
        opacity: $panel-opacity;
    }
}
</style>