import React from "react";

function Button({ label, onClick }) {
  return (
    <div className="mb-3 row">
      <div className="col-md-3 offset-md-2">
        <button className="btn btn-primary" onClick={onClick}>
          {label}
        </button>
      </div>
    </div>
  );
}

export default Button;
