<template>
    <div>
      <!-- Top Bar Component -->
      <TopBar />
  
      <!-- Header Component -->
      <Header />
  
      <!-- Main Content -->
      <transition name="fade">
        <main class="project-page-main">
          <ProjectDetails :id="id" />
          <AmenitiesSection />
          <VisualSection />
          <ContactSection />
        </main>
      </transition>
  
      <!-- Footer Component -->
      <Footer />
    </div>
  </template>
  
  <script>
  import TopBar from "../components/TopBar.vue";
  import Header from "../components/HeaderSection.vue";
  import ProjectDetails from "../components/ProjectDetails.vue";
  import Footer from "../components/FooterSection.vue";
  import AmenitiesSection from "../components/AmenitiesSection.vue";
  import VisualSection from "@/components/VisualSection.vue";
  import ContactSection from "@/components/ContactSection.vue";
  
  export default {
    name: "ProjectPage",
    components: {
      TopBar,
      Header,
      ProjectDetails,
      Footer,
      AmenitiesSection,
      VisualSection,
      ContactSection,
    },
    props: ["id"],
    watch: {
      $route() {
        // Smooth scroll to the top of the page when the route changes
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
  };
  </script>
  
  <style>
  /* Fade transition for smooth animations */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  </style>
  