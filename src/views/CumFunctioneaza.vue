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
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium ad amet architecto consequuntur cupiditate dolore doloribus eaque eius esse fugit illo in inventore iste laboriosam laborum libero magnam, mollitia nemo, non obcaecati officiis optio quam temporibus, ullam ut vel veniam? Est expedita facere ipsa laboriosam non obcaecati provident voluptas.
          </p>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ex illum laboriosam, laudantium libero, nesciunt optio perferendis placeat quo saepe sapiente voluptatum? Animi at cum ipsam laboriosam minima tempora voluptate?
          </p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias at deserunt, eum facilis hic iste molestias optio porro quisquam quos repellat saepe similique soluta sunt totam! Aliquam assumenda impedit ipsam laboriosam odit, perspiciatis sunt? A adipisci, aut commodi cum doloremque eligendi eos facere illo iste itaque magnam maiores minus molestiae molestias nemo nesciunt officiis perferendis perspiciatis praesentium quasi quo quod ratione reprehenderit repudiandae sit ullam velit, veniam! Accusamus architecto assumenda, blanditiis consectetur deleniti deserunt dicta doloribus ea earum esse et eveniet illo illum itaque laboriosam maiores molestias nostrum officiis quas quos rem repellendus suscipit tenetur unde voluptatem voluptates.</p>
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