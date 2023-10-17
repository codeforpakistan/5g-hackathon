<template>
  <section id="home" class="banner text-white py-4 py-sm-8 py-md-16">
    <v-container fluid class="fill-height text-center py-sm-8 py-md-16">
      <v-responsive class="align-center fill-height">
        <p class="text-h5 font-weight-bold">Prizes, incubation, mentorship, and exclusive access to the lab</p>
        <h1 class="text-h3 text-md-h2 font-weight-bold my-8 text-white">5G Innovation Hackathon</h1>
        <!-- <template v-if="!state.applied">
          <v-btn flat size="x-large" class="font-weight-bold" color="light" :to="{ name: 'Register' }">Apply now</v-btn>
        </template>
        <template v-else>
          <v-btn flat size="x-large" class="font-weight-bold" color="light" href="https://5g-innovation-hackathon.devpost.com/" target="_blank">Visit Hackathon Site</v-btn>
        </template> -->
        <p class="text-h5 font-weight-bold pt-8">Registrations are closed! We are shortlisting applications.</p>
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
