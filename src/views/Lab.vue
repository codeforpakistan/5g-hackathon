<template>
  <section class="bg-grey-lighten-3 py-4 py-sm-8">
    <v-container>
      <v-card variant="text" class="mx-auto">
        <v-card-title class="text-h5 text-sm-h4 text-sm-center mb-4">The 5G Lab at NUST</v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-for="(img, i) in gallery" :key="i" class="d-flex child-flex" cols="4">
              <v-img :src="getImgUrl(img)" aspect-ratio="3/2" cover>
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </section>
  <PageFooter />
</template>

<script setup>
  import PageFooter from '@/components/Footer.vue'
</script>
<script>
export default {
  data: () => ({
    gallery: [
      'IMG_2597.jpg',
      'IMG_2594.jpg',
      'IMG_2593.jpg',
      'IMG_2592.jpg',
      'IMG_2591.jpg',
      'IMG_2590.jpg',
      'IMG_2589.jpg',
      'IMG_2588.jpg',
      'IMG_2587.jpg',
      'IMG_2585.jpg',
      'IMG_2583.jpg',
      'IMG_2582.jpg',
      // 'IMG_0710.jpg',
      // 'IMG_0702.jpg',
      // 'IMG_0701.jpg',
      // 'IMG_0700.jpg',
      // 'IMG_0699.jpg',
      // 'IMG_0698.jpg',
      // 'IMG_0696.jpg',
      // 'IMG_0694.jpg',
      // 'IMG_0693.jpg',
      // 'IMG_0692.jpg',
      // 'IMG_0684.jpg',
      // 'IMG_0682.jpg',
      // 'IMG_0681.jpg',
      // 'IMG_0679.jpg',
      // 'IMG_0678.jpg',
      // 'IMG_0675.jpg',
      // 'IMG_0664.jpg',
      // 'IMG_0663.jpg',
      // 'IMG_0661.jpg',
      // 'IMG_0660.jpg',
      // 'IMG_0659.jpg',
      // 'IMG_0658.jpg',
      // 'IMG_0657.jpg',
      // 'IMG_0655.jpg',
    ]
  }),
  methods: {
    getImgUrl (imageNameWithExtension) {
      const url = new URL(`../assets/lab/${imageNameWithExtension}`, import.meta.url);
      return url.href
    }
  }
}
</script>
