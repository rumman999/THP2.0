<template>
  <section class="discover-section">
    <div>
      <h2 class="text-center text-white mb-4">Discover Your Next Home</h2>
      <p class="text-center text-muted mb-5">
        Browse a Range of Homes to Suit Every Need
      </p>
      <swiper
        class="mySwiper"
        :slides-per-view="6"
        :space-between="30"
        grab-cursor="true"
        :breakpoints="breakpoints"
      >
        <swiper-slide v-for="(item, index) in discoverItems" :key="index">
          <div class="card discover-card">
            <img
              :src="item.image"
              class="card-img-top"
              :alt="item.title"
            />
            <div class="card-body">
              <h6 class="text-uppercase text-muted mb-2 text-center">{{ item.subtitle }}</h6>
              <h5 class="card-title text-center text-white">{{ item.title }}</h5>
              <p class="card-text text-center text-muted">{{ item.description }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "DiscoverSection",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      discoverItems: [],
      breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      },
    };
  },
  created() {
    this.fetchDiscoverItems();
  },
  methods: {
    async fetchDiscoverItems() {
      try {
        const response = await fetch('/discover.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.discoverItems = await response.json();
      } catch (error) {
        console.error("Failed to fetch discover items:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Section Styling */
.discover-section {
  background-color: #060709;
  height: 100vh;
  padding: 50px 15px;
}

/* Swiper-specific adjustments */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Bootstrap Card Styling */
.card {
  border: none;
  border-radius: 10px;
  background-color: #1c1c1c;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  width: 500px; /* Fixed width */
  height: 678px; /* Fixed height */
}

.card:hover {
  transform: translateY(-10px);
}

/* Discover Card Dimensions */
.discover-card {
  width: 100%; /* Full width within swiper */
  max-width: 500px; /* Ensure max width consistency */
  margin: auto; /* Centering */
  height: 678px; /* Fixed card height */
}

/* Image Adjustments */
.card-img-top {
  width: 100%;
  height: 300px; /* Fixed height for consistency */
  object-fit: cover; /* Crop images evenly */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle separator */
}

/* Text Styles */
.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 0.9rem;
}

.text-muted {
  color: #b3b3b3 !important; /* Subtle text for descriptions */
}
</style>
