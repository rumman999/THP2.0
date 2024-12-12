<template>
  <header>
    <nav class="navbar navbar-expand-lg container-fluid px-5">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.webp" style="height: 90px;">
      </a>

      <!-- Hamburger Menu Toggle Button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links -->
      <div class="collapse navbar-collapse mx-3" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link text-light" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#contact">Contact</a>
          </li>
          <li class="nav-item">
            <button class="btn get-started-btn px-2">Get Started</button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Navbar Styling */
nav {
  background-color: #060709;
}

/* Nav Link Styling */
.nav-link:hover {
  color: #c6a266;
}

/* Button Styling */
.get-started-btn {
  background-color: #c6a266;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.get-started-btn:hover {
  background-color: #a48450;
  color: #ffffff;
}

/* Mobile Responsive Styles */
@media (max-width: 992px) {
  .nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .nav-item {
    text-align: center;
  }

  .get-started-btn {
    margin-top: 10px;
  }
}

@media (max-width: 576px) {
  /* Adjust logo size for smaller screens */
  nav img {
    height: 80px;
  }

  /* Stack the navbar links on smaller screens */
  .nav {
    display: block;
    text-align: center;
  }

  .nav-item {
    margin-bottom: 10px;
  }

  .get-started-btn {
    font-size: 0.9rem;
    padding: 8px 15px;
  }
}
</style>
