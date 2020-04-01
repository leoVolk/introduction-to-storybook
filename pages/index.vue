<template>
  <div class="mb-5 list">
    <div v-for="(question, index) in questions" v-bind:key="question.id">
      <nuxt-link style="text-decoration: none; color: black;" :to="{ name: 'question', params: { id: index+1 }}">
        <question :showFull=false :question=question></question>
      </nuxt-link>
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
    },
  },
  mounted(){
    this.getQuestions()
  }
}
</script>

<style lang="scss">
.list{
  margin: 0% 5% 5% 20%;
  text-decoration: none;
  color: black;
  &hover{
    text-decoration: none;
    color: black;
  }
}
</style>
