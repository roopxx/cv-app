import { PropTypes } from "prop-types";

const Header = ({ loadTemplate, clearTemplate }) => {
  return (
    <div className="mt-10 flex justify-between rounded-2xl bg-white px-10 py-6 shadow-md">
      <div>
        <h1 className="mb-1 text-3xl">CV Maker</h1>
        <div className="relative text-xl after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-black after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0">
          Make your job-ready resume instantly
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button onClick={loadTemplate}>
          <div className="group relative overflow-hidden rounded-lg bg-gray-200 px-5 py-3 text-xl [transform:translateZ(0)] before:absolute before:left-1/2 before:top-1/2 before:size-8 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-[0] before:rounded-full before:bg-sky-600 before:opacity-0 before:transition before:duration-500 before:ease-in-out hover:before:scale-[6] hover:before:opacity-100">
            <span className="relative z-0 text-black transition duration-500 ease-in-out group-hover:text-gray-50">
              Load Template
            </span>
          </div>
        </button>
        <button onClick={clearTemplate}>
          <div className="group relative overflow-hidden rounded-lg bg-gray-200 px-5 py-3 text-xl [transform:translateZ(0)] before:absolute before:left-1/2 before:top-1/2 before:size-8 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-[0] before:rounded-full before:bg-sky-600 before:opacity-0 before:transition before:duration-500 before:ease-in-out hover:before:scale-[6] hover:before:opacity-100">
            <span className="relative z-0 text-black transition duration-500 ease-in-out group-hover:text-gray-50">
              Clear Template
            </span>
          </div>
        </button>
        <button onClick={() => window.print()}>
          <div className="group relative overflow-hidden rounded-lg bg-gray-200 px-5 py-3 text-xl [transform:translateZ(0)] before:absolute before:left-1/2 before:top-1/2 before:size-8 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-[0] before:rounded-full before:bg-sky-600 before:opacity-0 before:transition before:duration-500 before:ease-in-out hover:before:scale-[6] hover:before:opacity-100">
            <span className="relative z-0 text-black transition duration-500 ease-in-out group-hover:text-gray-50">
              Print Resume
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
