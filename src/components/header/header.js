import React, { Component} from 'react';
import { Button } from 'reactstrap';
import './header.scss'
import firebase from 'firebase';

class Header extends Component{
  
  constructor(){
    super();
    this.state = {
      user:null
    }

  }

  componentDidMount = () =>{
    firebase.auth().onAuthStateChanged(user =>{
      this.setState({user});
      
    });
  }
  
  handleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch((error) =>{
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // The email of the user's account used.
        // var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
      });
  }

  handleLogout = () =>{
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch((error) =>{
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
  }
  
  renderLoginButton = () =>{
    
    if(this.state.user){
      return (<div>
        
          <img src = {this.state.user.photoURL} alt= {this.state.user.displayName} />
          <p>
            prueba {this.state.user.displayName}
          </p>
          <Button onClick={this.handleLogout}> Logout </Button>
      </div>); 
    }else{
      return(
        // <button onClick={this.handleAuth}> Login con google</button>
        <Button size="sm" className="raleway-font mb-2" onClick={this.handleAuth}>
         login
        </Button>
      )
    }
  }


  render(){
    return(
      <header className="header">
        <a className="p-2 raleway-font" href="#" >STM</a>
        {this.renderLoginButton()}
      </header>
    );
  }

}

export default Header;