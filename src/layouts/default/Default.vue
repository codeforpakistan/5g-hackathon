<template>
  <v-app>
    <v-app-bar flat>
      <v-app-bar-nav-icon class="d-sm-none" @click="drawer=!drawer" />
      <v-app-bar-title class="d-sm-none">5G Innovation Hackathon</v-app-bar-title>
      <v-spacer/>
      <v-tabs class="d-none d-sm-flex" center-active>
      <v-tab rounded="0" exact class="text-h6" v-for="(item, i) in menu" :key="i" :to="{ path: '/', hash: item.href }">{{ item.title }}</v-tab>
      </v-tabs>
      <v-spacer/>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item v-for="(item, i) in menu" :key="i" :to="{ path: '/', hash: item.href }" :active="false">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
        <div class="pa-2">
          <v-btn flat block color="primary" :to="{ path: '/register' }">Apply now</v-btn>
        </div>
    </v-navigation-drawer>
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue'
</script>
<script>
export default {
  data: () => ({
    drawer: false,
    menu: [
      { title: 'Home', href: '#banner' },
      { title: 'About', href: '#about' },
      { title: 'Themes', href: '#themes' },
      { title: 'Schedule', href: '#schedule' },
      { title: 'Prizes', href: '#prizes' },
      { title: 'Eligibility', href: '#eligibility' },
    ]
  })
}
</script>
<style>
  .v-toolbar-title__placeholder{
    overflow: visible !important;
  }
</style>