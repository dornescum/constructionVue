<template>



  <section class="contact-form mt-3 mb-3">

<!--    <imagine-top>-->

<!--    </imagine-top>-->
    <div class="container">
      <div class="row">
        <div class="col-md-12 form-list center-col border border-radius-10 p-4">
          <div class="row">
            <div class="form-group col-md-12">
              <p class="font-size18 text-extra-dark-gray"><b>Nume</b></p>
              <input type="text" class="form-control no-margin-bottom padding-10px-tb"
                     name="exampleInputEmail" id="exampleInputName" placeholder="Nume" required>
            </div>
            <div class="form-group col-md-6">
              <p class="font-size18 text-extra-dark-gray"><b>Tip entitate</b></p>
              <select type="select" class="form-control no-margin-bottom padding-10px-tb"
                      name="exampleInputName" id="tipEntitate" placeholder="Selecteaza" required>
                <option value="">Toate</option>
                <option value="">FIRMA </option>
                <option value=""> PFA</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <p class="font-size18 text-extra-dark-gray"><b>Judet</b></p>
              <select type="select" class="form-control no-margin-bottom padding-10px-tb"
                      name="exampleInputName" id="judet" placeholder="Selecteaza" required>
                <option value="0" selected="selected">Toate</option>
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
            <div class="form-group col-md-12">
              <p class="font-size18 text-extra-dark-gray"><b>Tip lucrare</b></p>
              <select type="select" class="form-control no-margin-bottom padding-10px-tb"
                      name="exampleInputName" id="tipLucrare" placeholder="Selecteaza" required>
                <option value="0" selected="selected">Toate</option>
                <option  value="1">cadastru și intabulare apartament</option>
                <option  value="2">cadastru și intabulare teren intravilan</option>
                <option  value="3">cadastru și intabulare teren extravilan</option>
                <option  value="4">cadastru și intabulare teren cu construcție</option>
                <option  value="5">actualizare / rectificare cadastru</option>
                <option  value="6">dezmembrare / parcelare / lotizare teren intravilan</option>
                <option  value="7">dezmembrare / parcelare / lotizare teren extravilan</option>
                <option  value="13">alipire teren intravilan</option>
                <option  value="14">alipire teren extravilan</option>
                <option  value="15">alipire unitati individuale (apartamente)</option>
                <option  value="8">plan topografic (de situație)</option>
                <option  value="9">trasare / înțărușare teren / construcție</option>
                <option  value="10">scoaterea din circuitul agricol</option>
                <option  value="11">aviz tehnic OCPI</option>
                <option  value="12">alt tip de lucrare</option>
              </select>
            </div>




            <div class="col-md-12">
              <div class="row justify-content-between">

                <p class="margin-20px-left sm-font-size12">* toate campurile sunt obligatorii</p>
                <button type="submit" class="btnM margin-20px-right hover sm-font-size14"><span><i class="fas fa-search"></i> Cauta</span></button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end contact form -->
</template>

<script>
// import ImagineTop from "@/components/UI/ImagineTop";
export default {
  name: "cautaFirmaForm",
  components:{
    // ImagineTop
  }
}
</script>

<style scoped>

</style>