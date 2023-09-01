<template>
  <section id="home" class="banner text-white py-4 py-sm-8 py-md-16">
    <v-container fluid class="fill-height text-center py-sm-8 py-md-16">
      <v-responsive class="align-center fill-height">
        <p class="text-h5 font-weight-bold">#Jazz5Grevolution</p>
        <h1 class="text-h3 text-md-h2 font-weight-bold my-8 my-md-16 text-white">5G Innovation Hackathon</h1>
        <template v-if="!state.applied">
          <v-btn flat size="x-large" color="light" :to="{ name: 'Register' }">Apply now</v-btn>
        </template>
        <template v-else>
          <v-btn flat size="x-large" color="light" href="https://5g-innovation-hackathon.devpost.com/" target="_blank">Visit Hackathon Site</v-btn>
        </template>
      </v-responsive>
    </v-container>
  </section>
</template>

<script setup>
  import { useAppStore } from '@/store/app.js'
  const state = useAppStore()
</script>

<style>
  .banner { background-image: url('@/assets/sunburst.svg'); background-size: cover; background-position: center center; background-repeat: none; }
</style>
