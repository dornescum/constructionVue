<template>
  <div class="container pt-5">
    <div class="row margin-50px-bottom">
      <div class="col-lg-7 col-md-6 gri-font">
        <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem et eum harum nesciunt non nostrum possimus rem unde voluptatibus. A, aliquid enim facilis fugiat modi possimus repudiandae saepe velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quaerat.
        </p>


        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur at deserunt dolor eaque eligendi expedita facere id nisi obcaecati optio quaerat quos, ratione repellat tempora tenetur ullam veniam, veritatis?
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, iure?
        </p>


      </div>

      <!--                dreapta carousel-->
      <div class="col-lg-5 col-md-6">
        <img src="../assets/img/thinkpad.jpeg" alt="">
        <!--                inchide carousel-->
      </div>
      <!--                inchide dreapta-->
    </div>


    <!--butoane coordonate-->
    <div class="row pt-5">
      <div class="col-lg-4 text-dark">

        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm"><b>X (Nord)</b></span>
          </div>
          <input type="text" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-sm"
                 placeholder="500000.000">
        </div>
      </div>
      <div class="col-lg-4">
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm2"><b>Y (Est)</b></span>
          </div>
          <input type="text" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-sm"
                 placeholder="500000.000">
        </div>
      </div>
      <div class="col-lg-4">
        <button class="butn btn-block text-center">Localizare</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "localizareHeader",
  data() {
    return {
      linkTopo: "http://www.topo-online.ro/ro/stereo70.php",

    }
  },
  methods: {
    // outputText(){
    //   // let text = this.para1
    //   // console.log(text)
    //   let w = innerWidth
    //   console.log(w)
    //   if (w < 500){
    //     w.fontSize = "8px"
    //   }





  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
}

img:hover {
  box-shadow: var(--dark-shadow);
}

@media screen and (max-width: 599px) {
  p {
    font-size: 12px;
  }
}

</style>