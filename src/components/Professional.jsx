import { useState } from "react";
import { PropTypes } from "prop-types";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Professional = ({ personalDetails, handleChange }) => {
  const [showProfessionalExp, setShowProfessionalExp] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mt-6 bg-white p-4 shadow-md">
      <div>
        <h2 className="mb-2 inline-flex text-2xl">Professional Experience</h2>
        <button
          className="float-right p-1"
          onClick={() => {
            setShowProfessionalExp(!showProfessionalExp);
            setShowForm(showForm);
          }}
        >
          {showProfessionalExp ? (
            <MdKeyboardDoubleArrowDown className="size-7 duration-200 hover:rotate-180 hover:scale-150" />
          ) : (
            <MdKeyboardArrowDown className="size-7 transition duration-200 hover:scale-150" />
          )}
        </button>
      </div>

      {showProfessionalExp && (
        <ProfessionalExp
          showForm={showForm}
          setShowForm={setShowForm}
          personalDetails={personalDetails}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

const ProfessionalExp = ({
  personalDetails,
  handleChange,
  showForm,
  setShowForm,
}) => {
  return (
    <>
      <div>
        <div>
          <div className="flex justify-between px-1">
            <p>{!showForm ? personalDetails.companyName : ""}</p>
            <button className="px-1" onClick={() => setShowForm(!showForm)}>
              {showForm ? (
                <FaEye className="hover:scale-125" />
              ) : (
                <FaEyeSlash className="hover:scale-125" />
              )}{" "}
            </button>
          </div>
          {showForm && (
            <div>
              <form action="" className="flex flex-col gap-2">
                <label htmlFor="company">Company :</label>
                <input
                  type="text"
                  id="company"
                  name="companyName"
                  value={personalDetails.companyName}
                  className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                  onChange={handleChange}
                />
                <label htmlFor="position">Position Held :</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={personalDetails.position}
                  className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                  onChange={handleChange}
                />
                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="emp_startDate">Start Date :</label>
                    <input
                      type="date"
                      id="emp_startDate"
                      name="emp_startDate"
                      defaultValue={personalDetails.emp_startDate}
                      className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="emp_endDate">End Date :</label>
                    <input
                      type="date"
                      id="emp_endDate"
                      name="emp_endDate"
                      defaultValue={personalDetails.emp_endDate}
                      className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <label htmlFor="workLocation">Location :</label>
                <input
                  type="text"
                  id="workLocation"
                  name="workLocation"
                  value={personalDetails.workLocation}
                  className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                  onChange={handleChange}
                />
                <label htmlFor="jobDescription">Description :</label>
                <textarea
                  id="jobDescription"
                  name="jobDescription"
                  value={personalDetails.jobDescription}
                  className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                  onChange={handleChange}
                />
                <div className="mt-2">
                  <button
                    className="w-full border-2 border-blue-500 p-1"
                    onClick={() => setShowForm(!showForm)}
                  >
                    {showForm ? "submit" : ""}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Professional.propTypes = {
  personalDetails: PropTypes.object,
  handleChange: PropTypes.func,
};

ProfessionalExp.propTypes = {
  personalDetails: PropTypes.object,
  handleChange: PropTypes.func,
  showForm: PropTypes.bool,
  setShowForm: PropTypes.func,
};

export default Professional;
