<template>
  <div class="col-lg-12 col-md-12 col-xs-12" id="parerileClientilor">
    <div class="card blockquote bg-light border-radius-none">
      <p class="p-clienti before-clienti text-extra-medium-gray"
         v-text="text"
         :name="name"
         :id="id"
         style='max-width: 40rem'
         :footer="data"

      >
      </p>
      <ul class="d-flex justify-content-between">
        <li class="font-size12"  v-text="data"><i class="far fa-calendar-alt"></i></li>
        <li class="text-extra-medium-gray font-size12 font-italic"  v-text="name"
        >
          <i class="fas fa-user"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialsClasic",
  props: ['name', 'id', 'text', 'data'],

}
</script>

<style scoped>
.blockquote {
  background: #f1f1f1;
  border-left: 10px solid var(--clr-gr1-9);
  font-size: 16px;
  font-weight: 500;
  margin: 25px 0;
  padding: 20px 30px 30px;
}


.blockquote p {
  font-size: 15px;
  font-weight: 500;
  line-height: 190%;
  color: #232323;
  letter-spacing: .5px;
}

.blockquote h4 {
  font-size: 20px;
  font-weight: 400;
  color: #232323;
  letter-spacing: .5px;
}
.p-clienti {
  /*font-family: 'Courgette', cursive;*/
  /*font-family: 'Great Vibes', cursive;*/
  font-family: "serif";
  font-size: 16px;
  line-height: 1.2px;
  color: #000;
}
.font-size12{
  font-size: 12px;
}
@media screen and (max-width: 599px){
  .p-clienti {
    font-size: 12px;
  }
}
</style>