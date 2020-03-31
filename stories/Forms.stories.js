import LoginForm from '@/components/Forms/Login';
import RegisterForm from '@/components/Forms/Register';

export default{
  title: 'Forms',
  component: LoginForm, RegisterForm
}

export const Login = () => ({
  components: {LoginForm},
  template: '<login-form/>',
  name: 'Login Form'
})

export const Register = () => ({
  components: {RegisterForm},
  template: '<register-form/>',
  name: 'Register Form'
})
