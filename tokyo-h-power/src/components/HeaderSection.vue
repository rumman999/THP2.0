<template>
  <header>
    <nav class="container-fluid d-flex justify-content-between align-items-center px-5">
      <a><img src="@/assets/logo.webp" style="height: 110px;"></a>
      <ul class="nav align-items-center">
        <li class="nav-item"><a class="nav-link text-light" href="#home">Home</a></li>
        <li class="nav-item"><a class="nav-link text-light" href="#about">About</a></li>
        <li class="nav-item"><a class="nav-link text-light" href="#projects">Projects</a></li>
        <li class="nav-item"><a class="nav-link text-light" href="#contact">Contact</a></li>
        <li class="nav-item">
          <button class="btn get-started-btn">Get Started</button>
        </li>
      </ul>
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
</style>
