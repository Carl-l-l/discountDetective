<template>
  <div class="container">


    <div class="row mt-5">
      <div class="col-lg-6 text-center">

        <h1 class="display-4">Discount Detective</h1>
        <h5 class="lead mt-4">
          Find the best deals on the internet
        </h5>
        <p class="lead">
          <a @click="$router.push('about')" class="btn btn-dark btn-sm">Learn more</a>
        </p>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search for product" aria-label="Search for product" aria-describedby="button-addon2" v-model="searchStr">
          <div class="input-group-append">
            <button @click="this.search" class="btn btn-search" type="button" id="button-addon2">🔍</button>
          </div>
        </div>

        <div v-if="!this.$store.state.user.hasOwnProperty('userId')">
          <h5 class="lead mt-5">Register as a user to start!</h5>
          <div class="d-flex justify-content-center">
            <button @click="$router.push('login')" id="loginBtn" class="btn btn-dark btn-lg mr-4">Login</button>
            <button @click="$router.push('register')" class="btn btn-dark btn-lg ml-5">Register</button>
          </div>
        </div>


      </div>
      <div class="col-lg-2 mt-5 ml-5 text-center">
        <img class="img-fluid" src="../assets/discount.webp" alt="Discount Detective" width="200" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontPage",
  data() {
    return {
      searchStr: "",
    };
  },
  methods: {
    // Router push with query as searchStr
    search() {
      this.$router.push("/search-products?search=" + this.searchStr);
    },
  },
};
</script>

<style scoped>
.btn-search {
  background-color: white;
  color: #000;
  border-radius: 0 10px 10px 0px;
  border: 1px solid #ced4da;
  border-left: 0 !important;
}

.btn-search:hover {
  background-color: #ced4da;
}

#loginBtn {
  margin-right: 10px;
}

</style>