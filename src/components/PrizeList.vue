<template>
  <section id="prizes" class="py-md-8 py-lg-16">
    <v-container class="py-md-8 py-lg-16">
      <v-responsive class="align-center fill-height">
        <h2 class="text-h2 text-md-center font-weight-bold"><span class="text-primary pe-3">[</span>Prizes<span class="text-primary ps-3">]</span></h2>
        <v-row class="mt-8">
          <v-col cols="6" md="5" offset-md="1">
            <h3 class="text-overline">First Place</h3>
            <p class="text-h2">PKR 300,000</p>
          </v-col>
          <v-col cols="6" md="5">
            <h3 class="text-overline">Second Place</h3>
            <p class="text-h2">PKR 200,000</p>
          </v-col>
          <v-col md="10" offset-md="1">
            <h3 class="text-overline">Mentoring and Incubation</h3>
            <p class="text-h5 font-weight-light">Both winning projects will be incubated at NUST and given access to the 5G lab as well as mentoring sessions to help fine tune their projects. </p>
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </section>
</template>

<script setup>
import { useTheme } from 'vuetify'
const theme = useTheme()
</script>
