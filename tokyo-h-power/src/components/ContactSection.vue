<template>
    <section class="contact-section container d-flex align-items-center justify-content-center vh-100">
      <div class="row w-100">
        <!-- Map Section -->
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345091865!2d-122.42067968468263!3d37.77492927975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814d9b49c8e7%3A0x3b9490f09a7e6c2a!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1672920592631!5m2!1sen!2s"
            width="80%"
            height="95%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    
        <!-- Contact Form Section -->
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <div class="contact-form">
            <h4 class="text-uppercase fw-bold text-center">Tagline</h4>
            <h2 class="fw-bold text-center">Contact us</h2>
            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Your Name" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Your Email" />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="5" placeholder="Type your message..."></textarea>
              </div>
              <div class="form-check mb-3">
                <input type="checkbox" class="form-check-input" id="terms" />
                <label class="form-check-label" for="terms">I accept the <a href="#">Terms</a></label>
              </div>
              <button type="submit" class="btn btn-dark small-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ContactSection",
  };
  </script>
  
  <style scoped>

  .map {
    border-radius: 8px;
    height: 95%; /* Increased height for taller map */
    max-height: 600px;
    width: 80%; /* Reduced width for narrower map */
  }
  
  .contact-form h4 {
    font-size: 1.2rem;
    color: #333;
  }
  
  .contact-form h2 {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  
  .contact-form p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
  }
  
  .form-label {
    font-weight: bold;
    color: #333;
  }
  
  .form-control {
    border-radius: 5px;
    padding: 10px;
  }
  
  .form-check-label a {
    color: #333;
    text-decoration: underline;
  }
  
  .btn-dark.small-btn {
    background-color: #000;
    border: none;
    font-size: 0.9rem; /* Smaller button */
    padding: 8px 20px; /* Reduced padding */
    display: block;
    margin: 0 auto; /* Center align */
  }
  
  .btn-dark.small-btn:hover {
    background-color: #333;
  }
  
  /* Alignment for Centering */
  .d-flex {
    display: flex;
  }
  .align-items-center {
    align-items: center;
  }
  .justify-content-center {
    justify-content: center;
  }
  
  .vh-100 {
    height: 100vh;
  }
  </style>
  