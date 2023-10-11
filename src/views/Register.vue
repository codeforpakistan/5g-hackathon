<template>
  <section class="bg-grey-lighten-3 py-4 py-sm-8">
    <v-container>
      <v-form ref="form" validate-on="submit lazy" fast-fail method="POST" action="https://api.sheetmonkey.io/form/pEfu2sFF6naN1rziidLToB" @submit.prevent="onSubmit">
        <v-card variant="text" class="mx-auto" max-width="600">
          <v-card-title class="text-h5 text-sm-h4 mb-4 text-primary">
            <v-btn icon flat color="grey-lighten-3" @click="$router.go(-1)"><v-icon>mdi-arrow-left</v-icon></v-btn>
            Event Registration Form
          </v-card-title>
          <!-- <v-alert type="info" class="mb-5" variant="tonal">
            Please ensure that all members of a team fill out this form. Each entry must use exact name of the team and list all other members by way of their phone numbers. 
          </v-alert> -->
          <v-card-text>
            <v-text-field variant="underlined" label="Full name" name="name" append-inner-icon="mdi-account" v-model="name" :rules="rules.required" clearable></v-text-field>
            <v-text-field variant="underlined" label="Email address" name="email" append-inner-icon="mdi-email" v-model="email" :rules="rules.email" clearable></v-text-field>
            <v-text-field variant="underlined" label="Contact number" name="contact" v-model="contact" prefix="+92" append-inner-icon="mdi-phone" hint="Format your mobile number as 03XX-1234567" clearable></v-text-field>
            <v-text-field variant="underlined" label="National ID Number" name="cnic" append-inner-icon="mdi-badge-account-horizontal-outline" v-model="cnic" hint="Format your CNIC as 12345-6789012-3" clearable></v-text-field>
            <v-text-field variant="underlined" label="Affiliation" name="affiliation" append-inner-icon="mdi-bank" v-model="affiliation" :rules="rules.required" hint="Name of university, institute, or organization" clearable></v-text-field>
            <!-- <v-text-field variant="underlined" label="Team name" name="team" append-inner-icon="mdi-account-group" v-model="team" :rules="rules.required" hint="Make sure your team name is identical between all your team mates" clearable></v-text-field> -->
            <!-- <v-row no-gutters align="center">
              <v-col>
                <v-select multiple variant="underlined" label="Team members" name="members" readonly chips :items="members" v-model="members" :rules="rules.required" hint="Enter a comma or space seperated list of phone numbers" clearable></v-select>
              </v-col>
              <v-col cols="auto">
                <add-person @submitted="onAddPerson" />
              </v-col>
            </v-row> -->
            <v-select variant="underlined" label="Theme" name="theme" :items="themes" v-model="theme" :rules="required" clearable />
            <v-text-field variant="underlined" label="Title of your project or idea" name="title" v-model="title" :rules="rules.required" clearable></v-text-field>
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
  import AddPerson from '@/components/AddPerson.vue'
</script>

<script>
import { useAppStore } from '@/store/app'
import AddPerson from '@/components/AddPerson.vue'
export default {
  components: { AddPerson },
  data: () => ({
    name: null,
    email: null,
    contact: null,
    cnic: null,
    affiliation: null,
    team: null,
    members: [],
    title: null,
    description: null,
    agreement: null,
    theme: null,
    themes: [
      'Fintech and Retail','Education','Healthcare','Environment','Agriculture','Industry', 'Civic Services',
      'Smart Cities', 'Tourism', 'Climate Change', 'Disasters', 'Sports', 'Gaming', 'Entertainment'
    ],
    rules: {
      required: [
        v => !!v || 'Field is required',
      ],
      email: [
        v => !!v || 'Field is required',
        v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/im.test(v) || 'Invalid format'
      ],
      contact: [
        v => !!v || 'Field is required',
        v => /^[0-9]{4}-[0-9]{7}$/im.test(v) || 'Invalid contact. Please use 03xx-1234567 format'
      ],
      cnic: [
        v => !!v || 'Field is required',
        v => /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/im.test(v) || 'Invalid CNIC. Please use 12345-6789012-3 format'
      ]
    }
  }),
  methods: {
    async onSubmit() {
      const { valid } = await this.$refs.form.validate()
      if (valid) {
        useAppStore().apply()
        this.$gtag.event('register', { method: 'Google' })
        this.$refs.form.submit()
      } else {
        this.$router.push({ name: 'Done' })
      }
    },
    onAddPerson(contact) {
      this.members.push(contact)
    },
  }
}
</script>
