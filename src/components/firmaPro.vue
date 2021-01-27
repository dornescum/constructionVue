<template>
<div class="container">
  <div class="row">
    <div class="col-12">
      <!-- 1 firma  cu border radius-->
      <div class="border-bottom padding-40px-bottom xs-padding-30px-bottom shadow-lg p-3 mb-5 bg-white border-radius-10">
        <div class="card card-list border-0">
          <div class="row align-items-center">

            <!-- poza stanga  -->
            <div class="col-md-5 col-lg-4 xs-margin-20px-bottom">
              <div class="card-list-img">
                <a href="firma-pro.html">
                  <!--todo cum ai facut asta cursor pointer, ca nu am gasit clasa imgbox-->
                  <img class="border-radius-5 imgbox" src="../assets/img/logo.png" alt="Big Logo" />
                </a>
              </div>
            </div>

            <!-- continut dreapta  -->
            <div class="col-md-7 col-lg-8">
              <div class="card-body no-padding-tb">
                <div class="star">&nbsp;</div>
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="card-title no-margin-bottom font-size22">
                    <a href="firma-pro.html" class="text-extra-dark-gray">
                      <strong>NIidwdw GGG SRL</strong>
                    </a>
                  </h5>
                  <ul class="no-margin-bottom">
                    <li>
                      <a href="#" class="green-color">
                        <i class="fa fa-user-secret margin-5px-right sma"></i> PRO Member
                      </a>
                    </li>
                  </ul>
                </div>
                <p class="margin-20px-tb sm-margin-10px-top gri-font font-size16">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur cumque debitis distinctio est illum in iure maiores minima mollitia, quaerat rem repellat. Ab commodi culpa deserunt distinctio dolore doloremque dolorum earum expedita fuga incidunt laboriosam libero magnam minima minus obcaecati odit pariatur perspiciatis placeat quo, repellat sapiente tempora temporibus totam ullam voluptas? Alias commodi consequatur facilis in ipsam minima nesciunt nobis quidem vero voluptates? Amet doloribus ducimus, eligendi enim maxime nemo odio provident quam, saepe tempora ullam ut veniam!
                </p>

                <div class="row justify-content-between">


                  <!--varianta butoane-->
                  <!--test-->
                  <button class="butn text-lowercase mobile1"><i class="fa fa-phone padding-5px-all"></i> vezi numarul de telefon</button>

                  <button class="butn text-lowercase mobile1"><i class="fa fa-envelope padding-5px-all"></i> vezi adresa de email</button>


                </div>


              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
name: "firmaPro"
}
</script>

<style scoped>
.border-radius-10 {
  border-radius: 10px;
}
a {color: var(--clr-black)}
.text-extra-dark-gray{
  font-size: 22px;
  color: #232323;
  font-family: 'Josefin Sans', sans-serif;
  text-decoration: none;
}
.green-color {
  color: var(--clr-green-light);
}
ul {
  list-style-type: none;
}
@media screen and (max-width: 599px){
  ul li a {
    font-size: 14px;
  }
  strong {
    font-size: 14px;
  }
  .mobile1 {
    display: block;
    width: 100%;
    font-size: 14px;
  }
}
</style>