import React, {Component} from 'react';

export default class Button extends Component {
  render() {
    let {
      value = '',
      color = 'grey',
      size = 'medium',
      shape = 'rounded',
      type = null,
      disabled = false,
      customClassName = '',
      title = null
    } = this.props;
    return (
      <button
        className={`button button--${color} button--${size} button--${shape} ${customClassName}`}
        type={type}
        disabled={disabled}
        title={title}
      >
        {value}
      </button>
    );
  }
}
