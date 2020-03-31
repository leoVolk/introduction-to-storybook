<template>
  <div class="mb-5 ml-5 mr-5">
    <div v-if="!selectedQuestion">
      <div v-on:click="selectedQuestion=question" v-for="question in questions" v-bind:key="question.id">
        <question :showFull=false :question=question></question>
      </div>
    </div>
    <div v-else>
      <div class="clickable mt-5" v-on:click="selectedQuestion = null"><b-icon-arrow-left class="h2"></b-icon-arrow-left></div>
      <question :showFull=true :question=selectedQuestion></question>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar.vue';
import Question from '@/components/Containers/Question.vue';
export default {
  components: {
    Navbar,
    Question
  },
  data(){
    return {
      questions: [],
      selectedQuestion: null
    }
  },
  methods:{
    getQuestions: async function(){
      const res = await this.$axios.$get('https://my-json-server.typicode.com/leovolk/introduction-to-storybook/questions');
      this.questions = res;
    },
  },
  mounted(){
    this.getQuestions()
  }
}
</script>

<style>
.list{
  margin: 5% 5% 5% 20%;
}
</style>
