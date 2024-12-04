<template>
  <section class="container py-5">
    <h2 class="text-center mb-4">Gallery</h2>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="i in 3" :key="i">
        <div class="card">
          <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Placeholder">
          <div class="card-body">
            <h5 class="card-title">Listing {{ i }}</h5>
            <p class="card-text">Amazing property for your dream lifestyle.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
