<template>
  <footer>
    <div class="footer-area padding-90px-tb md-padding-70px-tb sm-padding-50px-tb mt-2">

      <b-container class="bv-example-row">
        <b-row>
          <b-col lg="4" sm="12" align="start">
            <ul class="p-2">
              <li><router-link to="/"><i class="fa fa-book text-theme-color"></i> Harta Judate</router-link></li>
              <li><router-link to="/Localizare"><i class="fa fa-book text-theme-color"></i> Ce este cadastrul</router-link></li>
              <li><router-link to="/OficiuBirouriCadastru"><i class="fa fa-book text-theme-color"></i> Oficiou birouri cadastru</router-link></li>
              <li><router-link to="/Localizare"><i class="fa fa-book text-theme-color"></i> Localizare</router-link></li>
              <li><router-link to="/ParerileClientilor"><i class="fa fa-book text-theme-color"></i> Parerile Clientilor</router-link></li>
            </ul>
          </b-col>
          <b-col lg="4" sm="12" align="start">
            <ul class="p-2">
              <li><router-link to="/InscriereFirme"><i class="fa fa-book text-theme-color"></i> Inscriere Firma</router-link></li>
              <li><router-link to="/CautaFirma"><i class="fa fa-book text-theme-color"></i> Cauta firma</router-link></li>
              <li><router-link to="/ParerileClientilor"><i class="fa fa-book text-theme-color"></i> Termeni si conditii </router-link></li>
              <li><router-link to="/ParerileClientilor"><i class="fa fa-book text-theme-color"></i> Politica de confidentialitate</router-link></li>
              <li><router-link to="/ParerileClientilor"><i class="fa fa-book text-theme-color"></i> Politica de cookies</router-link></li>
            </ul>
          </b-col>
          <b-col lg="4" sm="12" align="start">
            <ul class="p-2">
              <li><router-link to="/Localizare"><i class="fa fa-book text-theme-color"></i> ANCPI</router-link></li>
              <li><router-link to="/Localizare"><i class="fa fa-book text-theme-color"></i> Geoportal ANCPI (Harta)</router-link></li>
              <li><router-link to="/Localizare"><i class="fa fa-book text-theme-color"></i> Extras carte funciara online</router-link></li>
              <li><router-link to="/Localizare"><i class="fa fa-book text-theme-color"></i> Topo-Online</router-link></li>
              <li><router-link to="/Localizare"><i class="fa fa-book text-theme-color"></i>  Statii Permanente GPS</router-link></li>
            </ul>
          </b-col>
        </b-row>
      </b-container>


    </div>

    <div class="footer-bar xs-padding-15px-tb">
      <div class="container">

        <div class="float-left xs-width-100 text-center">
          <p class="text-medium-gray font-weight-600 margin-5px-top xs-no-margin-top">&copy; 2020 Finder
            is Powered by Chitrakoot Web</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      links: []
    }
  }
}
</script>

<style scoped>

footer {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  font-size: 15px;
}

footer p {
  margin-bottom: 0;
}

footer h3 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 30px;
  line-height: 1;
  position: relative;
}

footer h3:after {
  content: '';
  display: block;
  width: 36px;
  height: 3px;
  background: #2196f3;
  margin-top: 12px;
}

.footer-bar {
  float: left;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #232323;
  color: #fff;
}

.footer-bar span {
  color: #2196f3;
  font-size: 15px;
  font-weight: 400;
}

@media screen and (max-width: 767px) {
  .footer-bar p {
    font-size: 12px;
  }

  footer .list-style-1 li {
    padding: 0 0 5px 0;
  }

  footer .list-style-1 li:last-child {
    padding: 0;
  }
  footer  ul li a {
    font-size: 12px;
  }
}

ul {
  list-style-type: none;
}
a {
  color: #6f6f6f;
  font-size: 15px;
  margin: 5px 0;
  line-height: 2.2;
  letter-spacing: 1.5px;
  font-family: 'Open sans', sans-serif;
}
.text-theme-color {
  color: #2196f3;
}

</style>