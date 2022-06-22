function Input({ label, value, onChange, placeholder }) {
  return (
    <div className="mb-3 row">
      <label for="title" className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-3">
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder={placeholder}
          value={value}
        />
      </div>
    </div>
  );
}

export default Input;
