import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './Main';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import './App.css';
import Routes from './Routes'
import { connect } from 'react-redux'
import firebase from './firebase.js'
/*
Common problems that this will fix:
Students
  - Don't know the flow execution. They think the computer jumps back to look variables up
  - Fail to understand that a program is interpreted top to bottom
  - Don't understand the link between arguments and parameters in function calls
  - Conflate a variable with the object or function it refers to
  - Don't understand that local variables ceases to exist when a function returns
  - Think console.log and return are similar
  - Don't understand the memory model of the computer
  - Fail to grasp the link between dot notation and object references
*/

class App extends Component {
    constructor() {
        super();
        this.state = { buttonClicked: false }

    }
    login = () => {
        this.setState({buttonClicked: true})
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    render() {
        if (this.state.buttonClicked && !this.props.uid) {
            return (<div>A popup should have appeared inviting you to login with google. Make sure you've enabled popups on the top right corner. See https://support.google.com/chrome/answer/95472?co=GENIE.Platform%3DDesktop&hl=en for more information</div>)
        }
        if (!this.state.buttonClicked) {
            return (<button onClick={this.login}> log in </button>)

        }
        if (this.props.uid) return Routes
    }
}

let mapStateToProps = s => ({
    uid: s.uid
})

let ConnectedApp = connect(mapStateToProps)(App)


export default ConnectedApp