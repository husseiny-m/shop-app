import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handelChange, label, ...otherInputProps }) => (
  <div className="group">
    <input className="form-input" onChange={handelChange} {...otherInputProps} />
    {label ? (
      <label className={`${otherInputProps.value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
