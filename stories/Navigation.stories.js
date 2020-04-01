import Navbar from '@/components/Navigation/Navbar';

export default {
  title: 'Navigation'
}

export const TopNavigationBar = () => ({
  components: {Navbar},
  template: '<navbar title="Story Template"/>',
  name: 'TopNavigationBar'
})
