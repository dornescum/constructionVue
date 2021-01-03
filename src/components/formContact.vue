<template>
  <!-- start contact form -->
  <section class="bg-light-gray contact-form mt-2">
    <div class="container margin-10px-top">
      <div class="row">

        <div class="container">
        <div class="col-md-12 form-list center-col">
          <div class="row">
            <div class="form-group col-md-6">
              <input type="text" class="form-control no-margin-bottom padding-10px-tb"
                     name="exampleInputEmail" id="exampleInputName" placeholder="Nume" required>
            </div>
            <div class="form-group col-md-6">
              <select type="select" class="form-control no-margin-bottom padding-10px-tb"
                      name="exampleInputName" id="radioContact" placeholder="Selecteaza" required>
                <option value="">Selecteaza</option>
                <option value="">Potential client</option>
                <option value="">Firma cadastru / PFA</option>
              </select>
            </div>

            <div class="form-group col-md-6">
              <input type="text" class="form-control no-margin-bottom padding-10px-tb"
                     name="exampleInputEmail" id="exampleInputPhone" placeholder="Telefon" required>
            </div>
            <div class="form-group col-md-6">
              <input type="text" class="form-control no-margin-bottom padding-10px-tb"
                     name="exampleInputName" id="exampleInputEmail" placeholder="Email" required>
            </div>


            <div class="form-group col-md-12">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                                      placeholder="Mesaj"></textarea>
            </div>
            <div class="col-md-12 mb-2">
              <div class="row justify-content-between">

                <p class="margin-20px-left sm-font-size12">* toate campurile sunt obligatorii</p>
                <button type="submit" class="btnM margin-20px-right hover sm-font-size14"><span><i class="fa fa-envelope"></i> Trimite</span></button>
              </div>

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
export default {
  name: "formContact"
}
</script>

<style scoped>
/* contact us section */

.contact-form {
  margin-top: -90px;
}

@media screen and (max-width: 1199px) {
  .contact-form {
    margin-top: -70px;
  }
}

@media screen and (max-width: 991px) {
  .contact-form {
    margin-top: -50px;
  }
}

</style>