import { Link } from "react-router-dom";

export default function Button({ children, disabled, to }) {

    const style="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";
    if(to)return <Link to={to} className={style}>{children}</Link>
  return (
    <button
      className={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
}