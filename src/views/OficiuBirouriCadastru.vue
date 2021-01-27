<template>
<section>
<!--  <imagine-top></imagine-top>-->
  <image-slot>
    <img src="../assets/img/harta.jpg" alt="" class="imgBackground">
    <div class="centered">
      <h1 class="titlu font-weight-bold">{{ title }}</h1>
    </div>
  </image-slot>
  <div class="container pt-4">
    <div class="listing-detail margin-50px-bottom sm-margin-35px-bottom">
<!--      <h3 class="font-weight-900 text-center">{{ title }}</h3>-->
    </div>
    <div class="col-lg-12 margin-50px-bottom center-col">
      <div class="listing-detail margin-10px-bottom sm-margin-35px-bottom">
        <h6 class="font-weight-400 pl-4"><a href="oficiu-cadastru.html"
                                            class="margin-10px-right text-theme-color">
          <i class="fas fa-home  text-theme-color"></i>
          Oficiul de cadastru si publicitate imobiliara
          ALBA</a></h6>
      </div>



      <table class="table table-hover table-bordered table-responsive-sm">
        <tbody>
        <tr class="bg-light-gray">
          <th class="pl-3">Birou</th>
          <td class="text-center"><b>Adresa</b></td>
        </tr>
        <tr>
          <td class="pl-3"><a href="#" class="font-weight-bold">Aiud</a></td>
          <td class="pl-3">Str. Cuza Vodă, nr. 14, cod 515200, Aiud, jud. Alba</td>
        </tr>
        <tr>
          <td class="pl-3"><a href="#" class="font-weight-bold">Alba Iulia</a></td>
          <td class="pl-3">Str. Septimius Severus nr. 59, Alba Iulia, jud. Alba, Cod postal 510129</td>
        </tr>
        <tr>
          <td class="pl-3"><a href="#" class="font-weight-bold">Blaj</a></td>
          <td class="pl-3">Str. Garii, Bl. 4, parter, cod 515400, Blaj, Jud. Alba</td>
        </tr>
        <tr>
          <td class="pl-3"><a href="#" class="font-weight-bold">Campeni</a></td>
          <td class="pl-3">str. Meşteşugarilor, nr. 2, Câmpeni, jud. Alba</td>
        </tr>
        <tr>
          <td class="pl-3"><a href="#" class="font-weight-bold">Sebes</a></td>
          <td class="pl-3">str. Şurianu, nr. 6, Sebeş, jud. Alba</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <slide-top></slide-top>

</section>
</template>

<script>
// import ImagineTop from "@/components/UI/ImagineTop";
import ImageSlot from "@/components/UI/ImageSlot";
export default {
  name: "OficiuBirouriCadastru",
  components: {
    // ImagineTop
    ImageSlot
  },
  data(){
    return {
      title: 'Oficii si birouri de cadastru din Romania'
    }
  }
}
</script>

<style scoped>
/*table {*/
/*  font-size: 16px;*/
/*}*/

/*.table td {*/
/*  padding: 0.15rem;*/
/*}*/

/*.table th {*/
/*  padding: 0.15rem;*/
/*}*/
@media screen and (max-width: 768px){
  h3 {
    font-size: 22px;
  }
  h6 {
    font-size: 18px;
  }
}

@media screen and (max-width: 599px){
  h3 {
    font-size: 20px;
  }
  h6 {
    font-size: 15px;
  }
  .table td {
    font-size: 14px;
  }
}
</style>