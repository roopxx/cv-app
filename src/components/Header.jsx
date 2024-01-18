import { PropTypes } from "prop-types";

const Header = ({ loadTemplate, clearTemplate }) => {
  return (
    <div className="mt-10 flex justify-between rounded-2xl bg-white px-10 py-4 shadow-md">
      <div>
        <h1 className="text-3xl">CV-App Logo</h1>
        <p>Make your resume instantly</p>
      </div>
      <div className="flex items-center gap-6">
        <button className="border-4 border-blue-400 p-2" onClick={loadTemplate}>
          Load Template
        </button>
        <button
          className="border-4 border-blue-400 p-2"
          onClick={clearTemplate}
        >
          Clear Template
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
