<template>
<div>
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
        <td class="pl-3" v-text="adresa">
          <a href="#" data-tool-tip="46.077701,23.566273">
            <i class="fa fa-map-marked-alt text-theme-color"></i>
          </a>
        </td>
      </tr>

      <tr>
        <td class="pl-3">Telefon</td>
        <td class="pl-3" v-text="telefon"></td>
      </tr>
      <tr>
        <td class="pl-3">Email</td>
        <td class="pl-3" :email="email"><a href="" class="text-theme-color"> </a></td>
      </tr>
      <tr>
        <td class="pl-3">Fax</td>
        <td class="pl-3" :fax="fax"></td>
      </tr>
      <tr>
        <td class="pl-3">Website</td>
        <td class="pl-3" :email="website"><a href="#" class="text-theme-color"></a></td>
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
</template>

<script>
export default {
name: "oficiuCadastruComponent",
  props: ['adresa','telefon','email', 'fax','website'],

}
</script>

<style scoped>

</style>