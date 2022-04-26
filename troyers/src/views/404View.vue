<template>
  <div id="main">
    <div class="error404">
      <div class="container">
        <h1>404</h1>
        <h4>Oops! Page Not Found</h4>
        <h5>
          Sorry, the page you're looking for doesn't exist.<br />If you think
          something is broken, please report a problem.
        </h5>
        <div class="button-row">
          <a type="button" class="btn white" @click="goBack()">Go Back</a>
          <router-link type="button" class="btn red" to="/report"
            >Report a Problem</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "404View",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.error404 {
  text-align: center;
}
h1 {
  font-family: "Abril Fatface", cursive;
  font-size: 150px;
  padding-top: 20px;
  margin-bottom: 5px;
  line-height: 1;
}
h4 {
  font-family: "Abril Fatface", cursive;
  font-size: 30px;
  text-transform: uppercase;
  line-height: 0.9;
  margin-top: 0;
}
h5 {
  font-family: "Abril Fatface", cursive;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  margin-top: 40px;
}
.button-row {
  display: flex;
  align-items: center;
  margin: 0 30%;
}
.btn {
  flex-basis: 50%;
  padding: 10px 5%;
  margin: 0 10px;
  margin-top: 30px;
  margin-bottom: 0;
}
</style>