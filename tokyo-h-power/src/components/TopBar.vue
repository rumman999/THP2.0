<template>
    <div class="top-bar text-dark">
      <div class="container d-flex justify-content-between align-items-center py-2">
        <!-- Company Info -->
        <div class="company-info">
          <span>Welcome to Tokyo H Power Properties Ltd</span>
        </div>
  
        <!-- Address -->
        <div class="address text-center">
          <span>JCX Business Tower, 13th Floor, Block-1, Japan Street, Bashundhara R/A, Dhaka, Bangladesh</span>
        </div>
  
        <!-- Contact Info -->
        <div class="contact text-end">
          <span>01708423361, 01708423362</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TopBar',
  };
  </script>
  
  <style scoped>
  .top-bar {
    font-size: 14px;
    font-weight: 500;
    background-color: #c6a266;
    font-weight: bold;
  }

  .company-info,
  .address,
  .contact {
    padding: 5px;
  }
  
  .address span {
    display: block;
  }
  </style>
  