<template>
  <section id="banner" class="banner text-white py-4 py-sm-8 py-md-16">
    <v-container fluid class="fill-height text-center py-sm-8 py-md-16">
      <v-responsive class="align-center fill-height">
        <p class="text-h5 font-weight-bold">#Jazz5Grevolution</p>
        <h1 class="text-h3 text-md-h2 font-weight-bold my-8 my-md-16 text-white">5G Innovation Hackathon</h1>
        <v-btn flat size="x-large" color="light" :to="{ name: 'Register' }">Apply now</v-btn>
      </v-responsive>
    </v-container>
  </section>
</template>

<script setup>
//
</script>

<style>
  .banner { background-image: url('@/assets/sunburst.svg'); background-size: cover; background-position: center center; background-repeat: none; }
</style>
