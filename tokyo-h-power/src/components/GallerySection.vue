<template>
  <section class="container py-5 gallery">
    <!-- Title Section -->
    <div class="text-center mb-5">
      <h2 class="fw-bold">Gallery</h2>
      <p class="text-muted">
        Explore the story of Tokyo H Power Properties Ltd. and discover how we have grown to become a leader in the real estate industry.
      </p>
    </div>

    <!-- Gallery Layout -->
    <div class="row g-4 align-items-center">
      <!-- Left-Side Image -->
      <div class="col-md-6 col-12">
        <img
          src="@/assets/g1.webp"
          alt="Building 1"
          class="img-fluid rounded mb-4 mb-md-0 gallery-image"
        />
      </div>

      <!-- Right-Side Images -->
      <div class="col-md-6 col-12">
        <!-- Right-Side Top Image -->
        <img
          src="@/assets/g2.webp"
          alt="Building 2"
          class="img-fluid rounded mb-4 mb-sm-0 gallery-image"
        />
        <!-- Right-Side Bottom Image -->
        <img
          src="@/assets/g3.webp"
          alt="Building 3"
          class="img-fluid rounded gallery-image"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  height: 100vh;
}

@media (max-width: 768px) {
  /* Show only the first image in mobile view */
  .gallery-image {
    display: none;
  }

  .gallery img:first-child {
    display: block !important;
    width: 100%;
  }
}
</style>
