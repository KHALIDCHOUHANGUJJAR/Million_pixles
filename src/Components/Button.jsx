/* eslint-disable react/prop-types */
function Button({ text, handleClick, icon,iconR }) {
  return (
    <button
      onClick={handleClick}
      className="bg-[#F1713D] flex items-center justify-between gap-1.5 cursor-pointer  text-white px-4 py-2 rounded-lg "
    >
      {icon} {text} {iconR}
    </button>
  );
}

export default Button;
