import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

import Breadcrums from './Breadcrums';

export default class BreadcrumsPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Breadcrums</title>
        </Helmet>
        <div className="row">
          <h2 className="row__label">General</h2>
          <div className="row__description">
            <p>
              Use <code>Breadcrums</code> component to form breadcrums navigation elements on your
              pages.
            </p>
          </div>
          <h2 className="row__label">Breadcrums</h2>
          <p className="row__description">
            You have to set <code>pages</code> attribute, whitch is an array with element of
            one-word strings. By default, first element (index=0) of the array set to "HomePage".
            You've only need to set next elements (pages).
          </p>
          <p className="row__description">For example:</p>
          <Breadcrums pages={['Pages', 'FistPage']} />
          <Breadcrums pages={['Buttons', 'About', 'Contacts']} />
          <Breadcrums pages={['Forms']} />
        </div>
      </>
    );
  }
}
