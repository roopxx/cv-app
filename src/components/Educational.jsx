import { useState } from "react";
import { PropTypes } from "prop-types";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Educational = ({ personalDetails, handleChange }) => {
  const [showEducationSection, setShowEducationSection] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mt-6 bg-white p-4 shadow-md">
      <div>
        <h2 className="mb-2 inline-flex text-2xl">Educational Qualification</h2>
        <button
          className="float-right p-1"
          onClick={() => {
            setShowEducationSection(!showEducationSection);
            setShowForm(showForm);
          }}
        >
          {showEducationSection ? (
            <MdKeyboardDoubleArrowDown className="float-right size-7 duration-200 hover:rotate-180 hover:scale-150" />
          ) : (
            <MdKeyboardArrowDown className="float-right size-7 transition duration-200 hover:scale-150" />
          )}
        </button>
      </div>

      {showEducationSection && (
        <EducationSection
          showForm={showForm}
          setShowForm={setShowForm}
          personalDetails={personalDetails}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

const EducationSection = ({
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
            <p>{!showForm ? personalDetails.schoolName : ""}</p>
            <button className="px-1" onClick={() => setShowForm(!showForm)}>
              {showForm ? (
                <FaEye className="hover:scale-125" />
              ) : (
                <FaEyeSlash className="hover:scale-125" />
              )}
            </button>
          </div>
          {showForm && (
            <div>
              <form action="" className="flex flex-col gap-2">
                <label htmlFor="school">School :</label>
                <input
                  type="text"
                  id="school"
                  name="schoolName"
                  value={personalDetails.schoolName}
                  className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                  onChange={handleChange}
                />
                <label htmlFor="degree">Degree :</label>
                <input
                  type="text"
                  id="degree"
                  name="degree"
                  value={personalDetails.degree}
                  className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                  onChange={handleChange}
                />
                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="startDate">Start Date :</label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      defaultValue={personalDetails.startDate}
                      className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="endDate">End Date :</label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      defaultValue={personalDetails.endDate}
                      className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <label htmlFor="location">Location :</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={personalDetails.location}
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

Educational.propTypes = {
  personalDetails: PropTypes.object,
  handleChange: PropTypes.func,
};

EducationSection.propTypes = {
  personalDetails: PropTypes.object,
  handleChange: PropTypes.func,
  showForm: PropTypes.bool,
  setShowForm: PropTypes.func,
};

export default Educational;
