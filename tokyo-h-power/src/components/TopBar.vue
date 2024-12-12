<template>
  <div class="top-bar text-dark">
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center py-2">
      <!-- Company Info -->
      <div class="company-info mb-2 mb-md-0 mx-1">
        <span>Welcome to Tokyo H Power Properties Ltd</span>
      </div>

      <!-- Address -->
      <div class="address text-center mb-2 mb-md-0 mx-1">
        <span>JCX Business Tower, 13th Floor, Block-1, Japan Street, Bashundhara R/A, Dhaka, Bangladesh</span>
      </div>

      <!-- Contact Info -->
      <div class="contact text-end  mx-1">
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
  font-weight: bold;
  background-color: #c6a266;
  color: white; /* Change text color for better contrast */
}

.company-info,
.address,
.contact {
  
}

.address span {
  display: block;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .top-bar {
    font-size: 13px; /* Slightly smaller font size on tablets */
  }
}

@media (max-width: 576px) {
  .top-bar {
    font-size: 12px; /* Smaller font size on mobile devices */
  }

  .container {
    padding-left: 15px;
    padding-right: 15px;
  }

  .company-info,
  .address,
  .contact {
    text-align: center; /* Center align on smaller screens */
  }

  .address span {
    font-size: 12px; /* Adjust font size for address on mobile */
  }
}
</style>
