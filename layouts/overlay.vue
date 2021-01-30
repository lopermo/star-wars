<template>
  <div class="container-fluid bg-gray-50 min-h-screen max-h-screen">
    <!-- navbar -->
    <Navbar :overlay="true" />
    <!-- ./ navbar -->

    <!-- content -->
    <Nuxt />
    <!-- ./ content -->

    <!-- footer -->
    <Footer :overlay="true" />
    <!-- ./ footer -->
  </div>
</template>
