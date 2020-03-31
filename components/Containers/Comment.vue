<template>
  <div style="margin-left:20%">
    <b-row class="mb-5">
        <b-col align-self="center" sm="1">
          <div class="clickable h3" style="text-align: center;">
            <b-icon-arrow-up  v-on:click="voteUp()" variant="success"></b-icon-arrow-up>
            <br> {{comment.upvotes}} <br>
            <b-icon-arrow-down v-on:click="voteDown()" variant="danger"></b-icon-arrow-down>
          </div>
        </b-col>
        <b-col align-self="center">
          <b-card>
            <b-card-text>
              {{comment.text}}
            </b-card-text>
          </b-card>
        </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  components: {
  },
  props:{
    comment: {
      text: 'This is a test',
      upvotes: 25
    }
  },
  methods: {
    voteUp: function(){
      this.comment.upvotes++;
    },
    voteDown: function(){
      this.comment.upvotes--;
    }
  },
  mounted(){
  }

}
</script>

<style lang="scss">

</style>
