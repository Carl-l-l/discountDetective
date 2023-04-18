<template>
  <div class="container">


    <div class="row mt-5">
      <div class="col-lg-6">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search for product" aria-label="Search for product" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn btn-search" type="button" id="button-addon2">🔍</button>
          </div>
        </div>

        <h1 class="display-4">Discount Detective</h1>
        <p class="lead">
          Find the best deals on the internet
        </p>
        <p class="lead">
          <a href="#" class="btn btn-dark btn-lg">Learn more</a>
        </p>
      </div>
      <div class="col-lg-6">
        <img class="img-fluid" src="../assets/discount.png" alt="Discount Detective" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontPage",
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