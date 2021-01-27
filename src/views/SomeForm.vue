<template>
  <section>
    <image-slot>
<!--      <h1>{{ title}}</h1>-->
      <img src="../assets/img/hands.jpeg" alt="" class="imgBackground">
      <div class="centered">
        <h1 class="titlu font-weight-bold">{{ title }}</h1>
      </div>
    </image-slot>
    <b-row>
<!--         imagine temporara!!!-->
<!--  ==============================================================    -->
<!--      <div class="pt-3">-->
<!--        <img src="../assets/img/harta.jpg" alt="" class="imgBackground">-->
<!--        <div class="centered titluBackground">-->
<!--          <h1>test</h1>-->
<!--        </div>-->
<!--      </div>-->
<!--=================================================================-->



      <b-col class="form-list center-col mt-5">
        <div class="container margin-10px-top">

          <p class="grey-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum illo ipsa neque nisi nostrum, nulla odio quis ullam veritatis?
          </p>


          <fieldset class="border p-2 mb-2">
            <legend  class="w-auto">Some data
            </legend>
<!--            <div class="row justify-content-start">-->
<!--              <p class="pl-2">Tipul entitati</p>-->
<!--              <input type="checkbox" checked data-toggle="toggle" data-on="Firma" data-off="PFA"-->
<!--                     data-onstyle="success" data-offstyle="info" data-size="small" data-height="25">-->
<!--            </div>-->
            <b-form-group label="Tipul entitati" align="start">
              <b-form-radio-group
                  align="center"
                  id="radio-group-1"
                  v-model="selected"
                  :options="options"
                  name="radio-options"
              ></b-form-radio-group>
            </b-form-group>

<!--            <b-form-group label="Radios using sub-components">-->
<!--              <b-form-radio-group id="radio-group-2" v-model="selected" name="radio-sub-component">-->
<!--                <b-form-radio value="first">Toggle this custom radio</b-form-radio>-->
<!--                <b-form-radio value="second">Or toggle this other custom radio</b-form-radio>-->
<!--              </b-form-radio-group>-->
<!--            </b-form-group>-->



            <div class="row">
              <div class="form-group col-md-12">
                <input type="text" class="form-control no-margin-bottom padding-10px-tb"
                       name="exampleInputEmail" id="exampleInputName" placeholder="Nume" required>
              </div>
              <div class="form-group col-md-12">
                            <textarea class="form-control" id="descriere-inscriere" rows="5"
                                      placeholder="Descriere"></textarea>
              </div>
              <div class="form-group col-md-12">
                            <textarea class="form-control" id="adresa-inscriere" rows="3"
                                      placeholder="Adresa"></textarea>
              </div>

              <div class="form-group col-md-6">
                <select type="select" class="form-control no-margin-bottom padding-10px-tb"
                        name="exampleInputName" id="radioContact" placeholder="Selecteaza" required>
                  <option value="0" selected="selected">Judet</option>
                  <option value="1">Alba</option>
                  <option value="2">Arad</option>
                  <option value="3">Arges</option>
                  <option value="4">Bacau</option>
                  <option value="5">Bihor</option>
                  <option value="6">Bistrita-Nasaud</option>
                  <option value="7">Botosani</option>
                  <option value="9">Braila</option>
                  <option value="8">Brasov</option>
                  <option value="100">Bucuresti</option>
                  <option value="13">Buzau</option>
                  <option value="14">Calarasi</option>
                  <option value="15">Caras-Severin</option>
                  <option value="16">Cluj</option>
                  <option value="17">Constanta</option>
                  <option value="18">Covasna</option>
                  <option value="19">Dambovita</option>
                  <option value="20">Dolj</option>
                  <option value="21">Galati</option>
                  <option value="22">Giurgiu</option>
                  <option value="23">Gorj</option>
                  <option value="24">Harghita</option>
                  <option value="25">Hunedoara</option>
                  <option value="26">Ialomita</option>
                  <option value="27">Iasi</option>
                  <option value="101">Ilfov</option>
                  <option value="28">Maramures</option>
                  <option value="29">Mehedinti</option>
                  <option value="30">Mures</option>
                  <option value="31">Neamt</option>
                  <option value="32">Olt</option>
                  <option value="33">Prahova</option>
                  <option value="35">Salaj</option>
                  <option value="34">Satu Mare</option>
                  <option value="36">Sibiu</option>
                  <option value="37">Suceava</option>
                  <option value="38">Teleorman</option>
                  <option value="39">Timis</option>
                  <option value="40">Tulcea</option>
                  <option value="42">Valcea</option>
                  <option value="41">Vaslui</option>
                  <option value="43">Vrancea</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <input type="text" class="form-control no-margin-bottom padding-10px-tb"
                       name="exampleInputEmail" id="exampleInputPhone" placeholder="Telefon" required>
              </div>
              <div class="form-group col-md-6">
                <input type="text" class="form-control no-margin-bottom padding-10px-tb"
                       name="exampleInputEmail" id="fax-inscriere" placeholder="Fax" required>
              </div>


              <div class="form-group col-md-6">
                <input type="text" class="form-control no-margin-bottom padding-10px-tb"
                       name="exampleInputEmail" id="website-inscriere" placeholder="Website" required>
              </div>


            </div>
          </fieldset>


          <!--==============================================-->

          <fieldset class="border p-2 mb-2">
            <legend  class="w-auto">Date HJHK
            </legend>
            <!--                    <h6>Date ANCPI</h6>-->
            <div class="row">
              <div class="form-group col-md-6">
                <input type="text" class="form-control no-margin-bottom padding-10px-tb"
                       name="exampleInputEmail" id="ctegoria" placeholder="Categoria / Clasa " required>
              </div>
              <div class="form-group col-md-6">
                <input type="text" class="form-control no-margin-bottom padding-10px-tb"
                       name="exampleInputEmail" id="serie" placeholder="Seria si numarul  " required>
              </div>
            </div>
          </fieldset>
          <!--==============================================-->
          <fieldset class="border p-2 mb-2">
            <legend  class="w-auto">Some data
            </legend>
            <!--                    <h6>Date de conectare</h6>-->
            <div class="row">
              <div class="form-group col-md-12">
                <input type="text" class="form-control no-margin-bottom padding-10px-tb"
                       name="exampleInputEmail" id="email-formular" placeholder="Email " required>
              </div>
              <div class="form-group col-md-6">
                <input type="text" class="form-control no-margin-bottom padding-10px-tb"
                       name="exampleInputEmail" id="parola" placeholder="Parola  " required>
              </div>
              <div class="form-group col-md-6">
                <input type="text" class="form-control no-margin-bottom padding-10px-tb"
                       name="exampleInputEmail" id="parola2" placeholder="Parola [reintroduceti]  "
                       required>
              </div>
            </div>
          </fieldset>
          <p>
            <!--                        <label class="font-weight-bold text-dark">Termeni si conditii *</label>-->
            <input class="margin-50px-left" id="terms" name="terms" type="checkbox" value="terms"/>
            <label for="terms">
              {{space }} Lorem ipsum dolor sit amet.<a id="terms-and-conditions" href="#" class="link-green-color"
                                              data-toggle="modal" data-target="#exampleModal"
            >Lorem ipsum dolor sit amet.</a>
            </label>
          </p>


          <div class="col-md-12 mb-2">
            <div class="row justify-content-between">

              <p class="margin-20px-left sm-font-size12">* mandatory</p>
              <button type="submit" class="btnM margin-20px-right hover sm-font-size14" style="background-color: #42b983"><span><i
                  class="fa fa-save"></i> Register</span></button>
            </div>

          </div>
        </div>
      </b-col>
    </b-row>

    <slide-top></slide-top>
  </section>

</template>

<script>
import ImageSlot from "@/components/UI/ImageSlot";
// import ImagineTop from "@/components/UI/ImagineTop";
export default {
    components: {
      ImageSlot
    },
  data() {
    return {
      title: 'Some generated text ',
      space: '  ',
      selected: 'first',
      options: [
        { text: 'Firma', value: 'first' },
        { text: 'Pfa', value: 'second' },
        // { text: 'This one is Disabled', value: 'third', disabled: true },
        // { text: 'This is the 4th radio', value: { fourth: 4 } }
      ]
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
.titluBackground {
  display: inline-block;
  padding: 0.3rem 0.7rem;
  background-color: rgba(0,0,0,0.6);
  color: var(--clr-white);
  /*border-radius: 3px;*/
}

@media screen and (max-width: 600px) {
  p {
    font-size: 12px;
  }
}
</style>
