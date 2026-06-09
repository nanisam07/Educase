function InputField({
  label,
  type = "text",
  placeholder = "Marry Doe",
  value,
  onChange,
}) {
  const title = (label || "").replace("*", "");

  return (
    <div className="floating-input">
      <span className="floating-label">{label}</span>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <span className="floating-label">
        {title}
        {label && label.includes("*") && <span className="required">*</span>}
      </span>
    </div>
  );
}

export default InputField;