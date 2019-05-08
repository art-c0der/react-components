import React, {Component} from 'react';

import Button from './Button';

export default class HomePage extends Component {
  render() {
    return (
      <>
        <div className="row">
          <h2 className="row__label">General</h2>
          <div className="row__description">
            <p>
              You can modify <code>Button</code> component just adding to props{' '}
              <code>value, color</code> or <code>size</code> to change these properties accordingly.
            </p>
            <p>
              Also you can change <code>disabled</code> attribute to <code>true</code> for disabling
              a button.
            </p>
          </div>
          <h2 className="row__label">Buttons by size</h2>
          <p className="row__description">
            You can choose <code>size</code> among <code>large</code>, <code>medium</code> (by
            default) or <code>small.</code>
          </p>
          <Button value="My large button" color="green" size="large" />
          <Button value="My standart button" color="green" />
          <Button value="My small button" color="green" size="small" />
        </div>
        <div className="row">
          <h2 className="row__label">Buttons by color</h2>
          <p className="row__description">
            By default you can choose <code>color</code> among{' '}
            <code>blue, green, grey, red, white</code> or <code>yellow</code>.
          </p>
          <Button value="Blue" color="blue" />
          <Button value="Green" color="green" />
          <Button value="Grey" color="grey" />
          <Button value="Red" color="red" />
          <Button value="Yellow" color="yellow" />
          <Button value="Disabled" color="red" disabled={true} />
        </div>
      </>
    );
  }
}
