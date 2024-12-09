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
             Laborum tempor veniam pariatur aliquip ex voluptate in eu do anim aliquip officia. In esse in adipisicing laboris excepteur consequat nulla mollit aute esse amet consectetur. Aute do dolor deserunt id dolore nostrud non aute enim mollit anim.Et enim velit ea nostrud laboris cillum. Consequat ad ea laborum sit nisi excepteur tempor nisi nisi ad officia reprehenderit. Est est et non id occaecat aliquip culpa id et.Do culpa ea do eu mollit adipisicing fugiat ut. Qui nostrud eu ex incididunt cupidatat pariatur sit laboris ullamco sint nulla dolore. Consequat quis pariatur ad deserunt. Tempor pariatur cupidatat proident occaecat est.
          </p>
          <p><strong>Our Mission</strong></p>
          <p class="text-muted">
            Esse veniam quis velit Lorem exercitation ad. Ut exercitation adipisicing sint in do et dolore. Id occaecat cillum mollit dolor aliqua. Lorem reprehenderit labore ex excepteur est quis minim reprehenderit consequat ullamco ea laboris. Fugiat cupidatat id mollit eu officia adipisicing officia veniam occaecat commodo sunt in do eu. Qui ea anim dolore eiusmod mollit esse.Occaecat ullamco magna nostrud laborum veniam irure commodo nisi occaecat consequat. Anim aliqua incididunt enim Lorem proident. Sint excepteur sit velit excepteur pariatur enim in cillum nulla pariatur duis velit tempor ad. Eiusmod amet velit cupidatat do. Et sit enim sunt eiusmod commodo esse elit proident. Irure deserunt in ut do ea nostrud mollit.Labore consequat dolore et dolor qui sunt laborum. Id ex sunt cupidatat adipisicing minim ex magna quis adipisicing. Laboris duis incididunt deserunt irure duis veniam minim id labore reprehenderit aliquip. Quis eiusmod amet ex enim aliquip duis id esse. Labore eu laboris in tempor proident veniam do proident consectetur. Enim officia non deserunt esse culpa elit consectetur.
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

}

.hero-image {
  width: 616px; /* Responsive width */
  height: 702px; /* Fixed height */
  object-fit: cover; /* Maintain aspect ratio while covering the space */
  border-radius: 0.5rem; /* Add rounded corners */
}

button {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add subtle shadow for the button */
}
</style>
