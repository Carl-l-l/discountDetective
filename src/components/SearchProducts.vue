<template>
  <div class="container mt-5">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Search for product" aria-label="Search for product"
        aria-describedby="button-addon2">
      <div class="input-group-append">
        <button class="btn btn-search" type="button" id="button-addon2">🔍</button>
      </div>
    </div>

    <div class="card">
      <ul class="list-group">
        <li class="list-group-item" v-for="(product, index) in products" :key="index">
          <div class="card-img">
            <img src="https://picsum.photos/200/300" alt="product image">
          </div>
          <div class="card-body">
            {{ product.name }} {{ product.price}},-
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsView",
  components: {},
  data() {
    return {
      products: [
        { name: 'Oksekød', price: 40 }, { name: 'Banan', price: 5 }
      ]
    };
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
</style>