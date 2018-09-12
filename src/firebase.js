const firebase = require('firebase')
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDgfVWWQdpYGf9L7R7lAb0oM9xZWyn7WDQ",
    authDomain: "foundationstracking.firebaseapp.com",
    databaseURL: "https://foundationstracking.firebaseio.com",
    projectId: "foundationstracking",
    storageBucket: "",
    messagingSenderId: "291890413833"
};
firebase.initializeApp(config);
export default firebase