<template>
  <div>
    <image-slot>
    </image-slot>
    <idContact></idContact>
    <FormContact/>
    <slide-top></slide-top>

  </div>
</template>

<script>
import idContact from "@/components/idContact";
// import formContact from "@/components/formContact"
import FormContact from "@/components/formContact";
import ImageSlot from "@/components/UI/ImageSlot";
// import ImagineTop from "@/components/UI/ImagineTop";


export default {
  name: "Contact",
  components: {
    FormContact,
    idContact,
    ImageSlot
    // ImagineTop
  },
  data(){
    return {
      title: 'Contact'

    }
  }
}

</script>

<style scoped>

</style>