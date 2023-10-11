<template>
  <section id="eligibility" class="bg-grey-lighten-5 py-sm-8 py-md-16">
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
          </ul> 
        </v-col>
        <v-col>
          <ul class="px-4">
            <li class="mb-4">Candidates must have foundational understanding of computers, software, networking and related skills</li>
            <li class="mb-4">Candidates must be familiar with 5G technology, IoT, or related domains</li>
            <!-- <li class="mb-4">Candidates must register as part of a team. Teams may consist of between 2 and 5 members.</li> -->
            <!-- <li class="mb-4">All team members must individually meet the eligibility criteria.</li> -->
            <li class="mb-4">Candidates must commit to being available for the hackathon, between September 2023 and November 2023.</li>
            <li class="mb-4">The hackathon is open to participants from Pakistan. Candidates from other regions/countries may be eligible upon approval, but please check with the organizers.</li>
          </ul>
        </v-col>
      </v-row>

      <h2 class="text-h4 text-sm-h3 font-weight-bold mb-4 text-sm-center mt-16">
        <span class="text-primary pe-3">[</span>Evaluation Criteria<span class="text-primary ps-3">]</span></h2>
      <v-row>
        <v-col cols="12" sm="2" lg="1"><strong>Relevance</strong></v-col><v-col cols="12" sm="10" lg="11"> Alignment of the idea with the chosen theme and its potential to address critical challenges specific to Pakistan's context within the selected domains.</v-col>
        <v-col cols="12" sm="2" lg="1"><strong>Innovation</strong></v-col><v-col cols="12" sm="10" lg="11">Originality, uniqueness, and creativity of the idea; integration of cutting-edge technologies and novel approaches.</v-col>
        <v-col cols="12" sm="2" lg="1"><strong>Feasibility</strong></v-col><v-col cols="12" sm="10" lg="11">Practicality and feasibility of implementing the proposed idea within the given time frame and available resources.</v-col>
        <v-col cols="12" sm="2" lg="1"><strong>Impact</strong></v-col><v-col cols="12" sm="10" lg="11">Potential impact and value that the idea can bring; potential for positive changes, improvements, or solutions to critical challenges in the target domain.</v-col>
        <v-col cols="12" sm="2" lg="1"><strong>Scalability</strong></v-col><v-col cols="12" sm="10" lg="11">Potential of scalability of the idea beyond the hackathon; whether the proposed solution can be expanded, replicated, or adapted to cater to a larger audience or broader context.</v-col>
        <v-col cols="12" sm="2" lg="1"><strong>Presentation</strong></v-col><v-col cols="12" sm="10" lg="11">Clarity, effectiveness, and organization of the presentation; ability of the presenter to articulate the idea and convey it in a compelling manner.</v-col>
      </v-row>

    </v-container>
  </section>
</template>


