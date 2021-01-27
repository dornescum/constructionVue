<template>
  <section>

<image-slot>
</image-slot>
    <div class="container pt-2">
      <div class="listing-detail margin-50px-bottom sm-margin-35px-bottom">
        <h3 class="font-weight-900 border-bottom text-center">Lorem ipsum dolor sit amet.
          <code>Alba</code></h3>
      </div>
      <!--link-->
      <div class="margin-10px-bottom">
        <a href="#" class="font-weight-bold margin-10px-right text-theme-color">
          <i class="fas fa-arrow-alt-circle-right"></i>
          Lorem ipsum dolor sit amet. Alba</a>
      </div>
      <div>
        <h6> Lorem ipsum dolor sit amet, consectetur adipisicing.</h6>
      </div>
      <div class="row">

        <!--ALBA-->
        <!--partea stanga-->
        <div class="col-lg-8 margin-10px-bottom pt-1">
          <!--partea stanga firma-->
          <table class="table table-hover table-bordered table-responsive-sm">
            <thead>
            <tr class="bg-light-gray">
              <td colspan="2"><i class="fa fa-address-book margin-10px-right text-theme-color padding-25px-left"
                                 aria-hidden="true"></i>Date de contact
              </td>
              <!--<td class="text-center text-white">Date de contact</td>-->
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="pl-3">Adresa</td>
              <td class="pl-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <a href="#" data-tool-tip="36.077701,23.566273">
                  <i class="fa fa-map-marked-alt text-theme-color"></i>
                </a>
              </td>
            </tr>

            <tr>
              <td class="pl-3">Telefon</td>
              <td class="pl-3"> +40 258 545454</td>
            </tr>
            <tr>
              <td class="pl-3">Email</td>
              <td class="pl-3"><a href="" class="text-theme-color"> fdfds@dsdas</a></td>
            </tr>
            <tr>
              <td class="pl-3">Fax</td>
              <td class="pl-3">+40 255545454</td>
            </tr>
            <tr>
              <td class="pl-3">Website</td>
              <td class="pl-3"><a href="#" class="text-theme-color">Lorem ipsum dolor.</a></td>
            </tr>
            </tbody>
          </table>
        </div>
        <!--partea dreapta-->
        <div class="col-lg-4 pt-1">
          <table class="table table-hover table-bordered">
            <tr class="bg-light-gray">
              <th scope="row"><i class="fas fa-calendar-alt padding-20px-left text-theme-color"
                                 aria-hidden="true"></i>
              </th>
              <td class="pl-3"><b>Public</b></td>
              <td class="pl-3"><b>Autorizati</b></td>

            </tr>
            <tr>
              <th scope="row" class="pl-3">Luni</th>
              <td class="pl-3">9-12</td>
              <td class="pl-3">9-12</td>

            </tr>
            <tr>
              <th scope="row" class="pl-3">Marti</th>
              <td class="pl-3">9-12</td>
              <td class="pl-3">9-12</td>

            </tr>
            <tr>
              <th scope="row" class="pl-3">Miercuri</th>
              <td class="pl-3">9-12</td>
              <td class="pl-3">9-12</td>

            </tr>
            <tr>
              <th scope="row" class="pl-3">Joi</th>
              <td class="pl-3">9-12</td>
              <td class="pl-3">9-12</td>

            </tr>
            <tr>
              <th scope="row" class="pl-3">Vineri</th>
              <td class="pl-3">9-12</td>
              <td class="pl-3">9-12</td>

            </tr>
          </table>
        </div>


      </div>

    </div>

    <slide-top></slide-top>

  </section>
</template>

<script>
// import ImagineTop from "@/components/UI/ImagineTop";

import ImageSlot from "@/components/UI/ImageSlot";


export default {
  name: "OficiuC",
  components: {
    // ImagineTop,

    ImageSlot
  },
  data() {
    return {
      info: [],
      information: '',
      title: 'lore dfsaa dsadas'
    }
  },
  mounted() {
    this.fetchInfo()
  },
  methods: {
    async fetchInfo() {
      const response = await fetch('cadastre.json');
      console.log(response)
      const value = await response.json();
      this.info = value;
      console.log(value)
      return value
    }
  }
}
</script>

<style scoped>

</style>