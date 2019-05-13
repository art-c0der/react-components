import React, {Component} from 'react';

import Breadcrums from './Breadcrums';

export default class BreadcrumsPage extends Component {
  render() {
    return (
      <>
        <div className="row">
          <h2 className="row__label">General</h2>
          <div className="row__description">
            <p>
              You can modify <code>Button</code> component just adding to attributes{' '}
              <code>value, color, size, shape, type, disabled, customClassName</code> or{' '}
              <code>title</code> (to describe the contents of an item as a tooltip, that appears
              when you hover over an item.) to change these properties accordingly.
            </p>
          </div>
          <h2 className="row__label">Buttons by size</h2>
          <p className="row__description">
            You can choose <code>size</code> among <code>large</code>, <code>medium</code> (by
            default) or <code>small.</code>
          </p>
          <Breadcrums pages={['Pages', '1']} />
        </div>
      </>
    );
  }
}
