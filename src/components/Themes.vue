<template>
  <section id="themes" class="prism py-sm-8 py-md-16">
    <v-container>
      <h2 class="text-h4 text-sm-h3 text-sm-center font-weight-bold mb-4">
        <span class="text-primary pe-3">[</span>Themes<span class="text-primary ps-3">]</span>
      </h2>

      <vue-word-cloud 
        class="mx-auto w-75 h-screen" :words="words" font-family="Lato" 
        :color="([, weight]) => weight > 2 ? '#e11b22' : weight > 1 ? '#fcaf17' : '#670000'"
      />

      <!-- <v-row class="mt-4">
        <v-col cols="12" sm="6" md="4">
          <v-card flat variant="tonal" class="fill-height">
            <v-card-title class="text-h5 text-primary">Fintech &amp; Retail</v-card-title>
            <v-card-text>
              <p>For 5G retail applications, the customer experience will be everything. Imagine a store that's more like
                a showroom—one that lets you add
                items to a virtual cart rather than shopping with a physical one. Stores may also use 5G to manage
                inventory and stocking in real time.
                Consumers could even see changes like cashierless stores that simply track what you put in your cart in
                lieu of the traditional checkout line.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card flat variant="tonal" class="fill-height">
            <v-card-title class="text-h5 text-primary">Healthcare</v-card-title>
            <v-card-text>
              <p>5G healthcare use cases will enable doctors and patients to stay more connected than ever. Wearable
                devices could alert
                healthcare providers when a patient is experiencing symptoms—like an internal defibrillator that
                automatically alerts a team
                of ER cardiologists to be ready for an incoming patient, with a complete record of data collected by the
                device.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card flat variant="tonal" class="fill-height">
            <v-card-title class="text-h5 text-primary">Education</v-card-title>
            <v-card-text>5G will enter the classroom and bring new ways of learning to students. Augmented Reality,
              Virtual Reality and Virtual Presence will mean that students will be immersed in a more visual and
              interactive
              learning experience where students and teachers may not necessarily be in the same location.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card flat variant="tonal" class="fill-height">
            <v-card-title class="text-h5 text-primary">Environment</v-card-title>
            <v-card-text>5G technology with IoT will be able to increase energy efficiency, reduce greenhouse gas
              emissions and enable more use of renewable energy. It can help reduce air and water pollution, minimize
              water and food waste, and protect wildlife. It can also expand our understanding of and hence improve
              decision-making about weather, agriculture, pests, industry, waste reduction and much more.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card flat variant="tonal" class="fill-height">
            <v-card-title class="text-h5 text-primary">Agri-tech</v-card-title>
            <v-card-text>
              <p class="mb-3">Farms of the future will use more data and fewer chemicals. Taking data from sensors located
                directly in fields, farmers
                can identify with pinpoint precision which areas need water, have a disease, or require pest management.
                As wearables become less expensive and
                5G makes it easier to scale networks containing large numbers of IoT devices, health monitoring
                for livestock may also emerge. With more accurate health data, farmers can reduce the use of antibiotics
                without compromising the safety of the food supply.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card flat variant="tonal" class="fill-height">
            <v-card-title class="text-h5 text-primary">Industry 4.0</v-card-title>
            <v-card-text>
              <p>Factory floors will be totally transformed by the convergence of 5G, AI, and IoT. Beyond predictive
                maintenance that helps
              control costs and minimize downtime, factories will also use 5G to control and analyze industrial
              processes with an unprecedented degree of precision.</p>
            <p>With the connectivity boost provided by 5G, manufacturers can also change traditional quality assurance
              processes, streamlining
              them with sensor technology and AI.</p>
          </v-card-text>
        </v-card>
      </v-col>
      </v-row> -->
    </v-container>
  </section>
</template>

<style>.prism {
  background-image: url('@/assets/prism.svg');
  background-position: center center;
  background-size: cover;
}</style>

<script>
import VueWordCloud from 'vuewordcloud';
export default {
  components: {
    [VueWordCloud.name]: VueWordCloud,
  },
  data: () =>({
    words: [
      ['education', Math.floor(Math.random() * 4)], 
        // ['classroom', 1], 
        // ['student', 1], 
        // ['teacher', 1], 
        // ['interactive', 1], 
        // ['learning', 1], 
      ['healthcare', Math.floor(Math.random() * 4)], 
        // ['doctors', 1],
        // ['patients', 1],
        // ['werables', 1],
        // ['devices', 1],
        // ['records', 1],
      ['retail', Math.floor(Math.random() * 4)], 
        // ['customer', 1],
        // ['store', 1],
        // ['showroom', 1],
        // ['shopping', 1],
        // ['cart', 1],
        // ['inventory', 1],
        // ['stocks', 1],
        // ['checkout', 1],
      ['fin-tech', Math.floor(Math.random() * 3)],
      ['industry 4.0', Math.floor(Math.random() * 3)],
      ['environment', Math.floor(Math.random() * 3)],
      ['agri-tech', Math.floor(Math.random() * 3)],
      ['smart cities', Math.floor(Math.random() * 3)],
      ['tourism', Math.floor(Math.random() * 3)],
      ['climate change', Math.floor(Math.random() * 3)],
      ['disaster', Math.floor(Math.random() * 3)],
      ['sports', Math.floor(Math.random() * 3)],
      ['gaming', Math.floor(Math.random() * 3)],
      ['entertainment', Math.floor(Math.random() * 3)],
      ['civic services', Math.floor(Math.random() * 3)],
    ],

  })
};
</script>