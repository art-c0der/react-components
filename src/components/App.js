import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import rootRoutes from '../rootRoutes';
import Button from './Button';

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
      <Router>
        <header className="header">
          <button className="hamburger" onClick={this.toggleSidebar}>
            <div className="hamburger__box">
              <div className="hamburger__line" />
            </div>
          </button>
          <h2 className="header__title">React Components Library</h2>
          <div className="header__buttons">
            <Button value="Sing In" color="blue" shape="round" />
            <Button value="Sing Up" color="green" shape="round" />
            <Button value="Log Out" color="white" shape="round" disabled={true} title="Log Out" />
          </div>
        </header>
        <div className="container">
          <nav className="sidebar">
            <div className="sidebar__label">Components</div>
            <ul>
              <li className="nav__link">
                <Link to="/">Home Page</Link>
              </li>
              <li className="nav__link">
                <Link to="/buttons">Buttons</Link>
              </li>
              <li className="nav__link">
                <Link to="/forms">Forms elements</Link>
              </li>
              <li className="nav__link">4</li>
              <li className="nav__link">5</li>
            </ul>
          </nav>
          <main className="main" onClick={this.hideSidebar}>
            <Switch>
              {rootRoutes.map((item, index) => (
                <Route key={index} path={item.path} component={item.component} exact={item.exact} />
              ))}
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
