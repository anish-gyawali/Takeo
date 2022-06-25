import React from "react";

function Button({ onCLick, label }) {
  return (
    <div className="mb-3 row">
      <div className="col-md-3 offset-md-2">
        <button className="btn btn-primary" onClick={onCLick}>
          {label}
        </button>
      </div>
    </div>
  );
}

export default Button;
