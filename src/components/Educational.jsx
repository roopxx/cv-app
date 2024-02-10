import { useState } from "react";
import { PropTypes } from "prop-types";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaEye, FaEyeSlash, FaTrash } from "react-icons/fa";

const Educational = ({ educationalData, handleEducationInfoChange }) => {
  const [showEducationSection, setShowEducationSection] = useState(false);

  const handleAddButton = () => {
    const nextID = educationalData.length + 1;
    const newEducationInfo = [
      ...educationalData,
      {
        id: nextID,
        schoolName: "University Name",
        degree: "Degree",
        startDate: new Date(),
        endDate: new Date(),
        location: "City, Country",
        showForm: false,
      },
    ];
    handleEducationInfoChange(newEducationInfo, 1);
  };

  const handleDeleteButton = (id) => {
    const newEducationInfo = educationalData.filter((edu) => edu.id !== id);
    handleEducationInfoChange(newEducationInfo, 1);
  };

  const handleChange = (e, edu) => {
    const { name, value } = e.target;

    const newEducationInfo = educationalData.map((education) =>
      education.id === edu.id
        ? {
            ...education,
            [name]: name.includes("Date") ? new Date(value) : value,
          }
        : education,
    );
    handleEducationInfoChange(newEducationInfo, 1);
  };

  const toggleFormVisibility = (id) => {
    const newEducationInfo = educationalData.map((edu) =>
      edu.id === id ? { ...edu, showForm: !edu.showForm } : edu,
    );
    handleEducationInfoChange(newEducationInfo, 1);
  };

  const allEducationInfo = educationalData.map((edu) => (
    <EducationSection
      key={edu.id}
      education={edu}
      handleChange={handleChange}
      handleDeleteButton={handleDeleteButton}
      toggleFormVisibility={toggleFormVisibility}
    />
  ));

  return (
    <div className="mt-4 bg-white p-4 shadow-md sm:mt-6">
      <div className="flex justify-between">
        <h2 className="text-lg font-medium sm:text-2xl sm:font-semibold">
          Educational Qualification
        </h2>
        <button
          onClick={() => {
            setShowEducationSection(!showEducationSection);
          }}
        >
          {showEducationSection ? (
            <MdKeyboardDoubleArrowDown className="size-7 duration-200 hover:rotate-180 hover:scale-150" />
          ) : (
            <MdKeyboardArrowDown className="size-7 transition duration-200 hover:scale-150" />
          )}
        </button>
      </div>
      {showEducationSection ? (
        <div className="space-y-1">{allEducationInfo}</div>
      ) : (
        ""
      )}
      {showEducationSection && (
        <button className="mt-2 p-1" onClick={handleAddButton}>
          <div className="group relative overflow-hidden rounded-lg bg-gray-200 px-6 py-2 [transform:translateZ(0)] before:absolute before:bottom-0 before:left-0 before:size-full before:origin-[100%_100%] before:scale-x-0 before:bg-sky-600 before:transition before:duration-500 before:ease-in-out hover:before:origin-[0_0] hover:before:scale-x-100">
            <span className="relative z-0 text-black transition duration-500 ease-in-out group-hover:text-gray-50">
              Add Education
            </span>
          </div>
        </button>
      )}
    </div>
  );
};

const EducationSection = ({
  education,
  handleChange,
  handleDeleteButton,
  toggleFormVisibility,
}) => {
  return (
    <div>
      <div className="my-3 flex justify-between px-1">
        <p className="text-lg font-medium">
          {!education.showForm ? education.schoolName : ""}
        </p>
        <div className="flex gap-3 sm:gap-2">
          <button
            className="px-1 hover:animate-bounce hover:text-red-500"
            onClick={() => handleDeleteButton(education.id)}
          >
            <FaTrash />
          </button>
          <button
            className="px-1"
            onClick={() => toggleFormVisibility(education.id)}
          >
            {education.showForm ? (
              <FaEye className="hover:scale-125" />
            ) : (
              <FaEyeSlash className="hover:scale-125" />
            )}
          </button>
        </div>
      </div>
      <hr className="my-2 border" />
      {education.showForm && (
        <div>
          <form action="" className="flex flex-col gap-1 sm:gap-2 sm:text-lg">
            <label htmlFor="school" className="font-medium">
              School :
            </label>
            <input
              type="text"
              id="school"
              name="schoolName"
              placeholder="Enter school / university name"
              value={education.schoolName}
              className="rounded-sm bg-slate-200 px-1 py-0.5 outline-none focus:outline-blue-500"
              onChange={(e) => {
                handleChange(e, education);
              }}
            />
            <label htmlFor="degree" className="font-medium">
              Degree :
            </label>
            <input
              type="text"
              id="degree"
              name="degree"
              placeholder="Enter Degree / Field of Study"
              value={education.degree}
              className="rounded-sm bg-slate-200 px-1 py-0.5 outline-none focus:outline-blue-500"
              onChange={(e) => {
                handleChange(e, education);
              }}
            />
            <div className="flex gap-2 sm:gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="startDate" className="font-medium">
                  Start Date :
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  placeholder="Enter start date"
                  defaultValue={education.startDate.toLocaleDateString("fr-CA")}
                  className="rounded-sm bg-slate-200 px-1 py-0.5 outline-none focus:outline-blue-500"
                  onChange={(e) => {
                    handleChange(e, education);
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="endDate" className="font-medium">
                  End Date :
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  placeholder="Enter end date"
                  defaultValue={education.endDate.toLocaleDateString("fr-CA")}
                  className="rounded-sm bg-slate-200 px-1 py-0.5 outline-none focus:outline-blue-500"
                  onChange={(e) => {
                    handleChange(e, education);
                  }}
                />
              </div>
            </div>
            <label htmlFor="location" className="font-medium">
              Location :
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter location"
              value={education.location}
              className="rounded-sm bg-slate-200 px-1 py-0.5 outline-none focus:outline-blue-500"
              onChange={(e) => {
                handleChange(e, education);
              }}
            />
            <div className="my-2">
              <button
                className="w-full border-2 border-blue-500 p-1"
                onClick={() => toggleFormVisibility(education.id)}
              >
                {education.showForm ? "submit" : ""}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
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
  toggleFormVisibility: PropTypes.func,
};

export default Educational;
