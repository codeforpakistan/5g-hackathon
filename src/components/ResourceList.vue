<template>
  <section id="resources" class="py-md-8" :class="[theme.global.current.value.dark ? 'bg-blue-grey-darken-4' : 'bg-grey-lighten-3']">
    <v-container class="py-md-8 py-lg-16">
      <v-responsive class="align-center fill-height">
        <h2 class="text-h2 text-md-center font-weight-bold"><span class="text-primary pe-3">[</span>Resources<span class="text-primary ps-3">]</span></h2>
        <v-row class="mt-8">
          <v-col>
            <h3 class="text-overline">Resources on 5G</h3>
          </v-col>
          <v-col>
            <h3 class="text-overline">SME Resources</h3>
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
