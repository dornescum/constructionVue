<template>
  <div>
    <a @click="scrollTop" v-show="visible" class="bottom-right"><i class="fas fa-chevron-circle-up"></i></a>

  </div>
</template>

<script>
export default {
  name: "slideTop",
  data () {
    return {
      visible: false
    }
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 150)
      }, 100)
    },
    scrollListener: function () {
      this.visible = window.scrollY > 50
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style>
.bottom-right {
  position: fixed;
  bottom: 70px;
  left: 30px;
  cursor: pointer;
  /*background-color: var(--clr-grey-1);*/
  color: var(--clr-black);
  /*font-size: 1rem;*/
  border-radius: 50%;
  height: 32px;
  width: 32px;
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
}
/*.btn {*/
/*  border-radius: 8px;*/
/*  background-color: rgba(0, 0, 0, 0.95);*/
/*  padding-top: 27px;*/
/*  padding-left: 10px;*/
/*  padding-right: 10px;*/
/*  padding-bottom: 5px;*/

/*}*/
</style>