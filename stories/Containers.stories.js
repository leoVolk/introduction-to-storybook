// import components
import CommentContainer from '@/components/Containers/Comment'
import QuestionContainer from '@/components/Containers/Question';

// export default story.
// title will set the name for the stories
export default {
  title: 'Container'
}
// values to store into our
const uncommentedQuestion = { title:'This is a storybook question', description: 'This is the description of a storybook question', upvotes: 23, categories: ['Meat', 'Sausage', 'Storybook'], comments: []};
const commentedQuestion= {title:'This is a storybook question', description: 'This is the description of a storybook question', upvotes: 30, categories: ['Meat', 'Sausage', 'Storybook'], comments: [{text: 'What is this?', upvotes: 22},{text: 'This is a test',upvotes: 25}]};

export const QuestionNoComments = () => ({
  components: {QuestionContainer},
  template: `<question-container :showFull="false" :question="question" />`,
  name: 'Question-Container-Without-Comments',
  props: {
    question: {
      default: () => uncommentedQuestion
    }
  }
})

export const QuestionComments = () => ({
  components: {QuestionContainer},
  template: `<question-container :question="question" :showFull="true"/>`,
  name: 'Question-Container-With-Comments',
  props: {
    question: {
      default: () => commentedQuestion
    }
  }
})

export const Comment = () => ({
  components: {CommentContainer},
  template: `<comment-container :comment=" {text: 'This is a test',upvotes: 25 }"></comment-container>`,
  name: 'Comment-Container'
})
