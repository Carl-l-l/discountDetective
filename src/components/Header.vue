<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-top">
    <div class="container-fluid container">
      <div v-if="!this.$store.state.user.hasOwnProperty('userId')">
        <router-link class="navbar-brand d-lg-none fw-bold text-white" to="/login">Login</router-link>
      </div>
      <router-link class="navbar-brand fw-bold text-white" to="/">
        <img src="../assets/dd_logo.jpeg" height="35" width="35" alt="DiscountDetective LOGO" style="border-radius: 5px;" />
        DISCOUNT<span class="text-secondary fw-bold">DETECTIVE</span>
      </router-link>
      <button type="button" id="navbarBtn" aria-label="Navbar button" class="navbar-toggler on-top"
        data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse navbar-right navbar-side" id="navbarCollapse">
        <div class="navbar-nav ms-auto gap-lg-5 fw-bold">
              <router-link class="nav-item nav-link text-white" to="/"><span>HOME</span></router-link>
              <router-link class="nav-item nav-link text-white" to="/about"><span>ABOUT US</span></router-link>
              <!-- <router-link class="nav-item nav-link text-white" to="/profile"><span>PROFILE</span></router-link> -->
              <router-link class="nav-item nav-link text-white" to="/search-products"><span>SEARCH</span></router-link>
              <router-link class="nav-item nav-link text-white" to="/cart"><span>CART</span> 
              </router-link>
              <router-link v-if="!this.$store.state.user.hasOwnProperty('userId')"
                class="nav-item nav-link text-white d-none d-lg-block" to="/login"><span>LOGIN</span></router-link>
              <a v-if="this.$store.state.user.hasOwnProperty('userId')" @click="this.logOut"
            class="nav-item nav-link text-white"><span>LOG OUT</span></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderFront',
  methods: {
    
  },
  mounted() {

    
  }
}


</script>

<style scoped>
.on-top {
  z-index: 999999;
}

@media (max-width: 991px) {
  .navbar-collapse {
    position: fixed;
    height: 100vh;
    width: 240px;
    font-size: 24px;
    top: 0;
    right: 0;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    background-color: #212529;
    z-index: 9999;
  }

  .navbar-brand>img {
    margin-left: 0px;
  }

  .navbar-collapse.collapsing {
    right: -100%;
    transition: height 0s ease;
  }

  .navbar-collapse.show {
    right: 0;
    transition: right 300ms ease-in-out;
  }

  .navbar-toggler.collapsed~.navbar-collapse {
    transition: right 500ms ease-in-out;
  }

  .navbar-nav .nav-item:nth-child(1) {
    margin-top: 50px;
  }


}
</style>