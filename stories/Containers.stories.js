import CommentContainer from '@/components/Containers/Comment'
import QuestionContainer from '@/components/Containers/Question';

export default {
  title: 'Container',
  component: QuestionContainer, CommentContainer
}


export const QuestionNoComments = () => ({
  components: {QuestionContainer},
  template: `<question-container :showFull="false" :question="{ title:'This is a storybook question', description: 'This is the description of a storybook question', upvotes: 23, categories: ['Meat', 'Sausage', 'Storybook'], comments: []}" />`,
  name: 'Question-Container-Without-Comments'
})

export const QuestionComments = () => ({
  components: {QuestionContainer},
  template: `<question-container :question="{title:'This is a storybook question', description: 'This is the description of a storybook question', upvotes: 30, categories: ['Meat', 'Sausage', 'Storybook'], comments: [{text: 'This is a test', upvotes: 22},{text: 'This is a test',upvotes: 25}]}" :showFull="true"/>`,
  name: 'Question-Container-With-Comments'
})

export const Comment = () => ({
  components: {CommentContainer},
  template: `<comment-container :comment=" {text: 'This is a test',upvotes: 25 }"></comment-container>`,
  name: 'Comment-Container'
})
