import { PropTypes } from "prop-types";

const Header = ({ loadTemplate, clearTemplate }) => {
  return (
    <div className="mt-10 flex justify-between rounded-2xl bg-white px-10 py-4 shadow-md">
      <div>
        <h1 className="text-3xl">CV-App Logo</h1>
        <p>Make your resume instantly</p>
      </div>
      <div className="flex items-center gap-6">
        <button onClick={loadTemplate}>
          <div className="group relative overflow-hidden rounded-lg bg-gray-200 px-6 py-3 [transform:translateZ(0)] before:absolute before:left-1/2 before:top-1/2 before:size-8 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-[0] before:rounded-full before:bg-sky-600 before:opacity-0 before:transition before:duration-500 before:ease-in-out hover:before:scale-[6] hover:before:opacity-100">
            <span className="relative z-0 text-black transition duration-500 ease-in-out group-hover:text-gray-50">
              Load Template
            </span>
          </div>
        </button>
        <button onClick={clearTemplate}>
          <div className="group relative overflow-hidden rounded-lg bg-gray-200 px-6 py-3 [transform:translateZ(0)] before:absolute before:left-1/2 before:top-1/2 before:size-8 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-[0] before:rounded-full before:bg-sky-600 before:opacity-0 before:transition before:duration-500 before:ease-in-out hover:before:scale-[6] hover:before:opacity-100">
            <span className="relative z-0 text-black transition duration-500 ease-in-out group-hover:text-gray-50">
              Clear Template
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  loadTemplate: PropTypes.func,
  clearTemplate: PropTypes.func,
};

export default Header;
