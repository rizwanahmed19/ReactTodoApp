import firebase from 'firebase';

try {
	var config = {
    apiKey: "AIzaSyDY1CKql03e0wxiOc8D9pL_NE3Civ8JaUQ",
    authDomain: "my-react-todo.firebaseapp.com",
    databaseURL: "https://my-react-todo.firebaseio.com",
    storageBucket: "my-react-todo.appspot.com",
    messagingSenderId: "1022834878824"
  };
	firebase.initializeApp(config);
} catch(e){

}


export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;

// {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     databaseURL: process.env.DATABASE_URL,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID
// 	};