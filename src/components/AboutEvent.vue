<template>
  <section id="about" class="py-md-8 py-lg-16 pattern">
    <v-container class="py-md-8 py-lg-16">
      <h3 class="text-h2 text-md-center font-weight-bold mb-8"><span class="text-primary pe-3">[</span>About<span class="text-primary ps-3">]</span></h3>
      <p class="text-subtitle-1 text-md-center">
        The 5G Innovation Hackathon is a collaborative initiative between <a href="">Jazz</a>
        and <a href="">National University of Sciences and Technology (NUST)</a>, in
        partnership with <a href="">Code for Pakistan (CfP)</a>. This hackathon aims to
        leverage the power of 5G and other cutting-edge technologies to develop
        innovative solutions addressing critical challenges in Pakistan's
        healthcare, education, disaster management and climate change,
        agriculture, and industrial sectors.
      </p>
      <v-timeline direction="horizontal">
        <v-timeline-item dot-color="primary" size="x-small">
          <template v-slot:opposite>
            <v-card variant="text">
              <v-card-title class="text-h1 font-weight-bold">1G</v-card-title>
              <v-card-subtitle class="text-h6">First Generation</v-card-subtitle>
              <v-card-text>Mobile Telephony</v-card-text>
            </v-card>
          </template>
        </v-timeline-item>
        <v-timeline-item dot-color="primary" size="small">
            <v-card variant="text">
              <v-card-title class="text-h1 font-weight-bold">2G</v-card-title>
              <v-card-subtitle class="text-h6">Second Generation</v-card-subtitle>
              <v-card-text>
                <p>Mobile Telephony</p>
                <p class="text-primary">Messaging (SMS)</p>
              </v-card-text>
            </v-card>
        </v-timeline-item>
        <v-timeline-item dot-color="primary" size="default">
          <template v-slot:opposite>
            <v-card variant="text">
              <v-card-title class="text-h1 font-weight-bold">3G</v-card-title>
              <v-card-subtitle class="text-h6">Third Generation</v-card-subtitle>
              <v-card-text>
                <p>Mobile Telephony</p>
                <p>Messaging (SMS)</p>
                <p class="text-primary">Internet Browsing</p>
              </v-card-text>
            </v-card>
          </template>
        </v-timeline-item>
        <v-timeline-item dot-color="primary" size="large">
            <v-card variant="text">
              <v-card-title class="text-h1 font-weight-bold">4G</v-card-title>
              <v-card-subtitle class="text-h6">Fourth Generation</v-card-subtitle>
              <v-card-text>
                <p>Mobile Telephony</p>
                <p>Messaging (SMS)</p>
                <p>Internet Browsing</p>
                <p class="text-primary">Video Streaming</p>
              </v-card-text>
            </v-card>
        </v-timeline-item>
        <v-timeline-item dot-color="primary" size="x-large">
          <template v-slot:opposite>
            <v-card variant="text">
              <v-card-title class="text-h1 font-weight-bold text-primary">5G</v-card-title>
              <v-card-subtitle class="text-h6">Fifth Generation</v-card-subtitle>
              <v-card-text>
                <p>Mobile Telephony</p>
                <p>Messaging (SMS)</p>
                <p>Internet Browsing</p>
                <p>Video Streaming</p>
                <p class="text-primary">Real-Time Streaming</p>
              </v-card-text>
            </v-card>
          </template>
        </v-timeline-item>
      </v-timeline>
      <p class="text-center">
        <v-btn flat size="x-large" color="primary" to="/register">Register now</v-btn>
      </p>
    </v-container>
  </section>
</template>


<style>
  .pattern { background-image: url('@/assets/pattern.svg'); background-position: center center; background-size: cover; }
  .v-card .v-card-title { line-height: normal !important; }
</style>