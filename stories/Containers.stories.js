// import components
import CommentContainer from '@/components/Containers/Comment';
import QuestionContainer from '@/components/Containers/Question';

// export default story.
// title will set the name for the stories
export default {
  title: 'Container'
}
// values to store the data we will simulate for the comment props
const uncommentedQuestion = { title:'This is a storybook question', description: 'This is the description of a storybook question', upvotes: 23, categories: ['Meat', 'Sausage', 'Storybook'], comments: []};
const commentedQuestion= {title:'This is a storybook question', description: 'This is the description of a storybook question', upvotes: 30, categories: ['Meat', 'Sausage', 'Storybook'], comments: [{text: 'What is this?', upvotes: 22},{text: 'This is a test',upvotes: 25}]};
const defaultComment= {text: 'This is a test',upvotes: 25 };

// export a component story
export const QuestionNoComments = () => ({
  // set the component
  components: {QuestionContainer},
  // define the template for storybook to use
  template: `<question-container :showFull="false" :question="question" />`,
  // give it a name (not necessary)
  name: 'Question-Container-Without-Comments',
  // set props for component
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
  template: `<comment-container :comment="comment"></comment-container>`,
  name: 'Comment-Container',
  props: {
    comment: {
      default: () => defaultComment
    }
  }
})
