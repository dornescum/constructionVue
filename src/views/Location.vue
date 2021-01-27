<template>
  <section>
<!--    <ImagineTop></ImagineTop>-->
    <image-slot>
      <img src="../assets/img/hands.jpeg" alt="" class="imgBackground">
      <div class="centered">
        <h1 class="titlu font-weight-bold">{{ title }}</h1>
      </div>
    </image-slot>
    <localizareHeader/>
    <localizareHarta/>
    <slide-top></slide-top>
  </section>
</template>

<script>
import localizareHeader from "@/components/localizareHeader";
import localizareHarta from "@/components/localizareHarta";
// import ImagineTop from "@/components/UI/ImagineTop";
import ImageSlot from "@/components/UI/ImageSlot";

export default {
  name: "Localizare",
  components: {
    'localizareHeader': localizareHeader,
    'localizareHarta': localizareHarta,
    // ImagineTop,
    ImageSlot
  },
  data(){
    return{
      title: 'Location',
    }
  }
}
</script>

<style scoped>
div {
  position: relative;
  text-align: center;
  color: white;
}
.imgBackground {
  /*background: url("../../assets/img/hand-shake.jpg");*/
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  /*background-size: cover; !* Resize the background image to cover the entire container *!*/
  background-color: black;
  width: 100%;
  height: 30vh;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: .7;
  object-fit: cover;
  display: block;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


@media screen and (max-width: 600px) {
  p {
    font-size: 12px;
  }
}
</style>