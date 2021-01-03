<template>
 <section>
   <homeSearch />
   <homeJudete />
   <homeTrei />
   <homeTestimonials/>
   <homeBlog />
   <slideTop></slideTop>
 </section>
</template>

<script>
import homeSearch from "@/components/homeSearch";
import homeJudete from "@/components/homeJudete";
import homeTrei from "@/components/homeTrei";
import homeTestimonials from "@/components/homeTestimonials";
import homeBlog from "@/components/homeBlog";
import slideTop from "@/components/UI/slideTop";

export default {
  name: 'Home',
  components: {
 homeSearch,
    homeJudete,
    homeTrei,
    homeTestimonials,
    homeBlog,
    slideTop
  }
}
</script>
