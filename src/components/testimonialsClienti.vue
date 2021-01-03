<template>
  <b-col>
    <b-card
        :title="name"
        img-src='https://images.unsplash.com/photo-1601758176481-e81a6b713126?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        img-top
        :id="id"
        style='max-width: 20rem'
        class='mb-2'
        :footer="data"
        :data="data"
    >
      <b-card-text v-text="text"></b-card-text>
      <b-button variant="primary">test</b-button>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "testimonialsClienti",
  props: ['name', 'id', 'text', 'data'],


}
</script>

<style scoped>

</style>