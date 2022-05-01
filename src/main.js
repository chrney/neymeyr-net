import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPjFLDCVeMlIDIZ2f5pUrbWW8HlxAs_g4",
  authDomain: "neymeyr-net.firebaseapp.com",
  projectId: "neymeyr-net",
  storageBucket: "neymeyr-net.appspot.com",
  messagingSenderId: "891061988249",
  appId: "1:891061988249:web:1db3d3376b8653e5030108"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app)
new Vue({
  render: h => h(App),
}).$mount('#app')
