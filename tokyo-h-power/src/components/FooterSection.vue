<template>
  <footer class="text-light py-5">
    <div class="container">
      <div class="row">
        <!-- Logo and Newsletter -->
        <div class="col-md-4 col-12 mb-4">
          <img src="@/assets/logo.webp" alt="Company Logo" class="mb-3" style="max-width: 150px;">
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <form class="d-flex">
            <input 
              type="email" 
              class="form-control me-2 bg-transparent text-light border-light" 
              placeholder="Enter your email" 
              required
              style="border-radius: 0;"
            >
            <button 
              type="submit" 
              class="btn text-light border border-light" 
              style="background-color: transparent; border-radius: 0;"
            >
              Subscribe
            </button>
          </form>
          <small class="d-block mt-2">
            By subscribing you agree to our <a href="#" class="text-decoration-underline">Privacy Policy</a> and provide consent to receive updates from our company.
          </small>
        </div>

        <!-- Address -->
        <div class="col-md-4 col-12 mb-4">
          <h5 class="fw-bold">Address</h5>
          <p class="mb-1">JCX Business Tower, 13th Floor, Block - I, Japan Street, Bashundhara R/A, Dhaka, Bangladesh</p>
          <p class="mb-0">Call: <a href="tel:+8801708422361" class="text-light text-decoration-none">+880 1708-422361</a></p>
        </div>

        <!-- Quick Links -->
        <div class="col-md-2 col-12 mb-4">
          <h5 class="fw-bold">Quick Links</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light text-decoration-none">About Us</a></li>
            <li><a href="#" class="text-light text-decoration-none">Our Journey</a></li>
            <li><a href="#" class="text-light text-decoration-none">Latest Offers</a></li>
          </ul>
        </div>

        <!-- Social Links -->
        <div class="col-md-2 col-12">
          <h5 class="fw-bold">Follow Us</h5>
          <ul class="list-unstyled d-flex flex-column">
            <li><a href="#" class="text-light text-decoration-none"><i class="fab fa-facebook me-2"></i>Facebook</a></li>
            <li><a href="#" class="text-light text-decoration-none"><i class="fab fa-instagram me-2"></i>Instagram</a></li>
            <li><a href="#" class="text-light text-decoration-none"><i class="fab fa-twitter me-2"></i>Twitter</a></li>
            <li><a href="#" class="text-light text-decoration-none"><i class="fab fa-linkedin me-2"></i>LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="text-center border-top pt-3 mt-3">
        <small class="d-block">
          &copy; 2024 THP Properties. All Rights Reserved.
        </small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item"><a href="#" class="text-light text-decoration-none">Privacy Policy</a></li>
          <li class="list-inline-item"><a href="#" class="text-light text-decoration-none">Terms of Service</a></li>
          <li class="list-inline-item"><a href="#" class="text-light text-decoration-none">Cookies Settings</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
footer {
  background-color: #060709;
}

footer img {
  max-width: 150px;
}

footer ul {
  padding-left: 0;
}

@media (max-width: 768px) {
  footer .col-md-4, footer .col-md-2 {
    text-align: center;
  }
  .btn {
    margin: 10px;
  }
  footer .d-flex {
    flex-direction: column;
    align-items: center;
  }
}
</style>
