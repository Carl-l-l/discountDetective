<template>
    <div class="container mt-5">
        <h1 class="display-5">Cart:</h1>
        <div class="card">
            <ul class="list-group">
                <li class="list-group-item flex-column flex-lg-row" v-for="(product, index) in products"
                    :key="index">
                    <div class="card-img">
                        <img src="https://picsum.photos/300/300" class="img-fluid" alt="product image">
                    </div>
                    <div class="card-body">

                        <div class="product-name text-uppercase">
                            {{ product.name }} - {{ product.quantity }} pcs.
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
                        <button class="ms-lg-0 ms-5 mt-3 float-end btn-transparent btn btn-dark btn-add" @click="this.removeProduct(product)">-</button>
                    </div>
                </li>
            </ul>

            <div class="no-results" v-if="!products.length == 0">
                <!-- V for each store -->
                <div v-for="(store, index) in storeTotal" :key="index" class="d-flex justify-content-between">
                    <h4 class="ms-3">{{ store.name }} </h4>
                    <div class="d-flex">
                        <h4 v-if="store.name == cheapestStore.name" class="cheap-tag ms-3">CHEAPEST</h4>
                        <h4 class="ms-3"><b>{{ store.price }} kr.</b></h4>
                    </div>
                </div>
            </div>
            <p v-else>No products found...</p>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "CartView",
    components: {},
    data() {
        return {
            products: [],
            storeTotal: [],
            cheapestStore: "",
        };
    },
    methods: {
        // Get local storage cart
        getProducts() {
            this.products = JSON.parse(localStorage.getItem("cart"));
        },
        // Remove product to cart
        async removeProduct(product) {
            // Call the store function
            this.$store.dispatch("removeFromCart", product);
            this.getProducts();
            this.getCheapestStore();
        },
        // Find the cheapest total price, and the store name. Remember there can be multiple of the same product in the cart.
        getCheapestStore() {
            // Get cart
            let cart = this.$store.state.cart;
            this.storeTotal = [];

            // if cart is empty, return
            if (Object.keys(cart) == 0) return;

            // Loop through all the products, then get the quality and price of each store
            cart.forEach((product) => {
                product.stores.forEach((store) => {
                    // Check if the store is already in the array
                    let storeIndex = this.storeTotal.findIndex((x) => x.name == store.name);
                    // If the store is not in the array, add it
                    if (storeIndex == -1) {
                        this.storeTotal.push({
                            name: store.name,
                            price: store.price * product.quantity,
                        });
                    } else {
                        // If the store is in the array, add the price to the existing price
                        this.storeTotal[storeIndex].price += store.price * product.quantity;
                    }
                });
            });
            // Set the cheapest store
            this.cheapestStore = this.storeTotal.reduce((prev, current) =>
                prev.price < current.price ? prev : current
            );
        }
    },
    mounted() {
        this.getProducts();
        this.getCheapestStore();
    },
};
</script>
  
<style scoped>
.w33 {
    width: 33%;
}

.cheap-tag {
    font-size: 0.7rem;
    font-weight: 700;
    background-color: black;
    color: white;
    padding: 0 10px;
    height: 25px;
    justify-content: center;
    align-items: center;
    display: flex;
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
    background-color: red;
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
}</style>