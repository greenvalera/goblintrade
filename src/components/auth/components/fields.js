import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";

const AbstractField = ({
  error,
  touched,
  handleChange,
  handleBlur,
  id,
  label,
  autoComplete,
  type,
  margin,
}) => (
  <TextField
    error={error && touched}
    variant="outlined"
    required
    fullWidth
    id={id}
    label={label}
    name={id}
    type={type}
    autoComplete={autoComplete}
    helperText={error && touched && error}
    onChange={handleChange}
    onBlur={handleBlur}
    margin={margin || 'none'}
  />
);

export const Email = (props) => (
  <AbstractField
    {...props}
    id="email"
    label="Email Address"
    autoComplete="email"
  />
);

export const Password = (props) => (
  <AbstractField
    {...props}
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
  />
);

Email.propTypes = {
  error: PropTypes.string,
  touched: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
};