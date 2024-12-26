<template>
    <div class="preloader" v-if="show">
      <div class="spinner"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: true, // Preloader visibility
      };
    },
    methods: {
      hide() {
        this.show = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Fullscreen Preloader Styles */
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #c6a266;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* Spinner Styles */
  .spinner {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #000;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  
  /* Keyframes for spinner */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  