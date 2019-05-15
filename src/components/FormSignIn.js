import React, {Component} from 'react';
import {connect} from 'react-redux';

import {handleUsersInput, checkUser} from '../actions';

import Button from './Button';
import Input from './Input';

class FormSignIn extends Component {
  render() {
    const {getUserData, checkUser, closePopup, usersDatabase} = this.props;
    console.log('usersDatabase', usersDatabase);
    return (
      <div className="popup-container">
        <form
          className="popup-form popup-form--singIn"
          onChange={getUserData}
          onSubmit={e => {
            e.preventDefault();
            checkUser();
            closePopup();
          }}
        >
          <Input
            label="User name"
            type="text"
            placeholder="user name"
            name="name"
            required={true}
          />
          <Input
            label="Password"
            type="password"
            placeholder="password"
            name="password"
            required={true}
          />

          <Button value="Submit" type="submit" color="blue" />
          <Button value="Close" color="red" onClick={closePopup} />
        </form>
      </div>
    );
  }
}

/*
Redux
*/
const mapStateToProps = (state, ownProps) => ({
  // userInfo: state.userInfo,
  // usersDatabase: state.usersDatabase
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getUserData: e => dispatch(handleUsersInput(e)),

  checkUser: () => {
    dispatch(checkUser());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSignIn);
