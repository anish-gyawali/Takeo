import React from "react";
function Select({ label, value, onChange, options }) {
  return (
    <div className="mb-3 row">
      <label htmlFor="subject" className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-3">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={onChange}
          value={value}
        >
          <option defaultValue>Select {label}</option>
          {options.map((item, index) => {
            const { label, value } = item;
            return (
              <option key={index} value={value}>
                {label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
export default Select;
