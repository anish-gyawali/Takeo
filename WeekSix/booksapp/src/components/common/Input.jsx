import React from "react";
function Input({ label, value, onChange, placeholder, type }) {
  return (
    <div className="mb-3 row">
      <label htmlFor="title" className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-3">
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Input;
