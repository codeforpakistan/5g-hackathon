<template>
  <section class="tornado py-sm-8 py-md-16 text-white text-center">
    <v-container>
      <!-- <v-row justify="center">
        <v-col cols="3">
          <a href="https://jazz.com.pk" target="_blank">
            <v-img src="@/assets/jazz_logo.png" eager alt="Jazz Pakistan" />
          </a>
        </v-col>
        <v-col cols="3">
          <a href="https://sines.nust.edu.pk" target="_blank">
            <v-img src="@/assets/nust_logo.svg" eager alt="National University of Sciences and Technology" />
          </a>
        </v-col>
        <v-col cols="3">
          <a href="https://nitb.gov.pk" target="_blank">
            <v-img src="@/assets/nitb_logo.png" eager class="ma-4" alt="Code for Pakistan" />
          </a>
        </v-col>
        <v-col cols="3">
          <a href="https://codeforpakistan.org" target="_blank">
            <v-img src="@/assets/cfp_logo.png" eager class="ma-4" alt="Code for Pakistan" />
          </a>
        </v-col>
      </v-row> -->
      <p class="mb-4">&copy; Copyrights of all content, images, and logos are owned by respective organizations.</p>
      <p class="text-center">
        <router-link class="text-white" :to="{ name: 'Terms' }">Terms and Conditions</router-link> | 
        <router-link class="text-white" :to="{ name: 'Conduct' }">Code of Conduct</router-link> | 
        <router-link class="text-white" :to="{ name: 'Harassment' }">Anti-Harassment Policy</router-link>
      </p>
    </v-container>
  </section>
</template>

<script setup>
//
</script>

<style>
  .tornado { 
    background-image: url('@/assets/tornado.svg') !important; 
    background-position: center center !important; 
    background-size: cover !important; 
    background-repeat: none !important; 
  }
</style>