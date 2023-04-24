<template>
  <div class="container mt-5">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Search for product" aria-label="Search for product"
        aria-describedby="button-addon2" v-model="searchStr">
      <div class="input-group-append">
        <button class="btn btn-search" type="button" id="button-addon2">🔍</button>
      </div>
    </div>

    <div class="card">
      <ul class="list-group">
        <li class="list-group-item flex-column flex-lg-row " v-for="(product, index) in     products    " :key="index">
          <div class="card-img">
            <img src="https://picsum.photos/300/300" class="img-fluid" alt="product image">
          </div>
          <div class="card-body">

            <div class="product-name text-uppercase">
              {{ product.name}}
            </div>
            <div class="price-piece">
              <!-- List all stores name and price -->
              <div class="store" v-for="(store, index) in product.stores" :key="index">
                <div class="store-name ">
                  {{ store.name }}
                </div>
                <div class="store-price">
                  {{ store.price }},-
                </div>
              </div>

            </div>
            <!-- Add to cart button -->
            <RouterLink class="mt-3 btn btn-dark" to="/product">View More</RouterLink>

            <button class="ms-lg-0 ms-5 mt-3 float-end btn-transparent btn btn-dark btn-add"
              @click="this.addToCart(products[index]); this.active = true;">+</button>
          </div>
        </li>
      </ul>

      <div class="no-results" v-if=" products.length == 0 ">
        <p>No products found...</p>
      </div>
    </div>
  </div>

  <!-- Pop-up on addToCart -->
  <div v-if=" this.$store.state.user.hasOwnProperty('userId') " class="alert alert-success hide"
    :class=" { 'animate': active } " role="alert">
    Added to cart!
  </div>
  <div v-if=" !this.$store.state.user.hasOwnProperty('userId') " class="alert alert-danger hide"
    :class=" { 'animate': active } " role="alert">
    Please login to add to cart!
  </div>
</template>

<script>
export default {
  name: "ProductsView",
  components: {},
  data() {
    return {
      searchStr: '',
      products: [
        { id: 1, name: 'Beef', stores: [{ name: "Lidl", price: 40 }, { name: "Netto", price: 35 }, { name: "Rema 1000", price: 30 }] },
        { id: 2, name: 'Banana', stores: [{ name: "Lidl", price: 5 }, { name: "Netto", price: 4 }, { name: "Rema 1000", price: 6 }] }
      ],
      active: false,
    };
  },
  methods: {
    search(productFilter) {
      console.log('searching for', this.searchStr);
      // Filter products
      this.products = this.products.filter(product => {
        return product.name.toLowerCase().includes(productFilter.toLowerCase());
      });
    },
    // add to cart
    addToCart(product) {
      // Apply animation
      this.active = false

      this.active = true;

      this.$store.dispatch("addToCart", product);

      // Remove animation after 5 seconds
      setTimeout(() => {
        this.active = false
      }, 5000)
    }
  },
  watch: {
    searchStr: function (newVal, oldVal) {
      console.log('searchStr changed', newVal, oldVal);

      if (newVal != '') {
        this.search(newVal);
      } else {
        this.products = [
          { id: 1, name: 'Beef', stores: [{ name: "Lidl", price: 40 }, { name: "Netto", price: 35 }, { name: "Rema 1000", price: 30 }] },
          { id: 2, name: 'Banana', stores: [{ name: "Lidl", price: 5 }, { name: "Netto", price: 4 }, { name: "Rema 1000", price: 6 }] }
        ];
      }
    }
  },
  mounted() {
    /* Check for url query */
    if (this.$route.query.search) {
      this.searchStr = this.$route.query.search;
      this.search(this.searchStr);
    }
  },
};
</script>

<style scoped>
.hide {
  -webkit-transform: scale(0%);
}

.alert {
  min-width: 350px;
  width: 75%;
  position: fixed;
  bottom: 0;
  right: 20px;
  /* transition: 2s ease-in; */
}

.animate {
  animation: moveOpen 5s;
}

/* Alert animation */
@keyframes moveOpen {
  from {
    -webkit-transform: scale(0%);
  }

  10% {
    -webkit-transform: scale(100%);
  }

  50% {
    -webkit-transform: scale(100%);
  }

  90% {
    -webkit-transform: scale(100%);
  }

  to {
    -webkit-transform: scale(0%);
  }
}

.store {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-name {
  font-size: 1.2rem;
  font-weight: bold;
}

.price-piece {
  font-size: 1.2rem;
  font-weight: bold;
  color: #545454;
}

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

.btn-add {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  font-size: 1.2rem;
  background-color: darkgreen;
  border: 1px solid #ced4da;
}

.card {
  margin-top: 20px;
}

.list-group-item {
  display: flex;
}

.card-img {
  width: 200px;
  margin-right: 10px;
}

.card-img img {
  border-radius: 6px;
}

.card-body {
  width: calc(100%-200px);
  margin-top: 10px;
}

.no-results {
  text-align: center;
  margin-top: 20px;
  color: #545454;
}
</style>