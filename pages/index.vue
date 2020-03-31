<template>
  <div class="mb-5">
    <navbar title="SpeckOverflow"/>
    <div>
      <div class="ml-5 mr-5" v-for="question in questions" v-bind:key="question.id">
        <question :showFull=false :question=question></question>
      </div>
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
      questions: []
    }
  },
  methods:{
    getQuestions: async function(){
      const res = await this.$axios.$get('https://my-json-server.typicode.com/leovolk/introduction-to-storybook/questions');
      this.questions = res;
    }
  },
  mounted(){
    this.getQuestions()
  }
}
</script>

<style>

</style>
