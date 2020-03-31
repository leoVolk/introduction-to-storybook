<template>
  <div class="mt-4">
    <b-container fluid>
      <b-row>
        <b-col align-self="center" sm="1">
          <div class="clickable h3" style="text-align: center;">
            <b-icon-arrow-up  v-on:click="voteUp()" variant="success"></b-icon-arrow-up>
            <br> {{question.upvotes}} <br>
            <b-icon-arrow-down v-on:click="voteDown()" variant="danger"></b-icon-arrow-down>
          </div>
        </b-col>
        <b-col>
          <b-card v-bind:title="question.title">
            <hr>
            <div style="display: inline-flex" v-for="categorie in question.categories" v-bind:key="categorie">
              <b-card-sub-title class="mb-3 mr-2"><b-badge>{{categorie}}</b-badge></b-card-sub-title>
            </div>
            <b-card-text>
              {{question.description}}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row v-if="showFull">
        <b-col><hr></b-col>
      </b-row>
      <div v-if="showFull">
        <div v-for="comment in question.comments" v-bind:key="comment.upvotes">
          <comment v-bind:comment="comment"></comment>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import Comment from './Comment'
export default {
  components: {
    Comment
  },
  props:{
    showFull: Boolean,
    index: Number,
    question: {}
  },
  methods: {
    voteUp: function(){
      this.question.upvotes++;
    },
    voteDown: function(){
      this.question.upvotes--;
    }
  },
  mounted(){
    // this.getComment();
    // this.question.upvotes =  this.randomUpvotes();
  }
}
</script>

<style lang="scss">

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}



</style>
