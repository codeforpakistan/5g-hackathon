<template>
  <v-dialog v-model="dialog" width="auto">
    <template v-slot:activator="{ props }">
      <v-btn icon flat color="transparent" v-bind="props">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-form ref="addForm" validate-on="submit lazy" fast-fail @submit.prevent="onSubmit">
      <v-card min-width="500">
        <v-card-title>Add team member</v-card-title>
        <v-card-text>
          <v-text-field v-model="contact" variant="underlined" :rules="rules" clearable hint="Format mobile number as 03XX-1234567" ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" variant="flat" color="primary">Submit</v-btn>
          <v-btn @click="dialog=false" variant="plain">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    contact: null,
    rules: [
      v => !!v || 'Field is required',
      v => /^[0-9]{4}-[0-9]{7}$/im.test(v) || 'Invalid format'
    ]
  }),
  methods: {
    async onSubmit() {
      const { valid } = await this.$refs.addForm.validate()
      if (valid) {
        this.$emit('submitted', this.contact)
        this.contact = null
        this.dialog = false
      }
    }
  }
}
</script>