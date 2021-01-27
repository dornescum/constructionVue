<template>
  <div class="pb-3">

    <image-slot>
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