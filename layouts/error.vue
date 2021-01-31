<template>
  <div
    class="container-fluid flex items-center justify-center min-h-screen lg:py-16 w-screen bg-jedi-dark dark:bg-darth-bg"
  >
    <div class="relative flex flex-col items-center text-center">
      <img
        class="h-64 md:h-72 lg:h-96 w-auto mb-6"
        src="/admiral-ackbar-404.png"
      />
      <div
        class="text-xl md:text-3xl lg:text-4xl text-white leading-none font-bold"
      >
        Well, perhaps not.<br />But something definitely happened.
      </div>
      <a
        @click="$router.go(-1)"
        class="text-xl lg:text-2xl mt-4 text-white underline cursor-pointer"
        >Go back</a
      >
    </div>
  </div>
</template>
