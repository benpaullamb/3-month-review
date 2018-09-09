<template>
    <div class="centre-container">
        <div class="column-container">
            <img src="../images/ibm-logo.svg" alt="IBM Logo">
            <h1>3 Month Review</h1>
            <h2>Ben Lamb</h2>
            <h3>Rapid Prototype Developer</h3>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$h1-font-size: 96px;
$h2-font-size: 60px;
$h3-font-size: 48px;

.centre-container {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    
    .column-container {
        display: flex;
        height: 50%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        animation: fadeIn;
        animation-duration: 4s;

        img {
            width: 300px;
        }

        h1 {
            font-size: $h1-font-size;
        }

        h2 {
            font-size: $h2-font-size;
        }
    }
}
</style>