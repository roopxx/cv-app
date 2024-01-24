import { useState } from "react";
import { PropTypes } from "prop-types";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaEye, FaEyeSlash, FaTrash } from "react-icons/fa";

const Educational = ({ educationalData, handleEducationInfoChange }) => {
  const [educationInfo, setEducationInfo] = useState(educationalData);
  const [showEducationSection, setShowEducationSection] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleAddButton = () => {
    const newEducationInfo = [
      ...educationInfo,
      {
        id: educationInfo.length + 1,
        schoolName: "",
        degree: "",
        startDate: new Date(),
        endDate: new Date(),
        location: "",
      },
    ];
    setEducationInfo(newEducationInfo);
    handleEducationInfoChange(newEducationInfo, 1);
  };

  const handleDeleteButton = (id) => {
    const newEducationInfo = educationInfo.filter((edu) => edu.id !== id);
    setEducationInfo(newEducationInfo);
    handleEducationInfoChange(newEducationInfo, 1);
  };

  const handleChange = (e, edu) => {
    const { name, value } = e.target;
    setEducationInfo((prevEducationInfo) => {
      const newEducationInfo = prevEducationInfo.map((education) =>
        education.id === edu.id
          ? {
              ...education,
              [name]: name.includes("Date") ? new Date(value) : value,
            }
          : education,
      );
      handleEducationInfoChange(newEducationInfo, 1);
      return newEducationInfo;
    });
  };

  const allEducationInfo = educationInfo.map((edu) => (
    <EducationSection
      key={edu.id}
      education={edu}
      handleChange={handleChange}
      handleDeleteButton={handleDeleteButton}
      showForm={showForm}
      setShowForm={setShowForm}
    />
  ));

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
      {showEducationSection ? <div>{allEducationInfo}</div> : ""}
      {showEducationSection && (
        <button onClick={handleAddButton}>Add Education</button>
      )}
    </div>
  );
};

const EducationSection = ({
  education,
  handleChange,
  handleDeleteButton,
  showForm,
  setShowForm,
}) => {
  return (
    <>
      <div>
        <div>
          <div className="flex justify-between px-1">
            <p>{!showForm ? education.schoolName : ""}</p>
            <button onClick={() => handleDeleteButton(education.id)}>
              <FaTrash />
            </button>
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
                  placeholder={education.schoolName}
                  className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                  onChange={(e) => {
                    handleChange(e, education);
                  }}
                />
                <label htmlFor="degree">Degree :</label>
                <input
                  type="text"
                  id="degree"
                  name="degree"
                  placeholder={education.degree}
                  className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                  onChange={(e) => {
                    handleChange(e, education);
                  }}
                />
                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="startDate">Start Date :</label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      defaultValue={education.startDate.toLocaleDateString(
                        "fr-CA",
                      )}
                      className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                      onChange={(e) => {
                        handleChange(e, education);
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="endDate">End Date :</label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      defaultValue={education.endDate.toLocaleDateString(
                        "fr-CA",
                      )}
                      className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                      onChange={(e) => {
                        handleChange(e, education);
                      }}
                    />
                  </div>
                </div>
                <label htmlFor="location">Location :</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder={education.location}
                  className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                  onChange={(e) => {
                    handleChange(e, education);
                  }}
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
  educationalData: PropTypes.array,
  handleEducationInfoChange: PropTypes.func,
};

EducationSection.propTypes = {
  education: PropTypes.object,
  handleChange: PropTypes.func,
  handleDeleteButton: PropTypes.func,
  showForm: PropTypes.bool,
  setShowForm: PropTypes.func,
};

export default Educational;
