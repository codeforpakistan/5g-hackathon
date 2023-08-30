<template>
  <section id="about" class="py-md-8 py-lg-16" :class="[theme.global.current.value.dark ? 'bg-blue-grey-darken-4' : 'bg-grey-lighten-3']">
    <h3 class="text-h2 text-center font-weight-bold"><span class="text-primary pe-3">[</span>About<span class="text-primary ps-3">]</span></h3>
    <v-container fluid class="fill-height py-md-8 py-lg-16">
      <v-row align="center">
        <v-col cols="12" md="4" lg="3" offset-lg="1">
          <v-img src="@/assets/poster.jpeg" aspect-ratio="1" cover />
        </v-col>
        <v-col cols="12" md="8" lg="6" offset-lg="1">
          <p class="text-subtitle-1 mb-4">
            The 5G Innovation Hackathon is a collaborative initiative between <a href="">Jazz</a>
            and <a href="">National University of Sciences and Technology (NUST)</a>, in
            partnership with <a href="">Code for Pakistan (CfP)</a>. This hackathon aims to
            leverage the power of 5G and other cutting-edge technologies to develop
            innovative solutions addressing critical challenges in Pakistan's
            healthcare, education, disaster management and climate change,
            agriculture, and industrial sectors.
          </p>
          <v-btn flat size="x-large" color="primary">Register now</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { useTheme } from 'vuetify'
const theme = useTheme()
</script>
