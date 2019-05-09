import React, {Component} from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div className="row">
        <h1 className="row__label row__label--centerd">Welcome page</h1>
        <div className="row__description">
          <p>Useing this tiny library you can create your basic page elements.</p>
          <p>
            For any suggestions for improving this library, you can contact me using{' '}
            <a href="https://github.com/Temu4">GitHub</a> or other messengers.
          </p>
        </div>
      </div>
    );
  }
}
