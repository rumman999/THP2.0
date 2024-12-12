<template>
  <section class="hero-section d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left Column: Image -->
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <div class="position-relative text-center">
            <img
              src="@/assets/abc.webp"
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
        <div class="col-12 col-md-6 text-center text-md-start">
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
            Sit pariatur eu proident ex est laboris nisi culpa laborum esse laboris fugiat cupidatat fugiat. Nulla consectetur cupidatat consequat proident sit. Fugiat ex anim fugiat esse nostrud in sunt sint laborum fugiat. Est sit eu cupidatat id amet sunt incididunt commodo est.
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
  padding: 20px; /* Padding for small screens */
}

.container {
  max-width: 1140px;
  width: 100%; /* Ensure it scales well on small screens */
}

.hero-image {
  width: 100%; /* Make image responsive */
  height: auto; /* Adjust height for responsiveness */
  max-width: 616px; /* Set a max-width for larger screens */
  object-fit: cover; /* Maintain aspect ratio while covering the space */
  border-radius: 0.5rem; /* Add rounded corners */
}

button {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add subtle shadow for the button */
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    height: auto; /* Allow the section to adjust its height on smaller screens */
    padding: 10px; /* Adjust padding for smaller screens */
  }

  .hero-image {
    max-width: 100%; /* Full width for images on smaller screens */
  }

  .col-12 {
    text-align: center; /* Center text on smaller screens */
  }

  .btn {
    width: 50px; /* Slightly smaller button on mobile */
    height: 50px; /* Maintain circular size */
  }

  h2 {
    font-size: 1.8rem; /* Adjust heading size for smaller screens */
  }

  p {
    font-size: 0.9rem; /* Smaller text on smaller screens */
  }
}

@media (max-width: 576px) {
  .hero-image {
    max-width: 100%; /* Full width for image */
  }

  h2 {
    font-size: 1.6rem; /* Adjust font size even further for smaller devices */
  }

  p {
    font-size: 0.85rem; /* Adjust text size for readability */
  }
}
</style>
