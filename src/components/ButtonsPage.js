import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

import Button from './Button';

export default class ButtonsPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Buttons</title>
        </Helmet>
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
          <Button value="My large button" color="green" size="large" />
          <Button value="My standart button" color="green" />
          <Button value="My small button" color="green" size="small" />
        </div>
        <div className="row">
          <h2 className="row__label">Buttons color</h2>
          <p className="row__description">
            By default you can choose <code>color</code> among{' '}
            <code>blue, green, red, orange, yellow, etc.</code>
          </p>
          <Button value="Blue" color="blue" />
          <Button value="Green" color="green" />
          <Button value="Red" color="red" />
          <Button value="Orange" color="orange" />
          <Button value="Yellow" color="yellow" />
          <Button value="Grey" color="grey" />
          <Button value="Indigo" color="indigo" />
          <Button value="Pink" color="pink" />
          <Button value="Teal" color="teal" />
          <Button value="Cyan" color="cyan" />
          <Button value="Black" color="black" />
        </div>
        <div className="row">
          <h2 className="row__label">Shape of the buttons</h2>
          <p className="row__description">
            You can choose among <code>square, rounded</code>(default) or <code>round</code> shapes
            of buttons, useing <code>shape</code> attribute.
          </p>
          <Button value="Blue" color="blue" shape="square" />
          <Button value="Green" color="green" shape="square" />
          <Button value="Red" color="red" shape="square" />
          <Button value="Orange" color="orange" shape="square" />
          <Button value="Yellow" color="yellow" shape="square" />
          <Button value="Grey" color="grey" shape="square" />
          <Button value="Indigo" color="indigo" shape="square" />
          <Button value="Pink" color="pink" shape="square" />
          <Button value="Teal" color="teal" shape="square" />
          <Button value="Cyan" color="cyan" shape="square" />
          <Button value="Black" color="black" shape="square" />
          <div className="line-hr" />
          <Button value="Blue" color="blue" shape="round" />
          <Button value="Green" color="green" shape="round" />
          <Button value="Red" color="red" shape="round" />
          <Button value="Orange" color="orange" shape="round" />
          <Button value="Yellow" color="yellow" shape="round" />
          <Button value="Grey" color="grey" shape="round" />
          <Button value="Indigo" color="indigo" shape="round" />
          <Button value="Pink" color="pink" shape="round" />
          <Button value="Teal" color="teal" shape="round" />
          <Button value="Cyan" color="cyan" shape="round" />
          <Button value="Black" color="black" shape="round" />
        </div>
        <div className="row">
          <h2 className="row__label">Dissabled buttons</h2>
          <div className="row__description">
            <p>
              Also you can change <code>disabled</code> attribute to <code>true</code> for disabling
              a button.
            </p>
            <Button value="Blue" color="blue" disabled={true} />
            <Button value="Green" color="green" disabled={true} />
            <Button value="Red" color="red" disabled={true} />
            <Button value="Orange" color="orange" disabled={true} />
            <Button value="Yellow" color="yellow" disabled={true} />
            <Button value="Grey" color="grey" disabled={true} />
            <Button value="Indigo" color="indigo" disabled={true} />
            <Button value="Pink" color="pink" disabled={true} />
            <Button value="Teal" color="teal" disabled={true} />
            <Button value="Cyan" color="cyan" disabled={true} />
            <Button value="Black" color="black" disabled={true} />
          </div>
        </div>
        <div className="row">
          <h2 className="row__label">Buttons in forms</h2>
          <p className="row__description">
            If you need, you can use buttons inside your forms by typing <code>type</code> attribute
            to <code>submit</code> or <code>reset</code>.
          </p>
          <form>
            <Button value="Submit" color="blue" type="submit" />
            <Button value="Reset" color="red" type="reset" />
          </form>
        </div>
        <div className="row">
          <h2 className="row__label">Custom styles</h2>
          <p className="row__description">
            If you want, you also can add you own styles to the buttons useing{' '}
            <code>customClassName</code> attribute.
          </p>
          <Button value="My purple button" customClassName="purple" />
        </div>
      </>
    );
  }
}
