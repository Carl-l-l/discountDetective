import Vuex from "vuex"
import axios from "axios"
import router from "../router"

// axios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   console.log(config)
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// axios.interceptors.response.use(function())


export default new Vuex.Store({
  state: {
    searching: false,
    admin: {},
    api: "",
    user: {},
    secret: "Th1s1s4S3cr3t",
    cart: []
  },
  getters: {
    getAdminInfo: (state) => state.admin,
    getUserInfo: (state) => state.user,
    getCartInfo: (state) => state.cart,
  },
  mutations: {
    SET_ADMIN_INFO(state, payload) {
      state.admin[payload.key] = payload.data
    },
    SET_USER_INFO(state, userInfo) {
      try {
        // Expiry two days from now
        userInfo.tokenExpiration = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
      } catch (error) {
        console.warn(error)
      }
      state.user = userInfo
      // Save token and userId in local storage
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    SET_SEARCHING(state, searching) {
      state.searching = searching
    },
    SET_CART(state, cart) {
      state.cart = cart
    },
    SET_CART_INFO(state, cart) {
      state.cart = cart;
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  },
  actions: {
    setUserInfoFromLocalStorage() {
      let userInfo = JSON.parse(localStorage.getItem('userInfo'))
      if (userInfo) {
        this.commit('SET_USER_INFO', userInfo)
      }
    },
    async loginUser(){
      this.commit('SET_SEARCHING', true)
      // console.log("loginUser", payload)
      this.commit('SET_USER_INFO',  {token: 'test', userId: 'test'} )
      this.commit('SET_CART_INFO', []);
      router.push('/')

      // await axios
      //   .get(this.state.api + "/login/", payload)
      //   .then((response) => {
      //     this.commit("SET_USER_INFO", response.data);
      //     router.push('/')
      //   })
      //   .catch((error) => {
      //     console.warn("login", error);
      //     alert('Wrong email or password')
      //   });

      this.commit('SET_SEARCHING', false)
    },
    async callAPI(state, payload) {
      const method = payload.method;
      const endpoint = payload.endpoint;
      
      if(!this.state.user.token || !this.state.user.userId) {
        return console.log("No token or userId");
      } 
      
      const token = this.state.user.token;
      const userId = this.state.user.userId;

      let body;
      let params;
      try {
        body = payload.body
      } catch (error) {
        body = '';
        console.warn('callAPI: ' + error)
      }
      try {
        params = payload.params;
      } catch (error) {
        params = '/';
        console.warn('callAPI: ' + error)
      }

      this.commit('SET_SEARCHING', true) // Set searching to true
      let result = '';

      if(method == "GET") {
        await axios.get(this.state.api + "/" + endpoint + "/", { params: {token: token, userId: userId}})
        .then((response) => {
          result = response.data;
          this.commit('SET_SEARCHING', false)
        }).catch((error) => {
          console.warn("GET", error);
        })
      } else if(method == "POST") {
        // this.form.apiSend = {firstname: this.form.firstname, lastname: this.form.lastname, email: this.form.email, phone: this.form.phone, password: SHA256(this.form.password, this.$store.state.secret).toString(), ccCode: this.form.ccCode.code}
        console.log("TESTAPI:", endpoint, params)
        await axios.post(this.state.api + "/" + endpoint + "/", body)
          .then((response) => {
            result = response.data;
          })
          .catch((error) => {
            console.warn("POST", error);
          });
      } else if(method == "PATCH") {
        await axios.patch(this.state.api + "/" + endpoint + "/", body)
        .then((response) => {
          result = response.data;
        })
        .catch((error) => {
          console.warn("PATCH", error);
        });
      }

      this.commit('SET_SEARCHING', false)
      return result;
    },
    async logOut() {
      if (Object.keys(this.state.user).length > 0){
        this.state.user = {}
      } else {
        console.warn("You can't logout, without being logged in")
      }
    },
    async addToCart(state, payload) {
      // Check if product is already in cart
      let product = this.state.cart.find(product => product.id == payload.id)
      if(product) {
        // product.quantity += payload.quantity
      } else {
        this.state.cart.push(payload)
      }
      localStorage.setItem('cart', JSON.stringify(this.state.cart))
    },
    async removeFromCart(state, payload) {
      this.state.cart = this.state.cart.filter(product => product.id != payload.id)
      localStorage.setItem('cart', JSON.stringify(this.state.cart))
    }
  },
})