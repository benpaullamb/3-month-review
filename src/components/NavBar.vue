<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/overview">Overview</router-link>
        <router-link to="/achievements">Achievements</router-link>
        <router-link to="/objectives">Objectives</router-link>
        <router-link to="/feedback">Feedback</router-link>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
nav {
    background-color: white;
    display: flex;
    justify-content: space-between;
    width: 30%;
    padding: 1rem;
    border-radius: 1rem;
    opacity: 0.9;

    a {
        text-decoration-line: none;
        color: black;
    }
}
</style>
