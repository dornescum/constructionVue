<template>
  <div class="pt-3">
    <img src="../../assets/img/hand-shake.jpg" alt="" class="imgBackground">
    <div class="centered titluBackground">
      <h1>{{  titleBackground }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImagineTop",
  data() {
    return {
      titleBackground: 'Contact',
      // title: ''
    }
  },
  // props: ['titleB']
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
  opacity: .8;
  object-fit: cover;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.titluBackground {
  display: inline-block;
  padding: 0.3rem 0.7rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--clr-white);
  /*border-radius: 3px;*/
}
</style>