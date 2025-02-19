/* eslint-disable react/prop-types */
function Button({ text, handleClick, icon, iconR }) {
  return (
    <button
      onClick={handleClick}
      className="bg-orange-500  flex items-center justify-between gap-1.5 cursor-pointer
        text-text-200 px-4 py-2 2xl:text-[1.375rem] rounded-[1rem] "
    >
      {icon} {text} {iconR}
    </button>
  );
}

export default Button;
