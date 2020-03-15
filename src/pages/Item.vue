<template>
    <div>
        <h2>Item id: {{id}}</h2>

        <hr>

        <button class="btn btn-primary" @click="backHome">go back</button>

        <hr>

        <router-link
            tag="button"
            class="btn btn-danger"
            :to="{name: 'fullCar', params: {id: id},
             query: {carName: 'Bmw', year: 2013}, hash: '#scroll'}"
        >Cars</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data() {
    return {
    //   id: this.$router.currentRoute.params.id, //kam senc
      id: this.$route.params.id, // kam el senc
    };
  },
  methods: {
    backHome() {
      this.$router.push('/');
    },
  },
  watch: {
    $route(toR) {
      this.id = toR.params.id;
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log('leave');

    // eslint-disable-next-line no-alert
    if (window.confirm('are you sure you want to leave?')) {
      next();
    } else {
      next(false);
    }
  },
};
</script>
