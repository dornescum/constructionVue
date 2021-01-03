<template>
  <section>
    <ImagineTop></ImagineTop>
    <localizareHeader/>
    <localizareHarta/>
  </section>
</template>

<script>
import localizareHeader from "@/components/localizareHeader";
import localizareHarta from "@/components/localizareHarta";
import ImagineTop from "@/components/UI/ImagineTop";

export default {
  name: "Localizare",
  components: {
    'localizareHeader': localizareHeader,
    'localizareHarta': localizareHarta,
    ImagineTop
  }
}
</script>

<style scoped>

</style>