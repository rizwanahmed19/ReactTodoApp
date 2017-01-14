import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAyCB1ATxPZJ3ksdd2ER3UlDWbVLYr4bkw",
    authDomain: "fir-test-1b5fe.firebaseapp.com",
    databaseURL: "https://fir-test-1b5fe.firebaseio.com",
    storageBucket: "fir-test-1b5fe.appspot.com",
    messagingSenderId: "898511185750"
  };
  firebase.initializeApp(config);

  const firebaseRef = firebase.database().ref();
  
  /* ----- SET DATA ----- */

  firebaseRef.set({
  	app: {
  		name: 'Todo App',
  		version: '1.0.0'
  	},
  	isRunning: true,
  	user: {
  		name: "Rizwan",
  		age: 21
  	}
  });

  /* ----- FETCH DATA ----- */

  // Will trigger only once
  // firebaseRef.once('value')
  // 	.then(snapshot => {
  // 		console.log('Got the entire database', snapshot.key, snapshot.val()); // snapshot.key is null for root
  // 	})
  // 	.catch(e => {
  // 		console.log('Error fetching data', e);
  // 	});

  	// Will keep listening for changes
  	var logData = snapshot => {
  		console.log('Got data', snapshot.val());
  	};

  	firebaseRef.on('value', logData);

  	// will turn off all the listeners on the root ref
  	firebaseRef.off('value', logData); 

  	// will turn off just the listener with the 'logData' callback
  	// firebaseRef.off(logData);



  /* ----- UPDATE DATA ----- */

  // firebaseRef.update({
  // 	'app/name': 'Todo Application',
  // 	'user/name': 'Rehan'
  // });

  // firebaseRef.child('app').update({
  // 	'name': 'Todo Application'
  // });

  /* ----- DELETE DATA ----- */

  // firebaseRef.child('user').update({
  // 	'name': 'Rehan'
  // });

  // firebaseRef.child('user/name').remove();
  
  // firebaseRef.update({
  // 	isRunning: null
  // });
