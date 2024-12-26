<template>
  <div>
    <!-- Preloader -->
    <div v-if="loading" class="preloader">
      <div class="preloader-content">
        <span class="preloader-text">THP</span>
      </div>
    </div>

    <!-- Main App -->
    <router-view v-else />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading: true, // Tracks loading state
    };
  },
  mounted() {
    window.addEventListener("load", this.hidePreloader);

    // Route-based loading
    this.$router.beforeEach((to, from, next) => {
      this.showPreloader();
      next();
    });

    this.$router.afterEach(() => {
      this.hidePreloader();
    });
  },
  methods: {
    showPreloader() {
      this.loading = true;
    },
    hidePreloader() {
      setTimeout(() => {
        this.loading = false;
      }, 1000); // Optional delay for smoother transition
    },
  },
  beforeUnmount() {
    window.removeEventListener("load", this.hidePreloader);
  },
};
</script>

<style scoped>
/* Preloader Styles */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #c6a266; /* THP color theme */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.preloader-content {
  text-align: center;
  position: relative;
}

.preloader-text {
  font-family: 'Roboto', Arial, sans-serif; /* Minimalistic font */
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: #ffffff; /* Neutral white text */
  position: relative;
}

.preloader-text::after {
  content: "";
  position: absolute;
  top: 100%; /* Move below the text */
  left: 0;
  width: 100%;
  height: 2px; /* Thin buffer effect */
  background-color: #ffffff;
  transform: scaleX(0);
  transform-origin: left;
  animation: slideBuffer 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  margin-top: 5px; /* Add spacing between the text and the line */
}

/* Animation for the sliding buffer */
@keyframes slideBuffer {
  0% {
    transform: scaleX(0);
  }
  50% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}
</style>
