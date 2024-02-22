/* eslint-disable react/prop-types */
function MovieDetails({ children, className }) {
  return (
    <p className={`text-sm text-slate-300 ${className ? className : ""}`}>
      {children}
    </p>
  );
}

export default MovieDetails;
