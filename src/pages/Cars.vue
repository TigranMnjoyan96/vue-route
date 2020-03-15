<template>
    <div>
        <h2>Car name: {{$route.query.carName}}</h2>
        <p>Car year: {{$route.query.year}}</p>

        <div class="scroll"></div>
        <b id="scroll">hello</b>
    </div>
</template>

<script>
export default {

};
</script>

<style>
    .scroll {
        width: 100px;
        height: 100vh;
        background: gold;
    }
</style>
