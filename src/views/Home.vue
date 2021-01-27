<template>
 <section>
   <homeSearch />
   <homeShop />
   <homeTrei />
   <homeTestimonials/>
   <homeBlog />
   <slideTop></slideTop>
 </section>
</template>

<script>
import homeSearch from "@/components/homeSearch";
import homeShop from "@/components/homeShop";
import homeTrei from "@/components/homeTrei";
import homeTestimonials from "@/components/homeTestimonials";
import homeBlog from "@/components/homeBlog";
import slideTop from "@/components/UI/slideTop";

export default {
  name: 'Home',
  components: {
 homeSearch,
    homeShop,
    homeTrei,
    homeTestimonials,
    homeBlog,
    slideTop
  }
}
</script>
