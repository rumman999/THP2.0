<template>
  <section class="hero-section text-white">
    <!-- Bootstrap Carousel -->
    <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel" style="height: 100vh;">

      <!-- Carousel Items -->
      <div class="carousel-inner" style="height: 100%;">
        <div class="carousel-item active" style="height: 100%;">
          <img src="@/assets/c1.webp" class="d-block w-100" alt="Slide 1" style="height: 100%; object-fit: cover;">
          <div class="carousel-caption d-flex flex-column justify-content-center" style="height: 100%;">
            <h1 class="display-4">Innovative Design and Architecture</h1>
            <p class="lead">Redefining happiness with creativity and sustainability.</p>
            <button class="btn mx-auto mt-3 learn-btn">Learn More</button>
          </div>
        </div>
        <div class="carousel-item" style="height: 100%;">
          <img src="@/assets/c2.webp" class="d-block w-100" alt="Slide 2" style="height: 100%; object-fit: cover;">
          <div class="carousel-caption d-flex flex-column justify-content-center" style="height: 100%;">
            <h1 class="display-4">Your Dreams Turned into Reality</h1>
            <p class="lead">Bringing sustainable solutions to modern living.</p>
            <button class="btn mx-auto mt-3 learn-btn">Learn More</button>
          </div>
        </div>
        <div class="carousel-item" style="height: 100%;">
          <img src="@/assets/c3.webp" class="d-block w-100" alt="Slide 3" style="height: 100%; object-fit: cover;">
          <div class="carousel-caption d-flex flex-column justify-content-center" style="height: 100%;">
            <h1 class="display-4">Sustainable Design for the Future</h1>
            <p class="lead">Crafting spaces that inspire and connect.</p>
            <button class="btn mx-auto mt-3 learn-btn">Learn More</button>
          </div>
        </div>
      </div>

      <!-- Carousel Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.learn-btn{
  background-color: #c6a266;
  color: white;
}
.hero-section {
  position: relative;
  overflow: hidden;
}

.carousel-caption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay for readability */
  color: white;
  text-align: center;
  padding: 0 15px;
}

.carousel-inner img {
  height: 100vh;
  object-fit: cover;
}
</style>
