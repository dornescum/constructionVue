<template>
  <!-- start listing list section -->
  <section>
<!--    <ImagineTop></ImagineTop>-->
    <image-slot>
    </image-slot>
    <div class="container pt-3">

      <div class="row margin-50px-bottom">
        <div class="col-md-6 center-col">

          <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem sit voluptatem! Commodi doloremque eveniet harum laboriosam officiis sapiente soluta!
          </p>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis delectus dolorem, dolorum fugit ipsa itaque laudantium modi placeat provident quam rem repellendus sed vero voluptate? Ab aspernatur exercitationem itaque.
          </p>





        </div>
        <div class="col-md-6 xs-margin-20px-bottom">
          <div class="card-list-img">
            <a href="index.html">
              <img class="border-radius-5 img-fluid pt-2" src="../assets/img/logo.png" alt="Big Logo" />
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
              <img class="border-radius-5 img-fluid pt-2 mb-1" src="../assets/img/logo.png" alt="Big Logo" />
            </a>
          </div>
        </div>
        <div class="col-md-6">

          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta distinctio id ipsa natus nesciunt quibusdam recusandae sunt tempora tenetur.
          </p>
          <p class="font-size16 font-italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet beatae consequatur cumque distinctio doloremque doloribus dolorum fugit harum ipsa laboriosam magni maxime nemo, provident, quam ratione tempora velit! Id.
          </p>

        </div>
      </div>
    </div>
    <slide-top></slide-top>

  </section>
  <!-- end listing list section -->
</template>

<script>
// import ImagineTop from "@/components/UI/ImagineTop";
import ImageSlot from "@/components/UI/ImageSlot";
export default {
name: "DespreNoi",
  components: {
  // ImagineTop
    ImageSlot
  },
  data(){
    return {
      title: 'despre noi'
    }
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