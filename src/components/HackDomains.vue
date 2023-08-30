<template>
  <section id="domains" class="py-md-8 py-lg-16">
    <v-container>
      <h2 class="text-h2 text-md-center font-weight-bold mb-8 mb-lg-16"><span class="text-primary pe-3">[</span>Domains<span class="text-primary ps-3">]</span></h2>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <v-card flat variant="tonal" class="fill-height">
            <v-img src="https://picsum.photos/id/20/320/180" />
            <v-card-title>Retail</v-card-title>
            <v-card-text>
              <p>For 5G retail applications, the customer experience will be everything. Stores of tomorrow may no longer look like today’s aisles of stocked shelves. Imagine a store that’s more like a showroom—one that lets you add items to a virtual cart rather than shopping with a physical one.</p>
              <p>Stores may also use 5G to manage inventory and stocking in real time. Consumers could even see changes like cashierless stores that simply track what you put in your cart in lieu of the traditional checkout line.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-card flat variant="tonal" class="fill-height">
            <v-img src="https://picsum.photos/320/180" />
            <v-card-title>Healthcare</v-card-title>
            <v-card-text>
              <p>5G healthcare use cases will enable doctors and patients to stay more connected than ever. Wearable devices could alert healthcare providers when a patient is experiencing symptoms—like an internal defibrillator that automatically alerts a team of ER cardiologists to be ready for an incoming patient, with a complete record of data collected by the device.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-card flat variant="tonal" class="fill-height">
            <v-img src="https://picsum.photos/id/180/320/180" />
            <v-card-title>Education</v-card-title>
            <v-card-text></v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-card flat variant="tonal" class="fill-height">
            <v-img src="https://picsum.photos/id/218/320/180" />
            <v-card-title>Environment</v-card-title>
            <v-card-text></v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-card flat variant="tonal" class="fill-height">
            <v-img src="https://picsum.photos/id/112/320/180" />
            <v-card-title>Agriculture</v-card-title>
            <v-card-text>
              <p class="mb-3">Farms of the future will use more data and fewer chemicals. Taking data from sensors located directly in fields, farmers can identify with pinpoint precision which areas need water, have a disease, or require pest management.</p>
              <p>As wearables become less expensive and 5G makes it easier to scale networks containing large numbers of IoT devices, health monitoring for livestock may also emerge. With more accurate health data, farmers can reduce the use of antibiotics without compromising the safety of the food supply.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-card flat variant="tonal" class="fill-height">
            <v-img src="https://picsum.photos/id/134/320/180" />
            <v-card-title>Industry</v-card-title>
            <v-card-text>
              <p>Factory floors will be totally transformed by the convergence of 5G, AI, and IoT. Beyond predictive maintenance that helps control costs and minimize downtime, factories will also use 5G to control and analyze industrial processes with an unprecedented degree of precision.</p>
              <p>With the connectivity boost provided by 5G, manufacturers can also change traditional quality assurance processes, streamlining them with sensor technology and AI.</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { useTheme } from 'vuetify'
const theme = useTheme()
</script>
