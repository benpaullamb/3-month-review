<template>
    <div class="container">
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <nav-bar></nav-bar>
        </footer>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
    components: {
        NavBar
    }
}
</script>

<style lang="scss">
$h1-font-size: 96px;
$h2-font-size: 60px;
$h3-font-size: 48px;
$h4-font-size: 34px;
$body1-font-size: 16px;

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
}

body {
    background-image: url('./images/london-skyline-sunrise.png');
    background-size: cover;
}

h1 {
    font-size: $h3-font-size;
}

h2 {
    font-size: $h4-font-size;
}

p {
    font-size: $body1-font-size;
}

.container {
    height: 100vh;
    display: grid;
    grid-template-rows: 90% 10%;

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>