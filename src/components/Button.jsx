function Button({ text, onClick, bg }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bg }}
      className="btn"
    >
      {text}
    </button>
  );
}

export default Button;