<template>
  <section class="creations-section">
    <div class="container">
      <!-- Title Section -->
      <div class="text-center mb-4">
        <h2 class="fw-bold">Our Creations</h2>
        <p>
          Our creations are a testament to our commitment to excellence, innovation, and sustainability.
          Each project is meticulously planned and executed with a passion for delivering superior real estate solutions that enhance urban living.
        </p>
      </div>

      <!-- Main Content -->
      <div class="row">
        <!-- Left Column: Highlighted Project -->
        <div class="col-lg-6 col-12 mb-4">
          <div
            class="card highlighted-project h-100"
            v-if="highlightedProject"
            @click="goToProject(highlightedProject.id)"
          >
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

        <!-- Right Column: 2x2 Grid of Remaining Projects -->
        <div class="col-lg-6 col-12">
          <div class="row">
            <div
              class="col-6 mb-4"
              v-for="(project, index) in gridProjects"
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
      gridProjects: [],
    };
  },
  async created() {
    await this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await fetch("https://thp.com.bd/api/wp-json/wp/v2/projects");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Format projects from API response
        this.projects = data.map((project) => ({
          id: project.id,
          title: project.acf.title || "Untitled",
          details: project.acf.description || "No description available.",
          image: project.acf.project_image || "https://via.placeholder.com/150",
          category: project.acf.category || "Uncategorized",
        }));

        // Separate projects into highlighted and grid
        if (this.projects.length > 0) {
          this.highlightedProject = this.projects[0]; // Take the first project as the highlighted one
          this.gridProjects = this.projects.slice(1); // The remaining projects for the grid
        }
      } catch (error) {
        console.error("Error fetching or processing projects:", error);
      }
    },
    goToProject(projectId) {
      this.$router.push({ name: "ProjectPage", params: { id: projectId } });
    },
  },
};
</script>

<style scoped>
.creations-section {
  padding: 40px 0;
  background-color: #c6a266;
  color: white;
}

.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.03);
}

/* Highlighted Project Specific Styles */
.highlighted-project img {
  height: 100%;
  object-fit: cover;
}

/* Adjust the right column grid */
.row > .col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .highlighted-project img {
    height: auto;
  }

  /* Stack items in one column for smaller screens */
  .row {
    flex-direction: column;
  }

  .col-lg-6 {
    width: 100%;
  }

  .col-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
