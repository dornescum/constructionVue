<template>
  <div>
    <imagine-top></imagine-top>
    <!-- start listing list section -->
    <section>
      <div class="container">
        <div class="row margin-50px-bottom">
          <div class="col-12">
            <h4 class="mt-3">Parerile clientilor</h4>
            <p>Acesti clienti au ales serviciile FirmeCadastru.ro si au fost foarte multumiti. Este
              suficient sa
              accesati judetul aferent imobilului dvs, apoi alegeti din lista de autorizati cadastru
              firma/PFA
              cu care doriti sa colaborati.
            </p>
            <p class="font-italic">
              Nota: O parte dintre parerile clientilor de mai jos fac referire la un modul de solicitare
              oferta, care momentan este dezactivat.
            </p>
            <div class="border-bottom mb-3"></div>

            <!-- container firme free-->
            <div class="container m-1">
              <div class="row">

                <!--a 2 a varianta de card-->

<!--                <testimonials-clienti-->
<!--                    v-for="review in reviews" :key="review.id"-->
<!--                    :name="review.name"-->
<!--                    :data="review.data"-->
<!--                    :text="review.text"-->
<!--                >-->

<!--                </testimonials-clienti>-->

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
  </div>
</template>

<script>
// import testimonialsClienti from "@/components/testimonialsClienti";
import TestimonialsClasic from "@/components/TestimonialsClasic";
import ImagineTop from "@/components/UI/ImagineTop";
export default {
  name: "ParerileClientilor",
  components: {
    // testimonialsClienti,
    TestimonialsClasic,
    ImagineTop
  },
  // props: ['name'],
  data() {
    return {
      reviews: [],
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