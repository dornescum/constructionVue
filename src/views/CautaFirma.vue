<template>
  <div class="pb-3">
<!--    <imagine-top></imagine-top>-->
    <image-slot>
      <img src="../assets/img/harta.jpg" alt="" class="imgBackground">
      <div class="centered">
        <h1 class="titlu font-weight-bold">{{title}}</h1>
      </div>
    </image-slot>
    <cautaFirmaForm/>
    <firmaPro/>
    <firmaPro/>
    <firmaStandard/>
    <firmaStandard/>
    <firmaFree/>
    <firmaFree/>
    <slide-top></slide-top>

  </div>
</template>

<script>
import cautaFirmaForm from "@/components/cautaFirmaForm";
import firmaPro from "@/components/firmaPro";
import firmaStandard from "@/components/firmaStandard";
import firmaFree from "@/components/firmaFree";
// import ImagineTop from "@/components/UI/ImagineTop";
import ImageSlot from "@/components/UI/ImageSlot";
export default {
  name: "CautaFirma",
  components: {
    'cautaFirmaForm': cautaFirmaForm,
    'firmaPro': firmaPro,
    'firmaStandard': firmaStandard,
    'firmaFree': firmaFree,
    // ImagineTop,
    ImageSlot
  },
  data(){
    return {
      title: 'Cauta ceva'

    }
  }
}
</script>

<style scoped>

</style>