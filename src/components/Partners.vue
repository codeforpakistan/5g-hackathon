<template>
  <section class="py-sm-8 py-md-16 text-center bg-grey-lighten-5">
    <v-container>
      <h2 class="text-h4 text-sm-h3 text-sm-center font-weight-bold mb-4 mb-md-16"><span class="text-primary pe-3">[</span>Brought to you by<span class="text-primary ps-3">]</span></h2>
      <v-row justify="center" align="center">
        <v-col cols="6" sm="4" lg="2">
          <a href="https://oppo.com" target="_blank">
            <v-img src="@/assets/oppo_logo.png" eager max-height="200" max-width="200" alt="Oppo" />
          </a>
        </v-col>
        <v-col cols="6" sm="4" lg="2">
          <a href="https://jazz.com.pk" target="_blank">
            <v-img src="@/assets/jazz_logo.png" eager max-height="200" max-width="200" alt="Jazz Pakistan" />
          </a>
        </v-col>
        <v-col cols="6" sm="4" lg="2">
          <a href="https://sines.nust.edu.pk" target="_blank">
            <v-img src="@/assets/nust_logo.svg" eager max-height="200" max-width="200" alt="National University of Sciences and Technology" />
          </a>
        </v-col>
        <v-col cols="6" sm="4" lg="2">
          <a href="https://nitb.gov.pk" target="_blank">
            <v-img src="@/assets/nitb-green.png" eager max-height="200" max-width="200" alt="National IT Board" />
          </a>
        </v-col>
        <v-col cols="6" sm="4" lg="2">
          <a href="https://huawei.com" target="_blank">
            <v-img src="@/assets/huawei_logo.png" eager max-height="200" max-width="200" alt="Huawei" />
          </a>
        </v-col>
        <v-col cols="6" sm="4" lg="2">
          <a href="https://codeforpakistan.org" target="_blank">
            <v-img src="@/assets/cfp_logo.png" eager max-height="200" max-width="200" alt="Code for Pakistan" />
          </a>
        </v-col>
      </v-row>
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