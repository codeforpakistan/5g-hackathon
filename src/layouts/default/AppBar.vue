<template>
  <v-app-bar flat color="ransparent">
    <v-spacer />
    <v-btn text href="#home">Home</v-btn>
    <v-btn text href="#about">About</v-btn>
    <v-btn text href="#domains">Domains</v-btn>
    <v-btn text href="#schedule">Schedule</v-btn>
    <v-btn text href="#prizes">Prizes</v-btn>
    <v-btn text href="#resources">Resources</v-btn>
    <v-spacer />
    <v-btn @click="toggleTheme" icon><v-icon>mdi-theme-light-dark</v-icon></v-btn>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>