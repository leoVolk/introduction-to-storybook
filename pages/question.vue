<template>
  <div class="mb-5">
    <div class="list">
        <question :showFull=true :question=question></question>
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
    question: {}
  },
}
</script>

<style>
.list{
  margin: 5% 5% 5% 20%;
}
</style>
