<template>
  <section class="discover-section">
    <div>
      <h2 class="text-center text-white mb-4">Discover Your Next Home</h2>
      <p class="text-center text-muted mb-5">Browse a Range of Homes to Suit Every Need</p>
      <swiper
        class="mySwiper"
        :slides-per-view="3"
        :space-between="20"
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
              <h6 class="text-uppercase mb-2 text-center">{{ item.subtitle }}</h6>
              <h5 class="card-title text-center" style="color: #c6a266;">{{ item.title }}</h5>
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
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      },
    };
  },
  created() {
    this.fetchDiscoverItems();
  },
  methods: {
    async fetchDiscoverItems() {
      try {
        const response = await fetch("https://thp.com.bd/wp/wp-json/wp/v2/discover_projects");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Map API response to the required structure
        this.discoverItems = data.map((item) => {
          return {
            image: item.acf.image || "https://via.placeholder.com/500x600", // Fallback placeholder image
            subtitle: item.acf.subtitle || "Project",
            title: item.acf.title,
            description: item.acf.description || "No description available.",
          };
        });
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
  padding: 0;
  margin: 0;
  width: auto;
  margin-left: 0;
}

/* Bootstrap Card Styling */
.card {
  border: none;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  width: 500px;
  height: 750px;
}

.card:hover {
  transform: translateY(-10px);
}

/* Discover Card Dimensions */
.discover-card {
  width: 100%;
  max-width: 500px;
  margin: auto;
  height: 750px;
}

/* Image Adjustments */
.card-img-top {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
  color: #b3b3b3 !important;
}
</style>
