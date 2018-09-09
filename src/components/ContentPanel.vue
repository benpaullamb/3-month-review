<template>
    <div class="panel" :class="{ 'dropInAnim': anim === 'dropIn', 'slideInLeftAnim': anim === 'slideInLeft', 'slideInRightAnim': anim === 'slideInRight' }">
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
        },
        anim: {
            type: String
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
    animation-duration: 1s;

    &:hover {
        box-shadow: 0 0 3px 3px white;
    }

    .content {
        margin-top: 1rem;
    }
}

.dropInAnim {
    animation-name: dropIn;
}

.slideInLeftAnim {
    animation-name: slideInLeft;
}

.slideInRightAnim {
    animation-name: slideInRight;
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

@keyframes slideInLeft {
    from {
        transform: translate(-100vw, 0);
        background-color: hsla(0, 0, 100%, 0);
        box-shadow: 0 0 1px 1px hsla(0, 0, 100%, 0);
    }
    to {
        transform: translate(0);
        background-color: hsla(0, 0, 100%, $panel-opacity);
        box-shadow: 0 0 1px 1px hsla(0, 0, 100%, $panel-opacity);
    }
}

@keyframes slideInRight {
    from {
        transform: translate(100vw, 0);
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