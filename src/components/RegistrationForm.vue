<template>
  <section class="bg-primary py-md-8 py-lg-16">
    <v-container>
      <h1></h1>
      <v-card variant="text" class="mx-auto" max-width="600">
        <v-card-title class="text-h3 text-center mb-8">Event Registration Form</v-card-title>
        <v-card-text>
          <v-text-field variant="underlined" label="Full name" v-model="form.name"></v-text-field>
          <v-text-field variant="underlined" label="Email address" v-model="form.email"></v-text-field>
          <v-text-field variant="underlined" label="Contact number" v-model="form.contact" hint="Format your mobile number as 03XX-1234567"></v-text-field>
          <v-text-field variant="underlined" label="Affiliation" v-model="form.affiliation" hint="Name of university, institute, or organization"></v-text-field>
          <v-text-field variant="underlined" label="Team name" v-model="form.team" hint="Make sure your team name is identical between all your team mates"></v-text-field>
          <v-text-field variant="underlined" label="Title of your project or idea" v-model="form.title"></v-text-field>
          <v-textarea variant="underlined" label="Description of the project or idea" v-model="form.description"></v-textarea>
          <v-checkbox label="By clicking this checkbox, I agree to the terms and conditions of this event"></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="flat">Submit</v-btn>
          <v-btn variant="plain" @click="$router.go(-1)">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </section>
</template>

<script setup>
//
</script>


<script>
export default {
  data: () => ({
    form: {
      name: null,
      email: null,
      contact: null,
      affiliation: null,
      team: null,
      type: null,
      participation: null,
      experience: null,
    },
  }),
}
</script>