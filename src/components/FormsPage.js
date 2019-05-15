import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

import Input from './Input';

export default class FormsPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Forms</title>
        </Helmet>
        <div className="row">
          <h2 className="row__label">General</h2>
          <div className="row__description">
            <p>
              You can compose you forms fields within <code>Input</code> components.
            </p>
            <p>
              Attribute <code>label</code> set label to the input field.
            </p>
            <p>
              Also, you can modified type of the input replacing the attribute <code>type</code>{' '}
              with whatever that is available in HTML5.
            </p>
            <p>
              Other available attributes are{' '}
              <code>placeholder, name, min, max, minlength, maxlength, required</code> (false by
              default), <code>title</code> and <code>disabled</code> (false by default).
            </p>
          </div>
          <form>
            <Input label="First Name" type="text" placeholder="first name" />
            <Input label="Last Name" type="text" placeholder="last name" />
            <Input label="E-mail" type="email" />
            <Input label="Password" type="password" />
            <Input label="Load your photo" type="file" />
            <Input label="Birthday" type="date" />
            <Input label="Color" type="color" />
            <Input label="Range" type="range" />
            <Input label="Range" type="search" />
          </form>
        </div>
      </>
    );
  }
}
