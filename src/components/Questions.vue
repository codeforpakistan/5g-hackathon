<template>
  <section id="faqs" class="bg-grey-lighten-5 py-sm-8 py-md-16">
    <v-container>
      <h2 class="text-h4 text-sm-h3 font-weight-bold mb-4 text-sm-center">
        <span class="text-primary pe-3">[</span>FAQs<span class="text-primary ps-3">]</span></h2>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, q) in items" :key="q" :title="item.question" :text="item.answer"></v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </section>
</template>
<script>
export default {
  name: "Questions",
  data: () => ({
    items: [
      { question: 'What is the objective of the 5G Innovation Hackathon, and why is it so important?', answer: 'The 5G Innovation Hackathon is a dynamic event aimed at harnessing the power of 5G technology to create innovative solutions in a range of thematic areas. We believe it is essential to prioritize research and innovation around 5G because research acts as a catalyst, enabling us to harness the potential of 5G more rapidly and effectively when it becomes widely available. The 5G Innovation Hackathon is not just about the present; it is about preparing for a technologically advanced and connected future.' },
      { question: 'When is the last date to register?', answer: 'The last date to register for the hackathon was October 15, 2023.' },
      { question: 'Who can participate in the hackathon?', answer: 'Anyone aged 18 years or older can participate. We welcome students, tech enthusiasts, professionals, and anyone passionate about innovation.' },
      { question: 'Do I need a team to register for the hackathon?', answer: 'No, you don\'t, and we can help you form a team if you\'d like. Otherwise, you can register as an individual or with a team.' },
      { question: 'So if I do have a team, what size should it be? ', answer: 'Teams can have between 2 and 5 members.' },
      { question: 'What are the thematic areas for the hackathon?', answer: 'We are seeking solutions in: Smart Cities, Civic Services, Entertainment, Sports, Disaster Relief, Climate Change, Gaming, Tourism, Health, Education, Financial Services, Agri-Tech, Environment, and Industry 4.0.' },
      { question: 'Are international participants allowed?', answer: 'While the hackathon primarily targets participants from Pakistan, international candidates may be considered. Please check with the organizers for more details: events@codeforpakistan.org' },
      { question: 'What is the duration of the hackathon?', answer: 'The event spans from September 2023 to November 2023. We hope to have the hackathon in mid-November.' },
      { question: 'What perks await the winning teams?', answer: 'Winners will enjoy various rewards, including prizes, mentorship, incubation opportunities, and exclusive access to the cutting-edge labs.' },
      { question: 'So, mentors will be available to guide participants?', answer: 'Absolutely! Experienced mentors from various sectors will be on hand to assist and advise throughout the hackathon.' },
      { question: 'What tools or resources will be available?', answer: 'Participants will have access to specific tools and resources, details of which will be shared closer to the event date.' },
      { question: 'How are projects evaluated?', answer: 'Submissions are judged on innovation, feasibility, potential impact, and alignment with 5G technology and the thematic areas.' },
      { question: 'Can I modify my project once submitted?', answer: 'No, but with that said, we will give you ample time to test your solution.' },
      { question: 'Will there be any preparatory sessions before the hackathon?', answer: 'Yes, we will have an orientation session prior to the hackathon so you can familiarize yourself with the space and the equipment.' },
      { question: 'How can I get more information or clarify doubts?', answer: 'We are here to help! Reach out with any questions or for more info: events@codeforpakistan.org' },
    ]
  })
}
</script>