<template>
    <div class="container mt-5">
        <h1 class="display-5">Kurv:</h1>
        <div class="card">
            <ul class="list-group">
                <li class="list-group-item flex-column flex-lg-row align-items-center" v-for="(product, index) in products"
                    :key="index">
                    <div class="card-img">
                        <img src="https://picsum.photos/300/300" class="img-fluid" alt="product image">
                    </div>
                    <div class="card-body">

                        <div class="product-name text-uppercase">
                            {{ product.name }}
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
                        <button class="ms-lg-0 ms-5 mt-3 float-end btn-transparent btn btn-dark btn-add">-</button>
                    </div>
                </li>
            </ul>

            <div class="d-flex w33 justify-content-between">
                <h4 class="ms-3 mr-5">Lidl: </h4>
                <h4><b>45 kr.</b></h4>
            </div>
            <div class="d-flex w33 justify-content-between">
                <h4 class="ms-3 mr-5">Netto:</h4>
                <h4><b>39 kr.</b></h4>
            </div>
            <div class="d-flex w33 justify-content-between">
                <h4 class="ms-3 mr-5">Rema 1000: </h4>
                <div class="d-flex">
                    <h4><b>33 kr.</b></h4>
                    <div class="cheap-tag">BILLIGST</div>
                </div>
            </div>

            <div class="no-results" v-if="products.length == 0">
                <p>No products found...</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "CartView",
    components: {},
    data() {
        return {
            products: [
                { name: 'Oksekød', price: 40, stores: [{ name: "Lidl", price: 40 }, { name: "Netto", price: 35 }, { name: "Rema 1000", price: 30 }] }, { name: 'Banan', stores: [{ name: "Lidl", price: 5 }, { name: "Netto", price: 4 }, { name: "Rema 1000", price: 3 }] }
            ]
        };
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
    margin-left: 15px;
    margin-top: 3px;
    border-radius: 5px;
    position: absolute;
    margin-left: 80px;
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