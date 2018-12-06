import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import firebase from 'firebase'

firebase.initializeApp({
	apiKey: "AIzaSyBJogXhIMpszQkoTQp6JfDKmcSQe51X5us",
    authDomain: "admin-app-1b8d9.firebaseapp.com",
    databaseURL: "https://admin-app-1b8d9.firebaseio.com",
    projectId: "admin-app-1b8d9",
    storageBucket: "admin-app-1b8d9.appspot.com",
    messagingSenderId: "618707169782"
});

/*firebase.database().ref(`produtos`)
      .once('value')
      .then(snapshot => console.log(snapshot))
      .catch(error => console.log(error))*/

ReactDOM.render(<App/>, document.getElementById('app'))