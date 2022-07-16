function RadioInput({ label, options, onClick, value: inputValue }) {
  return (
    <div className="mb-3 row">
      <label for="availability" class="col-sm-2 col-form-label">
        {label}
      </label>
      {options.map((item, index) => {
        const { label, value } = item;
        return (
          <div class="form-check col-sm-2" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name="availability"
              value={value}
              onClick={onClick}
              checked={value === inputValue}
            />
            <label className="form-check-label" for="flexRadioDefault2">
              {label}
            </label>
          </div>
        );
      })}
    </div>
  );
}
export default RadioInput;
