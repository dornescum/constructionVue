<template>
  <!-- start contact section -->
  <section class="no-padding-bottom">
    <div class="container pt-5 mb-5">
      <div class="row">
        <!--stanga-->
        <div class="col-lg-6 order-1 order-lg-1">
          <div class="padding-40px-left sm-no-padding">
            <div class="display-start">
              <h6><i class="fas fa-building text-theme-color"></i><b> {{ titluCompanie}}</b> </h6>
            </div>
            <div class="margin-30px-bottom sm-margin-20px-bottom">
              <table class="table table-borderless table-hover">
                <tr>
                  <td class="display-start"><b>Denumire</b></td>
                  <td> GRT YUYU IUY SRL</td>
                </tr>
                <tr>
                  <td class="display-start"><b>CUI</b></td>
                  <td> 39dsadas28</td>
                </tr>
                <tr>
                  <td class="display-start"><b>Nr. reg.</b></td>
                  <td> J23dsada8</td>
                </tr>
                <tr>
                  <td class="display-start"><b>Email</b></td>
                  <td> fdsfdsf@FSFFS.cvom</td>
                </tr>
                <tr>
                  <td class="display-start"><b>Telefon</b></td>
                  <td> +40 6565 566b</td>
                </tr>
                <tr>
                  <td class="display-start"><b>Sediu social</b></td>
                  <td> Lorem ipsum dolor sit amet.</td>
                </tr>
              </table>
            </div>

          </div>
        </div>

        <!--dreapta-->
        <div class="col-lg-6 order-2 order-lg-2 sm-margin-30px-bottom">
          <div class="padding-40px-left sm-no-padding">
            <h6 class="display-start"><i class="fas fa-money-check text-theme-color"></i><b>{{ bankDetails}} </b> </h6>
            <div class="margin-30px-bottom sm-margin-20px-bottom">
                            <table class="table table-borderless table-hover ">
                              <tr>
                                <td class="display-start"><b>Banca</b></td>
                                <td> My bank</td>
                              </tr>
                              <tr>
                                <td class="display-start"><b>IBAN</b></td>
                                <td> 4343 434 3 34 34 3434</td>
                              </tr>
                              <tr>
                                <td class="display-start"><b>Moneda</b></td>
                                <td> dsad</td>
                              </tr>
                              <tr>
                                <td class="display-start"><b>SWIFT</b></td>
                                <td> JHJKL</td>
                              </tr>
                              <tr>
                                <td class="display-start"><b>GFF</b></td>
                                <td> KKHJ</td>
                              </tr>

                            </table>


<!--              <template>-->
<!--                <div>-->
<!--                  <b-table hover :items="items"></b-table>-->
<!--                </div>-->
<!--              </template>-->
            </div>

          </div>
        </div>
      </div>


    </div>
  </section>
</template>

<script>
export default {
  name: "idContact",
  data() {
    return {
      titluCompanie: 'Companie',
      bankDetails: ' Date bancare',

    }
  }
}
</script>

<style scoped>
.display-start {
  display: flex;
  justify-content: start;
  align-items: start;
}
h6 {
  color: black;
}

table {
  font-size: 16px;
}

.table td {
  padding: 0.15rem;
}

.table th {
  padding: 0.15rem;
}

@media screen and (max-width: 600px) {
  .table td {
    padding: 0.05rem;
    font-size: 12px;
  }
}
</style>