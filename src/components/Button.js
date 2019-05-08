import React, {Component} from 'react';

export default class Button extends Component {
  render() {
    let {value, color, size, disabled = false} = this.props;
    return (
      <button className={`button button--${color} button--${size}`} disabled={disabled}>
        {value}
      </button>
    );
  }
}
