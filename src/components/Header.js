import React, {Component} from 'react';

import Button from './Button';

class Header extends Component {
  //sidebar toggling for mobiles
  toggleSidebar = e => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarButton = document.querySelector('.hamburger');
    sidebar.classList.toggle('active');
    sidebarButton.classList.toggle('active');
    e.stopPropagation();
  };

  render() {
    let {showPopupSignIn, showPopupSignUp} = this.props;
    return (
      <header className="header">
        <button className="hamburger" onClick={this.toggleSidebar}>
          <div className="hamburger__box">
            <div className="hamburger__line" />
          </div>
        </button>
        <h2 className="header__title">React Components Library</h2>
        <div className="header__buttons">
          <Button value="Sing In" color="blue" shape="round" onClick={showPopupSignIn} />
          <Button value="Sing Up" color="green" shape="round" onClick={showPopupSignUp} />
        </div>
      </header>
    );
  }
}

export default Header;
