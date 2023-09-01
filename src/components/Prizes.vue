<template>
  <section id="prizes" class="confetti py-sm-8 py-md-16 text-white">
    <v-container>
      <h2 class="text-h4 text-sm-h3 text-sm-center font-weight-bold mb-4">
        <span class="text-white pe-3">[</span>Prizes<span class="text-white ps-3">]</span></h2>
      <v-row class="mt-8">
        <v-col cols="12" sm="5" offset-sm="1">
          <h3 class="text-overline font-weight-bold text-white">First Place</h3>
          <p class="text-h2 font-weight-bold">PKR 300,000</p>
        </v-col>
        <v-col cols="12" sm="5">
          <h3 class="text-overline font-weight-bold text-white">Second Place</h3>
          <p class="text-h2 font-weight-bold">PKR 200,000</p>
        </v-col>
        <v-col sm="10" offset-sm="1">
          <h3 class="text-overline font-weight-bold text-white">Mentoring and Incubation</h3>
          <p class="text-h5 font-weight-">Both winning projects will be incubated at NUST and given access to the 5G lab
            as well as mentoring sessions to help fine tune their projects. </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>


<style>
.confetti {
  background-image: url('@/assets/confetti.svg') !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: none !important;
}</style>