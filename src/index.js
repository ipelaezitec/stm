import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';// https://reactstrap.github.io/components/buttons/
import firebase from 'firebase';


{/* <script src="https://www.gstatic.com/firebasejs/5.5.5/firebase.js"></script>
<script> */}
  // Initialize Firebase
  firebase.initializeApp({
  apiKey: "AIzaSyDM7vjatm8wGm30ANU3Nfu9AeY3gGCJ0Ic",
  authDomain: "simple-tm.firebaseapp.com",
  databaseURL: "https://simple-tm.firebaseio.com",
  projectId: "simple-tm",
  storageBucket: "simple-tm.appspot.com",
  messagingSenderId: "812168183524" 
  });
  
// </script>



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
