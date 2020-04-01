<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">{{title}} <img src="https://image.flaticon.com/icons/svg/2755/2755189.svg" width="24px" height="24px"> </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  </b-navbar>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    title: String
  },
  data(){
    return{
      languages: ['DE', 'ENG', 'RU', 'FR']
    }
  }
}
</script>

<style>
</style>
