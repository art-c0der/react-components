import React, {Component} from 'react';
import {Provider} from 'react-redux';

import store from '../redux/store';
import Header from './Header';
import AppContainer from './AppContainer';
import FormSignUp from './FormSignUp';
import FormSignIn from './FormSignIn';

import './App.css';

class App extends Component {
  state = {
    popupSignInStatus: false,
    popupSignUpStatus: false,
    welcomePageStatus: true
  };

  //interact with user
  showPopupSignIn = () => {
    this.setState({
      popupSignInStatus: true,
      welcomePageStatus: false
    });
  };

  showPopupSignUp = () => {
    this.setState({
      popupSignUpStatus: true,
      welcomePageStatus: false
    });
  };

  closePopup = () => {
    this.setState({
      popupSignInStatus: false,
      popupSignUpStatus: false,
      welcomePageStatus: true
    });
  };

  render() {
    const {popupSignInStatus, popupSignUpStatus, welcomePageStatus} = this.state;

    return (
      <Provider store={store}>
        <Header showPopupSignIn={this.showPopupSignIn} showPopupSignUp={this.showPopupSignUp} />
        <div className="container">
          {welcomePageStatus && <AppContainer />}
          {popupSignInStatus && <FormSignIn closePopup={this.closePopup} />}
          {popupSignUpStatus && <FormSignUp closePopup={this.closePopup} />}
        </div>
      </Provider>
    );
  }
}

export default App;
