import Navbar from '@/components/Navigation/Navbar';

export default {
  title: 'Navigation',
  component: Navbar
}

export const TopNavigationBar = () => ({
  components: {Navbar},
  template: '<navbar title="Story Template"/>',
  name: 'TopNavigationBar'
})
