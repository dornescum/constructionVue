<template>
<section>

  <image-slot>

  </image-slot>
  <div class="container pt-4">
    <div class="listing-detail margin-50px-bottom sm-margin-35px-bottom">

    </div>
    <div class="col-lg-12 margin-50px-bottom center-col">
      <div class="listing-detail margin-10px-bottom sm-margin-35px-bottom">
        <h6 class="font-weight-400 pl-4"><a href="oficiu-cadastru.html"
                                            class="margin-10px-right font-weight-bold">
          <i class="fas fa-home  font-weight-bold"></i>
         Lorem ipsum dolor sit amet.
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
          <td class="pl-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, laudantium?</td>
        </tr>
        <tr>
          <td class="pl-3"><a href="#" class="font-weight-bold">Alba Iulia</a></td>
          <td class="pl-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
        </tr>
        <tr>
          <td class="pl-3"><a href="#" class="font-weight-bold">Blaj</a></td>
          <td class="pl-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
        </tr>
        <tr>
          <td class="pl-3"><a href="#" class="font-weight-bold">Campeni</a></td>
          <td class="pl-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
        </tr>
        <tr>
          <td class="pl-3"><a href="#" class="font-weight-bold">Sebes</a></td>
          <td class="pl-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
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
  name: "OficiuB",
  components: {
    // ImagineTop
    ImageSlot
  },
  data(){
    return {
      title: 'some text here'
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