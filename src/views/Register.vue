<template>
  <section class="bg-grey-lighten-3 py-4 py-sm-8">
    <v-container>
      <v-form ref="form" fast-fail method="POST" action="https://api.sheetmonkey.io/form/pEfu2sFF6naN1rziidLToB" @submit.prevent="onSubmit">
        <v-card variant="text" class="mx-auto" max-width="600">
          <v-card-title class="text-h5 text-sm-h4 mb-4 text-primary">
            <v-btn icon flat color="grey-lighten-3" @click="$router.go(-1)"><v-icon>mdi-arrow-left</v-icon></v-btn>
            Event Registration Form
          </v-card-title>
          <v-card-text>
            <v-text-field variant="underlined" label="Full name" name="name" v-model="name" :rules="rules.required"></v-text-field>
            <v-text-field variant="underlined" label="Email address" name="email" v-model="email" :rules="rules.required"></v-text-field>
            <v-text-field variant="underlined" label="Contact number" name="contact" v-model="contact" :rules="rules.required" hint="Format your mobile number as 03XX-1234567"></v-text-field>
            <v-text-field variant="underlined" label="Affiliation" name="affiliation" v-model="affiliation" :rules="rules.required" hint="Name of university, institute, or organization"></v-text-field>
            <v-text-field variant="underlined" label="Team name" name="team" v-model="team" :rules="rules.required" hint="Make sure your team name is identical between all your team mates"></v-text-field>
            <v-text-field variant="underlined" label="Title of your project or idea" name="title" v-model="title" :rules="rules.required"></v-text-field>
            <v-textarea variant="underlined" rows="10" label="Description of the project or idea" name="description" v-model="description" :rules="rules.required"></v-textarea>
            <v-checkbox v-model="agreement">
              <template v-slot:label>
                <p>By clicking this checkbox, I agree to the <router-link :to="{ name: 'Terms' }">terms and conditions</router-link> of this event</p>
              </template>
            </v-checkbox>
          </v-card-text>
          <v-card-actions>
            <v-btn type="submit" variant="flat" color="primary" :disabled="!agreement">Apply Now</v-btn>
            <v-btn variant="plain" @click="$router.go(-1)">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-container>
  </section>
  <PageFooter />
</template>

<script setup>
  import PageFooter from '@/components/Footer.vue'
</script>

<script>
import { useAppStore } from '@/store/app'
export default {
  data: () => ({
    name: null,
    email: null,
    contact: null,
    affiliation: null,
    team: null,
    title: null,
    description: null,
    agreement: null,
    rules: {
      required: [
        v => !!v || 'Field is required',
      ]
    }
  }),
  methods: {
    async onSubmit() {
      const { valid } = await this.$refs.form.validate()
      if (valid) {
        useAppStore().apply()
        this.$refs.form.submit()
      } else {
        this.$router.push({ name: 'Done' })
      }
    }
  }
}
</script>
