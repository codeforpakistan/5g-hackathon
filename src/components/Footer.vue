<template>
  <v-footer class="tornado py-sm-8 py-md-16 text-white">
    <v-container>
      <v-row justify="space-around">
        <v-col cols="4" sm="3">
          <v-card variant="text" href="https://jazz.com.pk">
            <v-img src="@/assets/jazz_logo.svg" eager alt="Jazz Pakistan" />
          </v-card>
        </v-col>
        <v-col cols="4" sm="3">
          <v-card variant="text" href="https://nust.edu.pk">
            <v-img src="@/assets/nust_logo.svg" eager alt="National University of Sciences and Technology" />
          </v-card>
        </v-col>
        <v-col cols="4" sm="3">
          <v-card variant="text" href="https://codeforpakistan.org">
            <v-img src="@/assets/cfp_logo.svg" eager class="ma-4" alt="Code for Pakistan" />
          </v-card>
        </v-col>
      </v-row>
      <p class="my-4 mt-md-16 text-center">Made with ❤️ by Code for Pakistan</p>
      <p class="text-center">
        <router-link class="text-white" :to="{ name: 'Terms' }">Terms and Conditions</router-link> | 
        <router-link class="text-white" :to="{ name: 'Conduct' }">Code of Conduct</router-link> | 
        <router-link class="text-white" :to="{ name: 'Harassment' }">Anti-Harassment Policy</router-link>
      </p>
    </v-container>
  </v-footer>
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