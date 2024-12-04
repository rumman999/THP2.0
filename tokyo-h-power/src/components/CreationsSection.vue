<template>
  <section class="creations-section d-flex align-items-center justify-content-center">
    <!-- Content Wrapper -->
    <div class="container text-center">
      <!-- Title Section -->
      <div class="mb-4">
        <h2 class="fw-bold">Our Creations</h2>
        <p class="text-muted">
          Our creations are a testament to our commitment to excellence, innovation, and sustainability.
          Each project is meticulously planned and executed with a passion for delivering superior real estate solutions that enhance urban living.
        </p>
      </div>

      <!-- Main Content -->
      <div class="row">
        <!-- Highlighted Project -->
        <div class="col-md-6 mb-4">
          <div class="card h-100">
            <img
              src="https://via.placeholder.com/600x400"
              class="card-img-top"
              alt="Serenity Heights"
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">Serenity Heights</h5>
              <p class="text-muted">Location: Dhaka | 15,000 Sqft</p>
            </div>
          </div>
        </div>

        <!-- Grid of Smaller Projects -->
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 mb-4" v-for="(project, index) in projects" :key="index">
              <div class="card h-100">
                <img
                  src="https://via.placeholder.com/300x200"
                  class="card-img-top"
                  :alt="project.title"
                />
                <div class="card-body">
                  <h6 class="card-title fw-bold">{{ project.title }}</h6>
                  <p class="text-muted">{{ project.details }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CreationsSection",
  data() {
    return {
      projects: [
        {
          title: "Emerald Residences",
          details: "Location: Dhaka | 10,000 Sqft",
        },
        {
          title: "Lakeside Apartments",
          details: "Location: Chittagong | 8,000 Sqft",
        },
        {
          title: "Skyline Villas",
          details: "Location: Dhaka | 10,500 Sqft",
        },
        {
          title: "Cityscape Plaza",
          details: "Location: Dhaka | 12,000 Sqft",
        },
      ],
    };
  },
};
</script>

<style scoped>
.creations-section {
  height: 100vh; /* Full viewport height */
  display: flex; /* Flexbox for centering */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  background-color: #f8f9fa; /* Optional: light background */
}

.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.card:hover {
  transform: scale(1.03);
}

h2 {
  color: #c6a266; /* Use your project's theme color */
}
</style>
