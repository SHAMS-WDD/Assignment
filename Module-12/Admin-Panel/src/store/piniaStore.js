import { defineStore } from 'pinia';
import router from '../router/router.js';

export const authStore = defineStore('auth', () => ({
  registeredUsers: [],
  currentUser: null,
  isLogin:false,

  registerUser(user) {
    // Check for valid email format
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(user.email)) {
      throw new Error('Invalid email format');
    }

    // Check for matching passwords
    if (user.password !== user.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    this.registeredUsers.push(user);
    router.push('/login');
  },

  loginUser(user) {
    const foundUser = this.registeredUsers.find(
      (registeredUser) =>
        registeredUser.email === user.email &&
        registeredUser.password === user.password
     );
      
    if (foundUser) {
      this.currentUser = foundUser;
      this.isLogin=true;
      router.push('/dashboard');
    } else {
      throw new Error('Invalid email or password');
    }
  },

  logoutUser() {
    this.currentUser = null;
    this.isLogin=!this.isLogin
    router.push('/login')
  },
}));
