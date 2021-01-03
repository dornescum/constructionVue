<template>
  <div class="pb-3">
    <imagine-top></imagine-top>
    <cautaFirmaForm/>
    <firmaPro/>
    <firmaPro/>
    <firmaStandard/>
    <firmaStandard/>
    <firmaFree/>
    <firmaFree/>
  </div>
</template>

<script>
import cautaFirmaForm from "@/components/cautaFirmaForm";
import firmaPro from "@/components/firmaPro";
import firmaStandard from "@/components/firmaStandard";
import firmaFree from "@/components/firmaFree";
import ImagineTop from "@/components/UI/ImagineTop";

export default {
  name: "CautaFirma",
  components: {
    'cautaFirmaForm': cautaFirmaForm,
    'firmaPro': firmaPro,
    'firmaStandard': firmaStandard,
    'firmaFree': firmaFree,
    ImagineTop
  },
  // data(){
  //   return {
  //     titleBackground: 'Cauta'
  //
  //   }
  // }
}
</script>

<style scoped>

</style>