<template>
  <div>
    <imagine-top></imagine-top>
    <idContact></idContact>
    <FormContact/>
  </div>
</template>

<script>
import idContact from "@/components/idContact";
// import formContact from "@/components/formContact"
import FormContact from "@/components/formContact";
import ImagineTop from "@/components/UI/ImagineTop";


export default {
  name: "Contact",
  components: {
    FormContact,
    idContact,
    ImagineTop
  },
}

</script>

<style scoped>

</style>