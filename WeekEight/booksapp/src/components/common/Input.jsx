function Select({ label, value, onChange, placeholder, type, name }) {
  return (
    <div className="mb-3 row">
      <label for="title" className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-3">
        <input
          type={type ? type : "text"}
          className="form-control"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
export default Select;
