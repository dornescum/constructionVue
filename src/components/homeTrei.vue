<template>
  <section>
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-md-4 xs-margin-30px-bottom mb-1 card-3">-->
<!--          <div class="text-center bg-white border padding-20px-lr padding-40px-tb border-radius-4 h-100">-->
<!--            <span class="text-theme-color m-5"><i class="fas fa-users"></i></span>-->
<!--            <h3 class="font-size20 margin-20px-bottom sm-margin-10px-bottom mt-1">-->
<!--              <a href="#" class="gri-background">   Cunoaste echipa </a>-->
<!--             </h3>-->
<!--            <p class="center-col xs-width-95 no-margin-bottom m-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry-->
<!--              <a href="#">...</a>  </p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-4 xs-margin-30px-bottom mb-1">-->
<!--          <div class="text-center bg-white border padding-20px-lr padding-40px-tb border-radius-4 h-100">-->
<!--            <span class="margin-20px-bottom font-size40 text-theme-color display-inline-block"><i class="fas fa-map-marker-alt"></i></span>-->
<!--            <h3 class="font-size20 margin-20px-bottom sm-margin-10px-bottom mt-1">-->
<!--              <a href="#" class="gri-background">Localizare teren </a>-->
<!--              </h3>-->
<!--            <p class="center-col xs-width-95 no-margin-bottom">It is a long established fact that a reader will be distracted by the readable content of a page  <a href="#">...</a> </p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-4">-->
<!--          <div class="text-center bg-white border padding-20px-lr padding-40px-tb border-radius-4 h-100 mb-1">-->
<!--            <span class="margin-20px-bottom font-size40 text-theme-color display-inline-block"><i class="fas fa-search"></i></span>-->
<!--            <h3 class="font-size20 margin-20px-bottom sm-margin-10px-bottom mt-1">-->
<!--              <a href="#" class="gri-background">-->
<!--                Cauta firma-->
<!--              </a>-->
<!--              </h3>-->
<!--            <p class="center-col xs-width-95 no-margin-bottom">There are many variations of passages of Lorem Ipsum available, but the majority have suffered  <a href="#">...</a> </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </section>
</template>

<script>
export default {
name: "homeTrei"
}
</script>

<style scoped>
a {
  color: black;
}
.gri-background{
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 0 15px;
}
.border-radius-4 {
  border-radius: 10px;
}
.card-3 {
  border-radius: 10px;
  background: #fff;
  /*box-shadow: 0 6px 10px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .05);*/
  box-shadow: var(--light-shadow);
  transition: all 0.3s linear;
  padding: 14px 24px;
  cursor: pointer;
  height: 320px;
  text-align: center;
  align-content: center;
  justify-content: center;
  margin: 10px 0;
}

.card-3:hover {
  transform: scale(1.01);
  /*box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06);*/
  box-shadow: var(--dark-shadow);
}
</style>