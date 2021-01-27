<template>

  <div class="container">
  <div class="border-bottom margin-20px-bottom padding-20px-bottom xs-padding-20px-bottom">
    <div class="card card-list border-0 p-1">
      <div class="row align-items-center">
        <div class="col-md-5 col-lg-4 xs-margin-10px-bottom">
          <div class="card-list-img">
            <a href="firma-standard.html">
              <img class="border-radius-5 cursor-pointer" src="../assets/img/logo.png" alt="" />
            </a>
          </div>
        </div>
        <div class="col-md-7 col-lg-8">
          <div class="card-body no-padding-tb">

            <div class="d-flex justify-content-between align-items-center">
              <h5 class="card-title no-margin-bottom font-size18">
                <a href="firma-standard.html" class="text-extra-medium-gray">GHghghg
                  GFH PFA
                </a>
              </h5>
              <ul class="no-margin-bottom">
                <li style="font-size: .9em">
                  <a href="#" class="blue-color font-size14 text-theme-color">
                    <i class="fa fa-user-alt margin-5px-right text-theme-color"></i> Standard Member
                  </a>
                </li>
              </ul>
            </div>
            <!--todo varianta temporara cu font mai mic-->
            <p class="margin-10px-tb sm-margin-10px-top line-height-20 font-size16 gri-font">
              It uses a dictionary of over 200 Latin words,
              combined with a handful of model sentence structures,
              to generate Lorem Ipsum which looks reasonable.
            </p>
            <div class="row justify-content-end">
              <button class="butn text-lowercase">
                <i class="fa fa-envelope"></i> vezi date de contact
              </button>
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
name: "firmaStandard"
}
</script>

<style scoped>
a {
  color: var(--clr-black);
  text-decoration: none;
}
.text-extra-dark-gray{
  font-size: 22px;
  color: #232323;
  font-family: 'Josefin Sans', sans-serif;
  text-decoration: none;
}

ul {
  list-style-type: none;
}
</style>