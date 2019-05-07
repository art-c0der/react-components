import React, {Component} from 'react';

import './App.css';

class App extends Component {
  toggleSidebar = e => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarButton = document.querySelector('.hamburger');
    sidebar.classList.toggle('active');
    sidebarButton.classList.toggle('active');
    e.stopPropagation();
  };

  hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarButton = document.querySelector('.hamburger');
    sidebar.classList.remove('active');
    sidebarButton.classList.remove('active');
  };

  render() {
    return (
      <>
        <header className="header">
          <button className="hamburger" onClick={this.toggleSidebar}>
            <div className="hamburger__box">
              <div className="hamburger__line" />
            </div>
          </button>
          <h2 className="header__title">React Components Library</h2>
          <div className="header__buttons">
            <button className="button button--blue">Sing In</button>
            <button className="button button--white">Sing Up</button>
            <button className="button button--red">Log Out</button>
          </div>
        </header>
        <nav className="sidebar">
          <div className="sidebar__label">Components</div>
          <ul>
            <li className="nav__link">Buttons</li>
            <li className="nav__link">Forms elements</li>
            <li className="nav__link">3</li>
            <li className="nav__link">4</li>
            <li className="nav__link">5</li>
          </ul>
        </nav>
        <main className="main" onClick={this.hideSidebar} />
      </>
    );
  }
}

export default App;
