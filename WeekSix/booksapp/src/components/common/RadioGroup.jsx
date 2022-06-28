import React from "react";

function RadioGroup({ label, value: inputValue, onClick, options }) {
  return (
    <div className="mb-3 row">
      <label htmlFor="availability" className="col-sm-2 col-form-label">
        {label}
      </label>
      {options.map((item, index) => {
        const { label, value } = item;
        return (
          <div className="form-check col-sm-2" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name="availability"
              value={value}
              onClick={onClick}
              checked={inputValue === value}
            />
            <label className="form-check-label" htmlFor="availability1">
              {label}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default RadioGroup;
