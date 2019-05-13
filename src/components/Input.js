import React, {Component} from 'react';

import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    let {
      label,
      type = 'text',
      placeholder = '',
      name,
      min = null,
      max = null,
      minLength = null,
      maxLength = null,
      required = false,
      title,
      disabled = false
    } = this.props;
    return (
      <label className="input__label">
        {label}
        <input
          className="input__field"
          type={type}
          placeholder={placeholder}
          name={name}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
          title={title}
          disabled={disabled}
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'password',
    'number',
    'email',
    'range',
    'radio',
    'checkbox',
    'color',
    'date',
    'file',
    'search'
  ]).isRequired,
  placeholder: PropTypes.string,
  handler: PropTypes.func
};

export default Input;
