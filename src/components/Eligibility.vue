<template>
  <section id="eligibility" class="bg-grey-lighten-3 py-sm-8 py-md-16">
    <v-container>
      <h2 class="text-h4 text-sm-h3 font-weight-bold mb-4 text-sm-center">
        <span class="text-primary pe-3">[</span>Eligibility<span class="text-primary ps-3">]</span></h2>
      <p class=" text-sm-center">To participate, candidates must <router-link :to="{ name: 'Register' }">register</router-link> and submit project details for evaluation.</p>
      <v-row class="mt-8">
        <v-col>
          <ul class="px-4">
            <li class="mb-4">Candidates must be 18 years or older at the time of registration.</li>
            <li class="mb-4">Candidates must either be...
            <ul class="pt-4 px-4">
                <li class="mb-4">pursuing undergraduate or postgraduate studies in fields related to technology, engineering, computer science, business or related disciplines.</li>
                <li class="mb-4">working professionals with background in technology, software development, telecommunications or related industries.</li>
            </ul></li>
            <li class="mb-4">Candidates must have foundational understanding of computers, software, networking and related skills</li>
            <li class="mb-4">Candidates must be familiar with 5G technology, IoT, or related domains</li>
          </ul> 
        </v-col>
        <v-col>
          <ul class="px-4">
            <li class="mb-4">Candidates must register as part of a team. Teams may consist of between 2 and 5 members.</li>
            <li class="mb-4">All team members must individually meet the eligibility criteria.</li>
            <li class="mb-4">Candidates must commit to being available for the hackathon, from 25 September 2023 to 21 October 2023.</li>
            <li class="mb-4">The hackathon is open to participants from Pakistan. Candidates from other regions/countries may be eligible upon approval, but please check with the organizers.</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>


