<template>
  <!-- start listing list section -->
  <section>
<!--    <ImagineTop></ImagineTop>-->
    <image-slot></image-slot>
    <div class="container p-3">

      <div class="row">
        <div class="col-12 center-col">
          <!--                    <h4>Cum functioneaza</h4>-->
          <p>
            Aceasta aplicatie isi propune sa puna in legatura potentialii clienti
            cu firmele/PFA de cadastru. Practic va dam posibilitatea, dumneavoastra ca si client
            , sa alegeti dintr-o lista de firme pe cea care intruneste toate conditiile dumneavoastra (ex:
            experienta, numarul de angajati, dotari, pret etc.).
          </p>
          <p>
            De asemenea, puteti consulta
            <a href="ce-este-cadastru.html" target="_blank" class="text-theme-color">articolele de legislatie</a>
            pentru a afla mai multe informatii despre ceea ce presupune un cadastru.
          </p>
          <p>
            Sunt doua modalitati prin care puteti intra in legatura cu firmele/PFA de cadastru:
          </p>
          <ol class="ml-3">
            <li class="margin-20px-left sm-margin-5px-left">Din <a href="index.html" target="_blank" class="text-theme-color">pagina principala</a> selectati de pe harta
              judetul corespunzator lucrarii dumneavoastra, apoi urmarind lista afisata
              alegeti firma/PFA dorita.</li>
            <li class="margin-20px-left sm-margin-5px-left">Cautati firma/PFA, accesand meniul
              '<a href="cauta-firma.html" target="_blank" class="text-theme-color">Cauta Firma</a>'.
              Practic filtrati rezultatele afisarii utilizand diferite criterii:
              denumire, judet, tipuri de lucrari prestate etc.</li>
          </ol>
          <p>Daca firma/PFA cautata de dumneavoastra nu se regaseste in lista noastra,
            luati legatura cu noi folosind <a href="contact.html" target="_blank" class="text-theme-color">formularul de contact</a>
            si echipa noastra va face tot ce ii sta in putinta pentru a identifica
            si a va pune in legatura directa cu firma/PFA cautata.</p>
          <div class="border-bottom mb-3"></div>
        </div>
      </div>
      <slide-top></slide-top>
    </div>


  </section>
  <!-- end listing list section -->
</template>

<script>
// import ImagineTop from "@/components/UI/ImagineTop";
import ImageSlot from "@/components/UI/ImageSlot";

export default {
name: "CumFunctioneaza",
  components: {
  ImageSlot
  }
}
</script>

<style scoped>
p {
  font-size: 18px;
}
ol li {
  font-size: 18px;
}
@media screen and (max-width: 768px){
  p {
    font-size: 16px;
  }
  ol li {
    font-size: 16px;
  }
}
@media screen and (max-width: 600px){
  p {
    font-size: 14px;
  }
  ol li {
    font-size: 14px;
  }
}

</style>