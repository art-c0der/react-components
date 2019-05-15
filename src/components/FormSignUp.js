import React, {Component} from 'react';
import {connect} from 'react-redux';

import {handleUsersInput, addUser, saveUserInLocalStorage} from '../actions';
import Button from './Button';
import Input from './Input';

class FormSignUp extends Component {
  render() {
    const {getUserData, addUser, closePopup} = this.props;
    return (
      <div className="popup-container">
        <form
          className="popup-form"
          onChange={getUserData}
          onSubmit={e => {
            e.preventDefault();
            addUser();
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
            label="User email"
            type="email"
            placeholder="user email"
            name="email"
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

  addUser: () => {
    dispatch(saveUserInLocalStorage());
    dispatch(addUser());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSignUp);
