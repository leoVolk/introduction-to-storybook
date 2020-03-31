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
            <div style="display: inline-flex" v-for="categorie in question.categories" v-bind:key="categorie">
              <b-card-sub-title><b-badge>{{categorie}}</b-badge></b-card-sub-title>
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
    showFull: Boolean
  },
  data(){
    return{
      question: {
        title: 'This is a question',
        description: 'Bacon ipsum dolor amet strip steak swine pork venison prosciutto ham tail shoulder biltong chislic pig pork loin filet mignon pancetta. Prosciutto corned beef buffalo, beef ribs fatback shank porchetta drumstick.',
        upvotes: Number,
        categories: ['Meat', 'Sausage', 'Raw'],
        comments: [
          {text: 'Test text', upvotes: 21},
          {text: 'Test text', upvotes: 22},
          {text: 'Test text', upvotes: 23},
          {text: 'Test text', upvotes: 24}
        ]
      }
    }
  },
  methods: {
    voteUp: function(){
      this.question.upvotes++;
    },
    voteDown: function(){
      this.question.upvotes--;
    },
    init: function(){
      this.question.upvotes = Math.floor(Math.random()*100);
    }
  },
  mounted(){
    this.init();
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

.clickable{
  user-select: none;
  :hover{
    cursor:pointer;
  }
}

</style>
