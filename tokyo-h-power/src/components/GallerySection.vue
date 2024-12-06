<template>
  <section class="container py-5 gallery">
    <!-- Title Section -->
    <div class="text-center mb-5">
      
    </div>

    <!-- Gallery Layout -->
    <div class="row g-4 align-items-center">
      <!-- Left-Side Image -->
      <div class="col-md-6">
        <h2 class="fw-bold">Gallery</h2>
        <p class="text-muted">
          Explore the story of Tokyo H Power Properties Ltd. and discover how we have grown to become a leader in the real estate industry.
        </p>
        <img
          src="@/assets/g1.webp"
          alt="Building 1"
          class="img-fluid rounded"
        />
      </div>

      <!-- Right-Side Top Image -->
      <div class="col-md-6">
        <img
          src="@/assets/g2.webp"
          alt="Building 2"
          class="img-fluid rounded mb-4"
        />
        <!-- Right-Side Bottom Image -->
        <img
          src="@/assets/g3.webp"
          alt="Building 3"
          class="img-fluid rounded"
        />
      </div>
    </div>
  </section>
</template>

<style>
.gallery{
  height: 100vh;
}
</style>