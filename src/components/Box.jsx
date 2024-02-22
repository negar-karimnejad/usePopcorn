/* eslint-disable react/prop-types */
function Box({ children, onClick, expand }) {
  return (
    <div className="no-scrollbar bg-slate-700 rounded-lg h-[467px] overflow-y-auto w-[400px] relative">
      <div
        onClick={onClick}
        className="absolute right-2 top-2 bg-gray-800 rounded-full cursor-pointer w-6 h-6 text-white flex items-center justify-center pb-1 text-xl font-bold"
      >
        {expand ? "+" : "-"}
      </div>
      {children}
    </div>
  );
}

export default Box;
