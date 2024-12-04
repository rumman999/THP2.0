<template>
  <section class="hero-section d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left Column: Image -->
        <div class="col-md-6 mb-4 mb-md-0">
          <div class="position-relative text-center">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Placeholder"
              class="img-fluid rounded"
            />
            <button
              class="btn btn-light position-absolute"
              style="top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 50%; width: 60px; height: 60px;"
            >
              <i class="bi bi-play-fill"></i>
            </button>
          </div>
        </div>

        <!-- Right Column: Text Content -->
        <div class="col-md-6 text-center text-md-start">
          <h2 class="fw-bold">
            Commitment to <span class="text-success">innovation</span>, <span class="text-warning">sustainability</span>,
            and <span class="text-primary">excellence</span>
          </h2>
          <p><strong>Who We Are</strong></p>
          <p class="text-muted">
            Tokyo H Power Properties Ltd. is a leading real estate development company renowned for its commitment to innovation, sustainability, and excellence.
          </p>
          <p><strong>Our Mission</strong></p>
          <p class="text-muted">
            To envision a future where Tokyo H Power Properties Ltd. provides its clients with superior quality architectural brilliance, redefining city living.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero-section {
  height: 100vh; /* Full viewport height */
  display: flex; /* Flexbox for centering */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
}

.container {
  max-width: 1200px;
}

img {
  max-height: 400px; /* Ensure consistent image size */
  object-fit: cover; /* Maintain aspect ratio */
}

button {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add subtle shadow for the button */
}
</style>
