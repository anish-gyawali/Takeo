import React from "react";

function Button({ label }) {
  return (
    <div className="mb-3 row">
      <div className="col-md-3 offset-md-2">
        <button className="btn btn-primary">{label}</button>
      </div>
    </div>
  );
}

export default Button;
