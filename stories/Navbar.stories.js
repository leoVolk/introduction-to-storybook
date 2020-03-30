import Navbar from '@/components/Navigation/Navbar';

export default {
  title: 'NavBar',
  component: Navbar
}

export const TopNavigationBar = () => ({
  components: {Navbar},
  template: '<navbar/>',
  name: 'TopNavigationBar'
})
