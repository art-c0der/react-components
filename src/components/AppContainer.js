import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import rootRoutes from '../rootRoutes';

class AppContainer extends Component {
  //hide sidebar for mobiles
  hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarButton = document.querySelector('.hamburger');
    sidebar.classList.remove('active');
    sidebarButton.classList.remove('active');
  };

  render() {
    const {authorized} = this.props;

    console.log('autorized', authorized);
    return (
      <>
        {authorized ? (
          <Router>
            <nav className="sidebar">
              <div className="sidebar__label">Components</div>
              <ul>
                <li className="nav__link">
                  <Link to="/">Home Page</Link>
                </li>
                <li className="nav__link">
                  <Link to="/breadcrums">Breadcrums</Link>
                </li>
                <li className="nav__link">
                  <Link to="/buttons">Buttons</Link>
                </li>
                <li className="nav__link">
                  <Link to="/forms">Forms elements</Link>
                </li>
              </ul>
            </nav>
            <main className="main" onClick={this.hideSidebar}>
              <Switch>
                {rootRoutes.map((item, index) => (
                  <Route
                    key={index}
                    path={item.path}
                    component={item.component}
                    exact={item.exact}
                  />
                ))}
              </Switch>
            </main>
          </Router>
        ) : (
          <h1 className="container__title">
            Please, Sign In or Sign Up to get an access to the library
          </h1>
        )}
      </>
    );
  }
}

/*
Redux
*/

const mapStateToProps = (state, ownProps) => ({
  authorized: state.users.authorized
});

export default connect(
  mapStateToProps,
  null
)(AppContainer);
