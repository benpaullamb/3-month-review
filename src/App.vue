<template>
    <div class="container">
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <span class="balance">Sept 2018</span>
            <nav-bar></nav-bar>
            <span class="date">Sept 2018</span>
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
$h3-font-size: 48px;
$h4-font-size: 34px;
$h5-font-size: 24px;
$h6-font-size: 20px;
$body1-font-size: 16px;
$date-margin: 4rem;

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

p, span {
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

        span.date, span.balance {
            font-size: $h6-font-size;
            font-weight: bold;
        }

        span.balance {
            margin-right: auto;
            visibility: hidden;
            margin-left: $date-margin;
        }

        span.date {
            margin-left: auto;
            margin-right: $date-margin;
        }
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 0.9;
    }
}
</style>