<template>
    <section class="amenities-section container my-5">
      <!-- Title -->
      <div class="title-section text-left mb-5">
        <h2 class="fw-bold">Amenities</h2>
        <h2 class="fw-bold"><span class="highlight">& Special Features</span></h2>
      </div>
  
      <div class="row">
        <!-- Left Images Section -->
        <div class="col-lg-5 col-md-12 image-grid">
          <div class="image-wrapper">
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image.src"
              :alt="image.alt"
              class="img-fluid"
            />
          </div>
        </div>
  
        <!-- Right Features Section -->
        <div class="col-lg-7 col-md-12">
          <ul class="features-list">
            <li
              v-for="(feature, index) in features"
              :key="index"
              class="d-flex align-items-start mb-4"
            >
              <div class="icon-wrapper">
                <i :class="feature.icon" class="icon"></i>
              </div>
              <div class="text ms-3">
                <h5 class="fw-bold">{{ feature.title }}</h5>
                <p>{{ feature.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "AmenitiesSection",
    data() {
      return {
        images: [
          { src: require("@/assets/1.webp"), alt: "Amenity 1" },
          { src: require("@/assets/2.webp"), alt: "Amenity 2" },
          { src: require("@/assets/3.webp"), alt: "Amenity 3" },
          { src: require("@/assets/4.webp"), alt: "Amenity 4" },
        ],
        features: [
          {
            icon: "fas fa-home",
            title: "Smart Home Technology",
            description:
              "Experience the future of living with our fully integrated smart home features, allowing you to control lighting, climate, and security systems with ease from your smartphone.",
          },
          {
            icon: "fas fa-spa",
            title: "Wellness Center",
            description:
              "Our exclusive wellness center offers a spa, sauna, and yoga studio, providing a sanctuary for relaxation and rejuvenation.",
          },
          {
            icon: "fas fa-swimming-pool",
            title: "Infinity Pool",
            description:
              "Dive into luxury with our rooftop infinity pool, offering stunning city views and a perfect spot for relaxation and leisure.",
          },
          {
            icon: "fas fa-child",
            title: "Children's Play Area",
            description:
              "Our secure and fun children's play area is designed to keep your little ones entertained and active in a safe environment.",
          },
          {
            icon: "fas fa-tree",
            title: "Lush Green Spaces",
            description:
              "Immerse yourself in nature with beautifully landscaped gardens, walking paths, and tranquil green spaces designed for relaxation and community gathering.",
          },
          {
            icon: "fas fa-dumbbell",
            title: "Fitness Center & Sports Facilities",
            description:
              "Stay active with our fully equipped fitness center, indoor sports courts, and outdoor jogging tracks, catering to all your exercise needs.",
          },
          {
            icon: "fas fa-concierge-bell",
            title: "Dedicated Concierge Service",
            description:
              "Our 24/7 concierge service is always on hand to assist with reservations, deliveries, and other needs, ensuring a seamless and comfortable living experience.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .amenities-section {
    height: 80vh;
  }
  
  .title-section h2 {
    font-size: 2.5rem;
    color: #000;
  }
  
  .title-section .highlight {
    color: #c6a266;
  }
  
  /* Image Grid for Left Section */
  .image-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns */
    grid-template-rows: repeat(2, 1fr); /* Two rows */
    gap: 15px; /* Spacing between images */
  }
  
  .image-grid img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
  
  /* Feature List for Right Section */
  .features-list {
    list-style: none;
    padding: 0;
  }
  
  .features-list li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  
  .features-list .icon-wrapper {
    flex-shrink: 0;
  }
  
  .features-list .icon {
    font-size: 24px;
    color: #c6a266;
  }
  
  .features-list .text h5 {
    margin: 0;
    font-size: 18px;
    color: #000;
  }
  
  .features-list .text p {
    margin: 5px 0 0;
    color: #555;
    font-size: 14px;
    line-height: 1.6;
  }
  </style>
  