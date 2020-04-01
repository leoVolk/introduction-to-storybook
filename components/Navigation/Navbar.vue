<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">{{title}}</b-navbar-brand>

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
