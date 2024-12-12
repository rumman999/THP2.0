<template>
    <section class="visual-tour-section my-5 container">
      <!-- Title -->
      <div class="title-section text-center mb-4">
        <h1 class="fw-bold">Visual Tour of </h1>
        <h1 class="fw-bold"><span class="highlight">Serenity Heights</span></h1>
      </div>
  
      <div class="row">
        <!-- Featured Image with Play Button -->
        <div class="col-12 mb-3">
          <div class="featured-image position-relative">
            <img
              src="../assets/c2.webp"
              alt="Featured Visual Tour"
              class="img-fluid rounded"
            />
            <button class="play-button position-absolute">
              <i class="fas fa-play"></i>
            </button>
          </div>
        </div>
  
        <!-- Grid of Images -->
        <div class="col-12">
          <div class="image-grid">
            <div
              v-for="(image, index) in images"
              :key="index"
              :class="image.size"
              class="grid-item position-relative"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="grid-image img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "VisualTourSection",
    data() {
      return {
        images: [
          { src: require("@/assets/2.webp"), alt: "Image 1", size: "large" },
          { src: require("@/assets/3.webp"), alt: "Image 2", size: "medium" },
          { src: require("@/assets/4.webp"), alt: "Image 3", size: "medium" },
          { src: require("@/assets/5.webp"), alt: "Image 4", size: "medium" },
          { src: require("@/assets/2.webp"), alt: "Image 5", size: "small" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .visual-tour-section {
    font-family: Arial, sans-serif;
  }
  
  .title-section h2 {
    font-size: 1.8rem;
    color: #000;
  }
  
  .title-section .highlight {
    color: #c6a266;
  }
  
  /* Featured Image */
  .featured-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .featured-image .play-button {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: #c6a266;
  background-color: white;
  border: none;
  border-radius: 50%; /* Ensures the button is a perfect circle */
  width: 60px; /* Set equal width and height for a circle */
  height: 60px;
  display: flex; /* Center the play icon within the button */
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Add shadow for a subtle 3D effect */
}

.featured-image .play-button:hover {
  background-color: #f3f3f3;
}
  
  /* Image Grid */
  .image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  
  .grid-item.large {
    grid-column: span 1.5; /* Larger images span two columns */
    grid-row: span 2; /* Larger images span two rows */
  }
  
  .grid-item.medium {
    grid-column: span 1;
    grid-row: span 1;
  }
  
  .grid-item.small {
    grid-column: span 1;
    grid-row: span 1;
  }
  
  .grid-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  </style>
  