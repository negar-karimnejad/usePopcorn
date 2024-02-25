/* eslint-disable react/prop-types */
function Input({ inputRef, placeholder, value, changeHandler }) {
  return (
    <input
      className="bg-violet-600 p-4 rounded-lg w-full placeholder:text-xl placeholder:text-gray-300"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
      ref={inputRef ? inputRef : ""}
    />
  );
}

export default Input;
