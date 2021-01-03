<template>
  <section class="pt-2 mb-3">
    <div class="container">
  <!--            harta-->
  <div class="margin-50px-bottom sm-margin-35px-bottom sm-margin-10px-top">
    <h5 class="font-size20 border-bottom padding-5px-bottom">Locatie</h5>
    <iframe class="contact-map" id="localizare_canvas"
            src="https://maps.google.com/maps?q=romania&t=&z=13&ie=UTF8&iwloc=&output=embed"
            scrolling="no" marginheight="0" marginwidth="0"></iframe>
  </div>
  <!--                    buton harta-->
  <div class="row">
    <div class="col-lg-8">
      <input type="text" class="form-control no-margin-bottom padding-10px-tb"

             placeholder="https://firmecadastru.ro/localizare-teren/@500000.000,500000.000"
      />
    </div>
    <div class="col-lg-4">
      <!--                            <button class="butn btn-block">-->
      <!--                                <i class="fab fa-facebook-f"> Share on Facebook</i>-->
      <!--                            </button>-->
      <a href="#" class="butn btn-block text-center">
        <i class="fab fa-facebook-f"> Share on Facebook</i>
      </a>
    </div>
  </div>
    </div>
  </section>
</template>

<script>
export default {
name: "localizareHarta"
}
</script>

<style scoped>

</style>