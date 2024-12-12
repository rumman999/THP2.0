<template>
  <div class="testimonial-carousel">
    <!-- Only render carousel content if testimonials are loaded -->
    <div v-if="testimonials.length" class="carousel-content d-flex align-items-center">
      <!-- Image Section -->
      <div class="testimonial-image">
        <img :src="testimonials[activeIndex].image" alt="Client Photo" />
      </div>

      <!-- Text Section -->
      <div class="testimonial-text">
        <h2>{{ testimonials[activeIndex].title }}</h2>
        <p class="rating">
          <span v-for="star in 5" :key="star" class="star">&#9733;</span>
        </p>
        <p>{{ testimonials[activeIndex].content }}</p>
        <p class="testimonial-name"><strong>{{ testimonials[activeIndex].name }}</strong></p>
        <p class="testimonial-role">{{ testimonials[activeIndex].role }}</p>
      </div>
    </div>

    <!-- Loading message -->
    <div v-else class="loading-message">
      <p>Loading testimonials...</p>
    </div>

    <!-- Controls -->
    <div v-if="testimonials.length" class="carousel-buttons">
      <button @click="prevSlide" class="control-btn">
        <i class="bi bi-arrow-left"></i>
      </button>
      <button @click="nextSlide" class="control-btn">
        <i class="bi bi-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialsSection",
  data() {
    return {
      testimonials: [],
      activeIndex: 0,
    };
  },
  async created() {
    await this.fetchTestimonials();
  },
  methods: {
    async fetchTestimonials() {
      try {
        const response = await fetch("https://thp.com.bd/wp/wp-json/wp/v2/testimonials");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Map API response to desired structure
        this.testimonials = data.map((item) => {
          return {
            image: item.acf.image || "https://via.placeholder.com/150", // Fallback image
            title: item.acf.title || "Untitled",
            content: item.acf.content || "No content available.",
            name: item.acf.name || "Anonymous",
            role: item.acf.role || "Unspecified",
          };
        });
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    },
    prevSlide() {
      this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
    },
  },
};
</script>

<style scoped>
/* Container Styling */
.testimonial-carousel {
  height: 80vh;
  text-align: center;
  position: relative;
  padding: 20px;
}

/* Carousel Content */
.carousel-content {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.testimonial-image img {
  width: 700px;
  height: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

.testimonial-text {
  max-width: 600px;
  text-align: left;
}

.testimonial-text h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.rating {
  color: #c6a266; /* Gold color for stars */
  margin-bottom: 10px;
}

.star {
  font-size: 1.2rem;
}

.testimonial-name {
  font-size: 1.2rem;
  margin-top: 10px;
}

.testimonial-role {
  color: gray;
  font-size: 1rem;
}

/* Controls */
.carousel-buttons {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: black;
  display: flex;
  gap: 10px;
}

.control-btn {
  background: none;
  border: 1px solid #000;
  color: black;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.control-btn:hover {
  background-color: #000;
  color: #fff;
}

/* Media Queries for Responsiveness */

/* Tablet */
@media (max-width: 768px) {
.testimonial-carousel{
  display: none;
}
}
</style>
