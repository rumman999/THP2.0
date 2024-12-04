<template>
  <section class="bg-light py-5 gallery-section">
    <div class="container-fluid">
      <h2 class="text-center mb-4">Discover Your Next Home</h2>
      <!-- Full-width Swiper -->
      <swiper
        class="mySwiper"
        :slides-per-view="6"
        :space-between="0"
        grab-cursor="true"
        :breakpoints="breakpoints"
        style="width: 100vw;"
      >
        <!-- Swiper Slides -->
        <swiper-slide v-for="(item, index) in galleryItems" :key="index">
          <!-- Bootstrap Card -->
          <div class="card gallery-card">
            <img
              :src="item.image"
              class="card-img-top"
              :alt="'Gallery Item ' + (index + 1)"
            />
            <div class="card-body">
              <h5 class="card-title text-center">{{ item.name }}</h5>
              <p class="card-text text-center">{{ item.description }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css"; // Import base Swiper styles
import "swiper/css/navigation"; // Import navigation styles if needed
import "swiper/css/pagination"; // Import pagination styles if needed

export default {
  name: "GallerySection",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      galleryItems: [
        {
          image: "https://via.placeholder.com/400x900",
          name: "Gallery Item 1",
          description: "This is a description of gallery item 1.",
        },
        {
          image: "https://via.placeholder.com/400x900",
          name: "Gallery Item 2",
          description: "This is a description of gallery item 2.",
        },
        {
          image: "https://via.placeholder.com/400x900",
          name: "Gallery Item 3",
          description: "This is a description of gallery item 3.",
        },
        {
          image: "https://via.placeholder.com/400x900",
          name: "Gallery Item 4",
          description: "This is a description of gallery item 4.",
        },
        {
          image: "https://via.placeholder.com/400x900",
          name: "Gallery Item 5",
          description: "This is a description of gallery item 5.",
        },
        {
          image: "https://via.placeholder.com/400x900",
          name: "Gallery Item 6",
          description: "This is a description of gallery item 6.",
        },
        {
          image: "https://via.placeholder.com/400x900",
          name: "Gallery Item 7",
          description: "This is a description of gallery item 7.",
        },
        {
          image: "https://via.placeholder.com/400x900",
          name: "Gallery Item 8",
          description: "This is a description of gallery item 8.",
        },
        {
          image: "https://via.placeholder.com/400x900",
          name: "Gallery Item 9",
          description: "This is a description of gallery item 9.",
        },
      ],
      breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 0 }, // Single column for small screens
        768: { slidesPerView: 2, spaceBetween: 0 },
        1024: { slidesPerView: 3, spaceBetween: 0 },
        1440: { slidesPerView: 4, spaceBetween: 0 },
      },
    };
  },
};
</script>

<style scoped>
.gallery-section{
  height: 100vh;
}
/* Bootstrap Card Styling */
.card {
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

/* Ensure consistent card dimensions */
.gallery-card {
  width: 600px;
  height: 1080px; /* Allows responsive adjustment */
  margin: auto; /* Centering */
}

/* Responsive image adjustments */
.card-img-top {
  height: 900px;
  object-fit: cover;
}

/* Swiper-specific adjustments */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
