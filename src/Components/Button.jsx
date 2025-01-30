function Button({ text, handleClick, icon }) {
  return (
    <button
      onClick={handleClick}
      className="bg-[#F1713D] flex items-center justify-between gap-1.5  text-white px-4 py-2 rounded-lg "
    >
      {icon} {text}
    </button>
  );
}

export default Button;
