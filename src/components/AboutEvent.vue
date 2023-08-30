<template>
  <v-container id="about" fluid class="h-screen bg-pink-darken-4">
    <v-responsive class="align-center fill-height">
      <v-row align="center">
        <v-col cols="4" lg="3" offset-lg="1">
          <v-img src="@/assets/poster.jpeg" />
        </v-col>
        <v-col cols="8" lg="6" offset-lg="1">
          <h3 class="text-h3 mb-4">About the hackathon</h3>
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
    </v-responsive>
  </v-container>
</template>

<script setup>
//
</script>
