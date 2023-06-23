const FormRow = ({ type, name, values, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={values}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
