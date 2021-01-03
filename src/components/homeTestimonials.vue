<template>
  <section>
    <h2>Testimonials</h2>
    <div class="container testimonials">
      <div class="row border-top-2">
        <div class="col-md-4 testimonial">
          <div class="row">
            <div class="avatar col-md-5">
              <a href="#">
                <img class="img-circle" src="https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Taylor Otwell">
              </a>
            </div>

            <div class="testimonial-main col-md-7">
              <h4 class="media-heading"><a href="#m">Owenl Ollyt</a></h4>
              <p class="testimony-body">bootstrap rules!</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 testimonial">
          <div class="row">
            <div class="avatar col-md-5">
              <a href="#">
                <img class="img-circle" src="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Taylor Otwell">
              </a>
            </div>

            <div class="testimonial-main col-md-7">
              <h4 class="media-heading"><a href="#">Darla Marty</a></h4>
              <p class="testimony-body">Bootdey rules!</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 testimonial">
          <div class="row">
            <div class="avatar col-md-5">
              <a href="#">
                <img class="img-circle" src="https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Taylor Otwell">
              </a>
            </div>

            <div class="testimonial-main col-md-7">
              <h4 class="media-heading"><a href="#">Maryou Mcjouin</a></h4>
              <p class="testimony-body">Ok man!</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
export default {
  name: "homeTestimonials"
}
</script>

<style scoped>

body{
  background: #F9F9F9;
}
.testimonials {
  margin-top: 40px;
}
.testimonial {
  margin-bottom: 3em;
  background: #fff;
  padding: 2em;
  border-right: 30px solid #F9F9F9;
  min-height: 169px;
}

.testimonial:before {
  content: "";
  position: absolute;
  z-index: -1;
  -ms-transform: skew(-3deg,-2deg);
  -webkit-transform: skew(-3deg,-2deg);
  -o-transform: skew(-3deg,-2deg);
  -moz-transform: skew(-3deg,-2deg);
  bottom: 14px;
  box-shadow: 0 16px 5px rgba(0,0,0,.04);
  max-width: 90%;
  width: 90%;
  height: 50px;
  left: 1px;
}

.avatar .img-circle {
  background: #fff;
  padding: 3px;
  border: 1px solid #c5c5c5;
}

.avatar img {
  max-width: 100%;
  height: 110px;
}

.img-circle {
  border-radius: 50%;
}

.testimonial h4, .testimonial h4 a {
  font-weight: 700;
}

.testimonial h4 {
  margin-bottom: 8px;
}

.testimonial .testimony-body {
  font-size: .9em;
}
.border-top-2{
  border-top: 2px solid #ccc;
  padding: 15px 0;
}
</style>