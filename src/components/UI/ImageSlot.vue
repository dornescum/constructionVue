<template>
  <div>
<!--    <img src="#" alt="#" class="imgBackground">-->
    <slot>

      <img src="../../assets/img/harta.jpg" alt="" class="imgBackground">
      <div class="centered">
        <h1 class="titlu font-weight-bold">ceva</h1>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
name: "ImageSlot"
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
  background-size: cover; /* Resize the background image to cover the entire container */
  background-color: black;
  width: 100%;
  height: 30vh;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: .7;
  object-fit: cover;

}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/*.titluBackground {*/
/*  display: inline-block;*/
/*  padding: 0.3rem 0.7rem;*/
/*  background-color: rgba(0,0,0,0.6);*/
/*  color: var(--clr-white);*/
/*  !*border-radius: 3px;*!*/
/*}*/
/*@media screen and (max-width: 1024px) {*/
/*  .titlu {*/
/*    font-size: 26px;*/
/*  }*/
/*}*/
/*@media screen and (max-width: 768px) {*/
/*  .titlu {*/
/*    font-size: 14px;*/
/*  }*/
/*}*/

@media screen and (min-width: 300px) {
  .titlu {
    font-size: 12px;
  }
}
@media screen and (min-width: 600px) {
  .titlu {
    font-size: 14px;
  }
}
@media screen and (min-width: 768px) {
  .titlu {
    font-size: 18px;
  }
}
@media screen and (min-width: 1024px) {
  .titlu {
    font-size: 30px;
  }
}
@media screen and (min-width: 1440px) {
  .titlu {
    font-size: 40px;
  }
}
</style>