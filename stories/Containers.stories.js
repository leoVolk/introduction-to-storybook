import QuestionContainer from '@/components/Containers/Question';

export default {
  title: 'Container',
  component: QuestionContainer
}


export const Question = () => ({
  components: {QuestionContainer},
  template: '<question-container :showFull="true"></question-container>',
  name: 'Question-Container'
})
