<template>
    <div>
        <h2>Home</h2>

        <ul>

            <router-link tag="li" v-for="(item, k) in 5" :key="k" :to="`/${item}`">
                <a>{{item}}</a>
            </router-link>

        </ul>
    </div>
</template>

<script>
export default {
};
</script>
