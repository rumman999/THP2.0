<template>
  <section class="creations-section d-flex align-items-center justify-content-center">
    <!-- Content Wrapper -->
    <div class="container text-center">
      <!-- Title Section -->
      <div class="mb-4">
        <h2 class="fw-bold">Our Creations</h2>
        <p class="">
          Our creations are a testament to our commitment to excellence, innovation, and sustainability.
          Each project is meticulously planned and executed with a passion for delivering superior real estate solutions that enhance urban living.
        </p>
      </div>

      <!-- Main Content -->
      <div class="row">
        <!-- Highlighted Project -->
        <div class="col-md-6 mb-4" v-if="highlightedProject">
          <div class="card h-100">
            <img
              :src="highlightedProject.image"
              class="card-img-top"
              :alt="highlightedProject.title"
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ highlightedProject.title }}</h5>
              <p class="text-muted">{{ highlightedProject.details }}</p>
            </div>
          </div>
        </div>

        <!-- Grid of Smaller Projects -->
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 mb-4" v-for="(project, index) in standardProjects" :key="index">
              <div class="card h-100">
                <img
                  :src="project.image"
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
import projectsData from "@/project.json";

export default {
  name: "CreationsSection",
  data() {
    return {
      projects: [], // Stores all projects
      highlightedProject: null, // Stores the highlighted project
      standardProjects: [], // Stores the standard projects
    };
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    fetchProjects() {
      try {
        const data = projectsData;

        // Resolve local image paths
        this.projects = data.map((project) => {
          if (!project.image.startsWith("http")) {
            project.image = require(`@/assets/${project.image}`);
          }
          return project;
        });

        // Categorize projects
        this.highlightedProject = this.projects.find(
          (project) => project.category === "Highlighted"
        );
        this.standardProjects = this.projects.filter(
          (project) => project.category === "Standard"
        );
      } catch (error) {
        console.error("Error processing projects:", error);
      }
  },
  },
};
</script>

<style scoped>
.creations-section {
  height: 100vh; /* Full viewport height */
  display: flex; /* Flexbox for centering */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  background-color: #c6a266; /* Optional: light background */
  color: white;
}

.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.card:hover {
  transform: scale(1.03);
}


</style>
