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
    box-shadow: 0 0 1px 1px hsla(0, 0, 100%, $panel-opacity);
    width: 30%;
    height: 100%;
    border-radius: 2rem;
    padding: 1rem 2rem;
    background-color: hsla(0, 0, 100%, $panel-opacity);
    animation-name: dropIn;
    animation-duration: 1s;

    &:hover {
        box-shadow: 0 0 3px 3px white;
    }

    .content {
        margin-top: 1rem;
    }
}

@keyframes dropIn {
    from {
        transform: translate(0, -100vh);
        background-color: hsla(0, 0, 100%, 0);
        box-shadow: 0 0 1px 1px hsla(0, 0, 100%, 0);
    }
    to {
        transform: translate(0);
        background-color: hsla(0, 0, 100%, $panel-opacity);
        box-shadow: 0 0 1px 1px hsla(0, 0, 100%, $panel-opacity);
    }
}
</style>