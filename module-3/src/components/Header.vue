<script setup>
  const logo="src/assets/img/logo.svg";
</script>

<template>
    <header class="header">
      <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="navbar">
        <div class="container"><a class="navbar-brand" href="index.html"><img v-bind:src=logo alt="" width="110"></a>
          <button class="navbar-toggler navbar-toggler-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-bars"></i></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link link-scroll active" href="#hero">Home <span class="sr-only">(current)</span></a></li>
              <li class="nav-item"><a class="nav-link link-scroll" href="#about">About</a></li>
              <li class="nav-item"><a class="nav-link link-scroll" href="#services">Services</a></li>
              <li class="nav-item"><a class="nav-link link-scroll" href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
 
</template>





<style scoped>

</style>
