/* eslint-disable react/prop-types */
function SummaryBox({ children }) {
  return (
    <div className="flex gap-1 items-center text-white font-semibold">
      {children}
    </div>
  );
}

export default SummaryBox;
