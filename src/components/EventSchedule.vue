<template>
  <section id="schedule" class="py-md-8 py-lg-16" :class="[theme.global.current.value.dark ? 'bg-blue-grey-darken-4' : 'bg-grey-lighten-3']">
    <v-container>
      <v-responsive class="align-center fill-height py-md-8 py-lg-16">
        <h3 class="text-h2 text-md-center font-weight-bold"><span class="text-primary pe-3">[</span>Schedule<span
            class="text-primary ps-3">]</span></h3>
        <v-tabs v-model="tab" stacked align-tabs="center" density="comfortable" color="primary" class="my-4 my-lg-8">
          <v-tab id="">Registration</v-tab>
          <v-tab>Shortlisting</v-tab>
          <v-tab>Orientation</v-tab>
          <v-tab>Hackathon</v-tab>
          <v-tab>Testing</v-tab>
          <v-tab>Judging</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item>
            <v-card color="transparent">
              <v-card-title>Phase I: Registration</v-card-title>
              <v-card-subtitle>September 1-15, 2023</v-card-subtitle>
              <v-card-text class="text-subtitle-1">
                Hackathon is announced on social media, registrations are opened, and candidates are requested to submit
                applications. Registrations to remain open till the 15th of September.
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" variant="outlined">Register Now</v-btn>
              </v-card-actions>
            </v-card>
          </v-window-item>
          <v-window-item>
            <v-card color="transparent">
              <v-card-title>Phase II: Shortlisting</v-card-title>
              <v-card-subtitle>September 18-22, 2023</v-card-subtitle>
              <v-card-text class="text-subtitle-1">After close of registration, organizers will carefully review and
                evaluate submitted applications to identify most promising and innovative concepts (see evaluation
                criteria). Through a systematic and fair evaluation process, a select number of ideas are shortlisted based
                on their potential to deliver impactful solutions. The shortlisted participants will proceed to the next
                phase, where they will further develop their ideas into tangible prototypes and solutions.</v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item>
            <v-card color="transparent">
              <v-card-title>Phase III: Orientation</v-card-title>
              <v-card-subtitle>September 25 - October 27, 2023</v-card-subtitle>
              <v-card-text class="text-subtitle-1">The hackathon begins with an orientation session, where the participants
                will be briefed on 5G
                technologies and the lab's resources, facilities, and available technologies. Additionally, it will include
                informative sessions and workshops led by experts to enhance participants' understanding of 5G technology,
                its potential applications, and the integration of cutting-edge technologies such as IoT, AI, AR/VR, and
                more. </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item>
            <v-card color="transparent">
              <v-card-title>Phase IV: Hackathon</v-card-title>
              <v-card-subtitle>September 25 - October 27, 2023</v-card-subtitle>
              <v-card-text class="text-subtitle-1">The participants will be given four weeks to ideate, build, refine,
                and test their solutions. They will have access to mentors who will provide subject-matter expertise on
                relevant themes and 5G technologies. Organizers will provide mentor scheduling services either physcially or
                remotely depending on availability of both mentors and teams.</v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item>
            <v-card color="transparent">
              <v-card-title>Phase V: Testing</v-card-title>
              <v-card-subtitle>October 18-27, 2023</v-card-subtitle>
              <v-card-text class="text-subtitle-1">The 5G lab at NUST will be available for testing and validation of
                prototypes towards the end of the hacking period. Participants will have two weeks to test and validate
                their products or solutions to ensure that everything works and they are ready to be judged. The organizers
                will ensure that participants have adequate time and space available for their testing requirements.
                Scheduling of multiple teams may be required to ensure optimal use of the facilities.</v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item>
            <v-card color="transparent">
              <v-card-title>Phase VI: Judging</v-card-title>
              <v-card-subtitle>October 30, 2023</v-card-subtitle>
              <v-card-text class="text-subtitle-1">The final adjudication will take place towards the end of October where
                all participants will present and demonstrate their prototypes infront of a panel of judges.</v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-responsive>
    </v-container>
  </section>
</template>

<script setup>
import { useTheme } from 'vuetify'
const theme = useTheme()
</script>

<script>
export default {
  data: () => ({
    tab: null,
  }),
}
</script>
