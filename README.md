# introduction-to-storybook

> An introduction to storybook.js with Nuxt.js and Vue.js

Storybook is a powerful frontend workshop environment tool that allows teams to design, build, and organize UI components (and even full screens!) without getting tripped up over business logic and plumbing.


The following will show you how to use storybook using Vue.js & nuxt.js.

## Storybook Setup
Depending on the framework you use, this might be different so I advise you to look up the [documentation](https://storybook.js.org/docs/basics/introduction/)

This project runs with the [Nuxt.js](https://nuxtjs.org/) framework for [Vue.js](https://vuejs.org/). 

First you will need add @storybook/vue to your project. To do that, run:

````
npm install @storybook/vue --save-dev
````

To run storybook add the following to the _``package.json``_ under ``scripts: {}``:

````
"storybook": "start-storybook -p 4040"
````

This will tell npm to start storybook on port 4040.


The _``main.js``_ is the entry point for storybook and contains the basic configuration. You probably also need to add a custom webpack configuration to the _``main.js``_.

````bash
const path = require('path');

module.exports = {
  # set stories folder
  stories: ['../stories/**/*.stories.js'],
  # add addons
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  # configure webpack
  webpackFinal: async (config, { configType }) => {
    # tell webpack to resolve @ and ~ to the root folder
    config.resolve.alias['@'] = path.dirname(path.resolve(__dirname));
    config.resolve.alias['~'] = path.dirname(path.resolve(__dirname));
    # tell webpack what loaders to use in order to get sass running
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader','sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
````

If you want to use custom CSS classes or frameworks, like [Bootstrap](https://getbootstrap.com/), you need to add a _``config.js``_ file to your _``.storybook``_ folder.
There you can import your custom CSS files and frameworks, like this: 
````bash
# import style dependencies for storybook to use
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

# import to later use vue-bootstrap html tags
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import Vue from 'vue'

# tell Vue to use bootstrap html tags
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

````

With this done, we have setup <b>storybook</b>! <b>Yay!</b>

## Creating stories
Stories give you the ability to view and test components in an isolated environment.
There are a few different ways to create stories.


You can create either one story per component, one story for all your components or stories for different types of components (e.g. you have 3 types of components and write one story containing all three components). We will stick to the letter.
For this project, I created a few components we can use to test storybook. You can find these components in the _``/components``_ folder in the root directory.

Our stories will be stored in the _`stories`_ folder. So, without further ado, let write our first story!

Lets start with creating a story for our Container components: a question component and a comment component. First - Import the components we will use:
````bash
import CommentContainer from '@/components/Containers/Comment';
import QuestionContainer from '@/components/Containers/Question';
````

Now we need to define and export a default story, so storybook knows what to do:

````bash
# title will set the name for the stories
export default {
  title: 'Container'
}
````

To fill our components with life, we need to simulate some data to give to the components properties. For this, we can just create some variables and store data in them!

````bash
const uncommentedQuestion = { 
  title:'This is a storybook question', 
  description: 'This is the description of a storybook question', 
  upvotes: 23, 
  categories: ['Meat', 'Sausage', 'Storybook'], 
  comments: []
};

const commentedQuestion= {
  title:'This is a storybook question', 
  description: 'This is the description of a storybook question', 
  upvotes: 30, 
  categories: ['Meat', 'Sausage', 'Storybook'], 
  comments: [
    {text: 'What is this?', upvotes: 22},
    {text: 'This is a test',upvotes: 25}
    ]
};

const defaultComment= {text: 'This is a test',upvotes: 25 };
````

With our data defined, we can now turn to define our story components. We will create three different stories. One for a question without comments, one for a question with and one for comment. Here is the code for the first component story:

````bash
# export a component story
export const QuestionNoComments = () => ({
  # set the component
  components: {QuestionContainer},
  # define the template for storybook to use
  template: `<question-container :showFull="false" :question="question" />`,
  # give it a name (not necessary)
  name: 'Question-Container-Without-Comments',
  # set props for component
  props: {
    question: {
      default: () => uncommentedQuestion
    }
  }
})
````

The other two follow the same structure, you can find the _``Containers.stories.js``_ file in the ``stories`` folder.

## Running Storybook

To start Storybook just run:

````bash
npm run storybook
````

This will start storybook on  http://localhost:4040/

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

