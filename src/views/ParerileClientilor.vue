<template>
  <div>

    <image-slot>
    </image-slot>
    <!-- start listing list section -->
    <section>
      <div class="container">
        <div class="row margin-50px-bottom">
          <div class="col-12">
            <h4 class="mt-3">Parerile clientilor</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem, cum dolorum ducimus ea earum eligendi excepturi exercitationem harum id illo incidunt laboriosam magnam magni minus necessitatibus odit quae, quasi recusandae repudiandae sapiente sed sint veniam, veritatis voluptatibus voluptatum?
            </p>
            <p class="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis et officiis reiciendis tempore! Explicabo laudantium, neque. Nam, odit, reiciendis.
            </p>
            <div class="border-bottom mb-3"></div>

            <!-- container firme free-->
            <div class="container m-1">
              <div class="row">



                <testimonials-clasic class="mb-2"
                    v-for="review in reviews" :key="review.id"
                    :name="review.name"
                    :data="review.data"
                    :text="review.text"
                >

                </testimonials-clasic>


                <!--                inchide row-->
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- end listing list section -->

    <slide-top></slide-top>

  </div>
</template>

<script>

import TestimonialsClasic from "@/components/TestimonialsClasic";
import ImageSlot from "@/components/UI/ImageSlot";

export default {
  name: "ParerileClientilor",
  components: {
    // testimonialsClienti,
    TestimonialsClasic,
    ImageSlot
    // ImagineTop
  },
  // props: ['name'],
  data() {
    return {
      reviews: [],
      title: 'parerile clientilor',
    }
  },
  mounted() {
    this.fetchTestimonials()
    // console.log(this.fetchTestimonials)
  },
  methods: {
    async fetchTestimonials() {
      const response = await fetch('testimonials.json');
      const value = await response.json();
      this.reviews = value;
      console.log(value)
      return value
      // try {
      //   const response = await fetch('testimonials.json');
      //   console.log(response)
      //   const value = response.json();
      //   this.jobs = value;
      //   console.log(this.jobs)
      //   console.log(value)
      // }catch (err){
      //   console.log(err)
      // }


      // return value
    }
  }

}
</script>

<style scoped>

</style>
