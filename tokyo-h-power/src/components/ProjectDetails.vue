<template>
  <section class="project-details-section">
    <!-- Render only when project data is loaded -->
    <div v-if="project">
      <!-- Hero Section -->
      <div class="hero-section d-flex align-items-center justify-content-center text-center">
        <div class="overlay">
          <h1 class="fw-bold">{{ project.title }}</h1>
          <p class="subheading">
            {{ project.subtitle || "A blend of modern luxury and tranquility in a prime location." }}
          </p>
          <button class="scroll-btn" @click="scrollToOverview">
            <i class="arrow-down"></i>
          </button>
        </div>
      </div>

      <!-- Quick Overview Section -->
      <div id="overview" class="quick-overview-section container my-5">
        
        <div class="row align-items-center">
          <h1 class="fw-bold">Quick</h1>
          <h1 class="fw-bold"><span  style="color: #c6a266;">& Special Features</span></h1>
          <div class="col-md-6">
            <ul class="overview-list">
              <li>
                <i class="fas fa-map-marker-alt"></i>
                <strong>Address:</strong> {{ project.address || "N/A" }}
              </li>
              <li>
                <i class="fas fa-building"></i>
                <strong>Type:</strong> {{ project.type || "N/A" }}
              </li>
              <li>
                <i class="fas fa-expand"></i>
                <strong>Land Size:</strong> {{ project.landSize || "N/A" }}
              </li>
              <li>
                <i class="fas fa-road"></i>
                <strong>Front Road:</strong> {{ project.frontRoad || "N/A" }}
              </li>
              <li>
                <i class="fas fa-compass"></i>
                <strong>Orientation:</strong> {{ project.orientation || "N/A" }}
              </li>
              <li>
                <i class="fas fa-ruler-combined"></i>
                <strong>Apartment Size:</strong> {{ project.apartmentSize || "N/A" }}
              </li>
              <li>
                <i class="fas fa-users"></i>
                <strong>Number of Units:</strong> {{ project.units || "N/A" }}
              </li>
              <li>
                <i class="fas fa-car"></i>
                <strong>Number of Parking:</strong> {{ project.parking || "N/A" }}
              </li>
              <li>
                <i class="fas fa-layer-group"></i>
                <strong>Number of Floors:</strong> {{ project.floors || "N/A" }}
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <img :src="project.image" class="img-fluid" :alt="project.title" />
          </div>
        </div>
      </div>

      <!-- Description Section -->
      <div class="description-section my-5">
        <h2 class="text-center fw-bold">Description</h2>
        <p class="text-center mt-3">
          Serenity Heights offers a perfect blend of modern luxury and tranquil living in a prime south-facing location.
          This meticulously designed residential complex boasts upgraded amenities, spacious community spaces, and state-of-the-art facilities.
          Enjoy the elegance of large tiles, the convenience of a hi-tech lift, and the peace of a serene neighborhood.
          Each apartment is crafted with precision, ensuring comfort and style for all residents. Discover your ideal home
          at Serenity Heights and elevate your lifestyle.
        </p>
      </div>
    </div>
    <!-- Loading State -->
    <div v-else class="text-center my-5">
      <p>Loading project details...</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectDetails",
  props: ["id"],
  data() {
    return {
      project: null, // Initially null
    };
  },
  async created() {
    try {
      const response = await fetch(
        `https://thp.com.bd/api/wp-json/wp/v2/projects/${this.id}`
      );
      const data = await response.json();
      this.project = {
        title: data.acf.title || "Untitled",
        subtitle: data.acf.subtitle || "",
        address: data.acf.address || "",
        type: data.acf.type || "",
        landSize: data.acf.land_size || "",
        frontRoad: data.acf.front_road || "",
        orientation: data.acf.orientation || "",
        apartmentSize: data.acf.apartment_size || "",
        units: data.acf.units || "",
        parking: data.acf.parking || "",
        floors: data.acf.floors || "",
        image: data.acf.project_image || "https://via.placeholder.com/150",
      };
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  },
  methods: {
    scrollToOverview() {
      const overviewSection = document.getElementById("overview");
      if (overviewSection) {
        overviewSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.project-details-section {
  font-family: Arial, sans-serif;
}

/* Hero Section */
.hero-section {
  height: 120vh; /* Increase height to make the image larger */
  background: url("../assets/c2.webp") center/cover no-repeat; /* Ensure the image covers the section */
  position: relative;
  color: white;
}

.hero-section .overlay {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-section h1 {
  font-size: 60px; /* Keep title large */
  margin-bottom: 10px;
}

.hero-section .subheading {
  font-size: 24px; /* Larger subheading */
  margin-bottom: 40px;
}

.hero-section .scroll-btn {
  background-color: #c6a266;
  border: none;
  padding: 20px; /* Larger button */
  color: white;
  cursor: pointer;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 70px; /* Increase button size */
  height: 70px;
}

.hero-section .scroll-btn:hover {
  background-color: #a58d4d;
}

.hero-section .arrow-down {
  border: solid white;
  border-width: 0 4px 4px 0; /* Thicker arrow */
  display: inline-block;
  padding: 12px; /* Larger arrow size */
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

/* Quick Overview Section */
.quick-overview-section {
  padding: 40px 20px;
  height: 80vh;
}

.quick-overview-section h2 {
  margin-bottom: 30px;
}

.overview-list {
  list-style-type: none;
  padding: 0;
}

.overview-list li {
  font-size: 20px; /* Larger font */
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.overview-list li i {
  margin-right: 15px;
  font-size: 24px; /* Larger icons */
  color: #c6a266;
}

.overview-list li strong {
  color: #c6a266;
  margin-right: 10px;
  font-size: 22px; /* Strong text size */
}

/* Description Section */
.description-section {
  background-color: black;
  padding: 40px 20px;
  color: white;
  height: 30vh;
}

.description-section h2 {
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 28px; /* Larger title */
}

.description-section p {
  font-size: 18px; /* Larger font */
  color: white;
  line-height: 1.8;
}
</style>

