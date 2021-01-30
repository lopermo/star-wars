<template>
  <div
    class="container-fluid bg-gray-900 min-h-screen max-h-screen overflow-hidden"
  >
    <!-- navbar -->
    <Navbar :overlay="true" />
    <!-- ./ navbar -->

    <!-- content -->
    <div class="h-screen max-h-screen w-full relative">
      <div
        class="absolute h-full w-full bg-gray-900 opacity-60 top-0 left-0 z-0"
      />
      <img
        src="/slider3.jpg"
        class="h-full w-full object-center object-cover z-10"
        alt="Darth Vader and Storm troopers in a digital background"
      >
    </div>
    <!-- ./ content -->

    <!-- footer -->

    <!-- ./ footer -->
  </div>
</template>
