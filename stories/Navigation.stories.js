import Navbar from '@/components/Navigation/Navbar';
import Sidebar from '@/components/Navigation/Sidebar';

export default {
  title: 'Navigation'
}

export const TopNavigationBar = () => ({
  components: {Navbar},
  template: '<navbar title="Story Template"/>',
  name: 'TopNavigationBar'
})

export const SideNavigationBar = () => ({
  components: {Sidebar},
  template: '<sidebar/>',
  name: 'SideNavigationBar'
})
