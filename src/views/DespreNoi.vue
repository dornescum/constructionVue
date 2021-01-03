<template>
  <!-- start listing list section -->
  <section>
    <ImagineTop></ImagineTop>
    <div class="container pt-3">

      <div class="row margin-50px-bottom">
        <div class="col-md-6 center-col">

          <p>
            Suntem o echipa tanara, plina de idei inovatoare si utile,
            care a activat de-a lungul timpului in domenii precum geodezia,
            topografia, cadastru si nu in ultimul rand IT.
          </p>
          <p>
            Acest proiect a luat nastere din dorinta de a pune in legatura clientul,
            care are nevoie de servicii in domeniile prezentate mai sus, cu firma/PFA care
            activeaza in aceste domenii. Practic asiguram o legatura care il ajuta pe client
            sa obtina cea mai buna oferta intr-un interval scurt de timp, pe de-o parte si pe de alta parte,
            ofera un numar mai mare de potentiali clienti firmelor/PFA.
          </p>





        </div>
        <div class="col-md-6 xs-margin-20px-bottom">
          <div class="card-list-img">
            <a href="index.html">
              <img class="border-radius-5 img-fluid pt-2" src="../assets/img/salaci.jpeg" alt="Big Logo" />
            </a>
          </div>
        </div>


        <div class="border-bottom mb-3"></div>
      </div>
      <!--                paragraf de jos-->
      <div class="row">
        <div class="col-md-6 xs-margin-10px-bottom">
          <div class="card-list-img">
            <a href="index.html">
              <img class="border-radius-5 card-img pt-2 mb-1" src="../assets/img/Dan.jpg" alt="Big Logo" />
            </a>
          </div>
        </div>
        <div class="col-md-6">

          <p>
            Unul din avantajele care trebuie prezentate este faptul ca
            <a href="/" target="_blank" class="text-theme-color">firmecadastru.ro</a> este absolut <b
              class="text-black">gratuit</b> pentru potentialul client.
            Tot ce trebuie sa faca este sa aleaga firma cu care vrea sa colaboreze si treaba poate sa
            inceapa.
          </p>
          <p class="font-size16 font-italic">
            Ne place sa credem ca <a href="/" target="_blank" class="text-theme-color">firmecadastru.ro</a>
            este locul unde
            cererea si oferta se intalnesc si speram ca va veti convinge de acest lucru.
          </p>

        </div>
      </div>
    </div>
  </section>
  <!-- end listing list section -->
</template>

<script>
import ImagineTop from "@/components/UI/ImagineTop";
export default {
name: "DespreNoi",
  components: {
  ImagineTop
  }
}
</script>

<style scoped>
.pozaTemporara {
  background-color: #2c2c2c;
  height: 20vh;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
}

</style>