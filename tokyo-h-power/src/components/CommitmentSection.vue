<template>
  <section class="hero-section d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left Column: Image -->
        <div class="col-md-6 mb-4 mb-md-0">
          <div class="position-relative text-center">
            <img
              src="@/assets/com1.webp"
              alt="Placeholder"
              class="img-fluid rounded hero-image"
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
            Commitment to innovation, <span style="color: #c6a266;">sustainability
            and excellence</span>
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

.hero-image {
  width: 100%; /* Responsive width */
  height: 702px; /* Fixed height */
  object-fit: cover; /* Maintain aspect ratio while covering the space */
  border-radius: 0.5rem; /* Add rounded corners */
}

button {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add subtle shadow for the button */
}
</style>
