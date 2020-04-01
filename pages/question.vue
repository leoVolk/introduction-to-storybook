<template>
  <div class="mb-5">
    <div class="list">
      <question :question="question" :showFull="true"></question>
    </div>
  </div>
</template>

<script>
import Question from '@/components/Containers/Question.vue';
export default {
  components: {
    Question
  },
  props:{
  },
  data(){
    return{
      question: {}
    }
  },
  mounted(){
    this.getQuestion();
  },
  methods:{
    getQuestion: async function(){
      const res = await this.$axios.$get('https://my-json-server.typicode.com/leovolk/introduction-to-storybook/questions/'+this.$route.params.id);
      console.log(res);
      this.question = res;
    }
  }
}
</script>

<style lang="scss">

.list{
  margin: 5% 5% 5% 20%;

}
</style>
