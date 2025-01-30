function Button({ text, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="bg-[#F1713D] text-white px-4 py-2 rounded-lg"
    >
      {text}
    </button>
  );
}

export default Button;
