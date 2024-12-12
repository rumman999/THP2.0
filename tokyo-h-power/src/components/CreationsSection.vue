<template>
  <section class="creations-section d-flex align-items-center justify-content-center">
    <!-- Content Wrapper -->
    <div class="container text-center">
      <!-- Title Section -->
      <div class="mb-4">
        <h2 class="fw-bold">Our Creations</h2>
        <p>
          Our creations are a testament to our commitment to excellence, innovation, and sustainability.
          Each project is meticulously planned and executed with a passion for delivering superior real estate solutions that enhance urban living.
        </p>
      </div>

      <!-- Main Content -->
      <div class="row">
        <!-- Highlighted Project -->
        <div
          class="col-lg-6 col-12 mb-4"
          v-if="highlightedProject"
          :class="{ 'highlighted-project': true }"
          @click="goToProject(highlightedProject.id)"
        >
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
        <div class="col-lg-6 col-12">
          <div class="row">
            <div
              class="col-md-6 col-12 mb-4"
              v-for="(project, index) in standardProjects"
              :key="index"
              @click="goToProject(project.id)"
            >
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
export default {
  name: "CreationsSection",
  data() {
    return {
      projects: [],
      highlightedProject: null,
      standardProjects: [],
    };
  },
  async created() {
    await this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await fetch("https://thp.com.bd/wp/wp-json/wp/v2/projects");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Format projects from API response
        this.projects = data.map((project) => ({
          id: project.id, // Include the ID for routing
          title: project.acf.title || "Untitled",
          details: project.acf.description || "No description available.",
          image: project.acf.project_image || "https://via.placeholder.com/150", // Fallback for missing image
          category: project.acf.category || "Uncategorized",
        }));

        // Categorize projects
        this.highlightedProject = this.projects.find(
          (project) => project.category === "Highlighted"
        );
        this.standardProjects = this.projects.filter(
          (project) => project.category === "Standard"
        );
      } catch (error) {
        console.error("Error fetching or processing projects:", error);
      }
    },
    goToProject(projectId) {
      // Navigate to the project page
      this.$router.push({ name: "ProjectPage", params: { id: projectId } });
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
  padding: 20px; /* Padding to ensure content doesn't touch the edges */
}

.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer; /* Add pointer cursor on hover */
}

.card:hover {
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .creations-section {
    padding: 10px; /* Less padding on smaller screens */
  }

  .card-img-top {
    height: auto; /* Make images responsive */
  }

  .row {
    display: block; /* Display as block on smaller screens */
  }

  .col-lg-6 {
    display: none; /* Hide the second column (grid of smaller projects) */
  }

  /* Show only the highlighted project */
  .highlighted-project {
    display: block;
  }
}
</style>
