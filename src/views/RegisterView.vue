<template>
  <div class="container mt-5">
    <div class="action-prompt m-auto">
      <h3 class="text-center">REGISTER</h3>
      <hr />
      <form>
        <!-- Firstname -->
        <div class="form-floating mb-3">
          <input
            v-model="form.firstname"
            type="text"
            class="form-control"
            id="floatingFirstname"
            placeholder="Your First name"
          />
          <label for="floatingName">First name</label>
        </div>
        <!-- Lastname -->
        <div class="form-floating mb-3">
          <input
            v-model="form.lastname"
            type="text"
            class="form-control"
            id="floatingLastname"
            placeholder="Your Last name"
          />
          <label for="floatingName">Last name</label>
        </div>
        <!-- Email -->
        <div class="form-floating mb-3">
          <input
            v-model="form.email"
            type="email"
            class="form-control"
            id="floatingEmail"
            placeholder="name@gmail.com"
          />
          <label for="floatingEmail">Email address</label>
        </div>
        <!-- Password -->
        <div class="form-floating mb-3">
          <input
            v-model="form.password"
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <!-- Repeat Password -->
        <div class="form-floating mb-3">
          <input
            v-model="form.repeatPassword"
            type="password"
            class="form-control"
            id="floatingRepeatPassword"
            placeholder="Repeat Password"
          />
          <label for="floatingRepeatPassword">Repeat Password</label>
        </div>
        <b>Password Requirements:</b>
        <ul>
          <li>Minimum eight characters</li>
          <li>At least one letter</li>
          <li>One number and one special character</li>
        </ul>
        <h5 class="text-danger" v-if="form.password != form.repeatPassword">
          Passwords doesn't match!
        </h5>
        <h5 class="text-danger" v-if="form.password == form.repeatPassword && passwordCheck != true">
          Passwords doesn't meet the requirements
        </h5>
      </form>
      <button v-on:click="registerUser()" :disabled="form.password != form.repeatPassword || passwordCheck == false || form.password.length == 0" class="btn-transparent btn btn-dark">
        Register
      </button>
      <router-link class="text-center nav-link text-white" to="/login"
        ><span>Already have an account?</span></router-link
      >
    </div>
  </div>
</template>

<style scoped>
.action-prompt {
  height: 50%;
  width: 50%;
}

span {
  color: black;
}

@media (max-width: 991px) {
  .action-prompt{
    width: 80%;
  }
}
</style>

<script>
import json from "@/assets/CountryCodes.json";
import axios from "axios";
import SHA256 from "crypto-js/sha256"

export default {
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
        ccCode: {},
        repeatPassword: "",
      },
      passwordCheck: true,
      cc_codes: json.sort(this.compareDialCode),
    };
  },
  watch: {
    'form.password': function (value) {
      const check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g
      if (check.test(value)) {
        this.passwordCheck = true
      }
      else{
        this.passwordCheck = false

      }
    }
  },
  methods: {
    compareDialCode: function (a, b) {
      return (
        a.dial_code.slice(1, a.dial_code.length) -
        b.dial_code.slice(1, b.dial_code.length)
      );
    },
    registerUser: function () {
      this.form.apiSend = {firstname: this.form.firstname, lastname: this.form.lastname, email: this.form.email, phone: this.form.phone, password: SHA256(this.form.password, this.$store.state.secret).toString(), ccCode: this.form.ccCode.code}
      axios
        .post(this.$store.state.api + "/register/", this.form.apiSend)
        .then((response) => {
          console.log(response);
          alert("User registered successfully! Please login to continue.")
          this.$router.push("/login");
        })
        .catch((error) => {
          console.warn("register", error);
        });
    },
  },
};
</script>
