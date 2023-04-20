<template>
    <div class="container mt-5">
        <h1 class="display-5">Kurv:</h1>
        <div class="card">
            <ul class="list-group">
                <li class="list-group-item flex-column flex-lg-row" v-for="(product, index) in products"
                    :key="index">
                    <div class="card-img">
                        <img src="https://picsum.photos/300/300" class="img-fluid" alt="product image">
                    </div>
                    <div class="card-body">

                        <div class="product-name text-uppercase">
                            {{ product.name }} - {{ product.quantity }} stk.
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
                        <h4 v-if="store.name == cheapestStore.name" class="cheap-tag ms-3">BILLIGST</h4>
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
        removeProduct(product) {
            let cart = JSON.parse(localStorage.getItem("cart"));
            cart = cart.filter((item) => item.name !== product.name);
            localStorage.setItem("cart", JSON.stringify(cart));
            this.getProducts();
            this.getCheapestStore();
        },
        getCheapestStore() {
            // Get cart from local storage
            let cart = JSON.parse(localStorage.getItem("cart"));

            // Get all stores from cart
            let storesInCart = cart.map((product) => product.stores);

            // Find all unique stores
            let uniqueStores = [];
            storesInCart.forEach((stores) => {
                stores.forEach((store) => {
                    if (!uniqueStores.includes(store.name)) {
                        uniqueStores.push(store.name);
                    }
                });
            });
            console.log("UniqueStores", uniqueStores);

            // Get all products from each store
            let productsFromEachStore = [];
            uniqueStores.forEach((store) => {
                let products = [];
                storesInCart.forEach((stores) => {
                    stores.forEach((storeItem) => {
                        if (storeItem.name === store) {
                            products.push(storeItem);
                        }
                    });
                });
                productsFromEachStore.push(products);
            });
            console.log("Products from each store", productsFromEachStore);

            // Find the store prices with store names
            let storePrices = [];
            productsFromEachStore.forEach((products) => {
                let totalPrice = 0;
                products.forEach((product) => {
                    totalPrice += product.price;
                });
                storePrices.push({
                    name: products[0].name,
                    price: totalPrice,
                });
            });
            console.log("Store prices", storePrices)
            this.storeTotal = storePrices;
            // Find the cheapest store
            this.cheapestStore = storePrices.reduce((prev, current) =>
                prev.price < current.price ? prev : current
            );
            console.log("Cheapest store", this.cheapestStore)
            
        },
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