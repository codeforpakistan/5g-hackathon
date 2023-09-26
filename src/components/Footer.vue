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
      <p class="text-center">
        <router-link class="text-white" :to="{ name: 'Terms' }">Terms and Conditions</router-link> | 
        <router-link class="text-white" :to="{ name: 'Conduct' }">Code of Conduct</router-link> | 
        <router-link class="text-white" :to="{ name: 'Harassment' }">Anti-Harassment Policy</router-link>
      </p>

      <p class="my-4">For fourther inquiries, please reach out to us on <a class="text-white" :href="obfuscated">{{ displayed }}</a>. </p>
      
      <p>&copy; Copyrights of all content, images, and logos are owned by respective organizations.</p>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
const obfuscated = computed(() => {
  return 'mailto:\u0065\u0076\u0065\u006e\u0074\u0073\u0040\u0063\u006f\u0064\u0065\u0066\u006f\u0072\u0070\u0061\u006b\u0069\u0073\u0074\u0061\u006e\u002e\u006f\u0072\u0067'
})
const displayed = computed(() => {
  return '\u0065\u0076\u0065\u006e\u0074\u0073\u0040\u0063\u006f\u0064\u0065\u0066\u006f\u0072\u0070\u0061\u006b\u0069\u0073\u0074\u0061\u006e\u002e\u006f\u0072\u0067'
})
</script>

<style>
  .tornado { 
    background-image: url('@/assets/tornado.svg') !important; 
    background-position: center center !important; 
    background-size: cover !important; 
    background-repeat: none !important; 
  }
</style>