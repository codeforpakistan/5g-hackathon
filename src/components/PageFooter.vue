<template>
  <v-footer class="tornado py-md-8 py-lg-16 text-white">
    <v-container class="pt-md-8 pt-lg-16">
      <v-row justify="center" align="end">
        <v-col cols="2">
          <v-card variant="text" rounded="0">
            <v-img src="@/assets/jazz_logo.svg" />
            <v-card-text>Jazz Pakistan</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card variant="text" rounded="0">
            <v-img src="@/assets/nust_logo.svg" />
            <v-card-text>NUST Islamabad</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card variant="text" rounded="0">
            <v-img src="@/assets/cfp_logo.svg" />
            <v-card-text>Code for Pakistan</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <p class="mt-16 text-center">Made with ❤️ by Code for Pakistan | <router-link class="text-white" :to="{ name: 'Terms' }">Terms and Conditions</router-link></p>
      
    </v-container>
  </v-footer>
</template>

<script setup>
//
</script>

<style>
  .tornado { background-image: url('@/assets/tornado.svg') !important; background-position: center center !important; background-size: cover !important; background-repeat: none !important; }
</style>