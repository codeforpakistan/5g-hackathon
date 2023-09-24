<template>
  <section id="about" class="py-sm-8 py-md-16 pattern">
    <v-container>
      <h2 class="text-h4 text-sm-h3 text-sm-center font-weight-bold mb-4"><span class="text-primary pe-3">[</span>About<span class="text-primary ps-3">]</span></h2>
      <p class="text-h6 text-md-center">
        The 5G Innovation Hackathon is a collaborative initiative between <a href="https://jazz.com.pk" target="_blank">Jazz</a>
        and <a href="https://sines.nust.edu.pk" target="_blank">National University of Sciences and Technology (NUST)</a>, in
        partnership with the <a href="https://nitb.gov.pk" target="_blank">National IT Board</a> and <a href="https://codeforpakistan.org" target="_blank">Code for Pakistan (CfP)</a>. This hackathon aims to
        leverage the power of 5G and other cutting-edge technologies to develop
        innovative solutions addressing critical challenges in Pakistan's
        healthcare, education, disaster management and climate change,
        agriculture, and industrial sectors.
      </p>
      <v-responsive>
        <v-timeline :direction="orientation" :side="siding">
          <v-timeline-item dot-color="primary" size="x-small">
              <v-card variant="text">
                <v-card-title class="text-h1 font-weight-bold">1G</v-card-title>
                <v-card-subtitle class="text-h6">First Generation</v-card-subtitle>
                <v-card-text>Mobile Telephony</v-card-text>
              </v-card>
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
              <v-card variant="text">
                <v-card-title class="text-h1 font-weight-bold">3G</v-card-title>
                <v-card-subtitle class="text-h6">Third Generation</v-card-subtitle>
                <v-card-text>
                  <p>Mobile Telephony</p>
                  <p>Messaging (SMS)</p>
                  <p class="text-primary">Internet Browsing</p>
                </v-card-text>
              </v-card>
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
          </v-timeline-item>
        </v-timeline>
      </v-responsive>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
const { name } = useDisplay()
const orientation = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs': return 'vertical'
    case 'sm': return 'vertical'
    case 'md': return 'horizontal'
    case 'lg': return 'horizontal'
    case 'xl': return 'horizontal'
    case 'xxl': return 'horizontal'
  }
  return undefined
})
const siding = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs': return 'end'
    case 'sm': return 'center'
    case 'md': return 'end'
    case 'lg': return 'end'
    case 'xl': return 'end'
    case 'xxl': return 'end'
  }
  return undefined
})
</script>

<style>
  .pattern { background-image: url('@/assets/pattern.svg'); background-position: center center; background-size: cover; }
  .v-card .v-card-title { line-height: normal !important; }
  .v-timeline--horizontal.v-timeline .v-timeline-item:nth-child(2n+1) .v-timeline-item__body { align-self: start !important; }
</style>