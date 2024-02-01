import { useState } from "react";
import { PropTypes } from "prop-types";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaEye, FaEyeSlash, FaTrash } from "react-icons/fa";

const Professional = ({ professionalData, handleProfessionInfoChange }) => {
  const [showProfessionalExp, setShowProfessionalExp] = useState(false);

  const handleAddButton = () => {
    const newProfessionInfo = [
      ...professionalData,
      {
        id: professionalData.length + 1,
        companyName: "Company Name",
        position: "Position Held",
        emp_startDate: new Date(),
        emp_endDate: new Date(),
        workLocation: "City, Country",
        jobDescription: "Roles and Responsibilities",
        showForm: false,
      },
    ];
    handleProfessionInfoChange(newProfessionInfo, 2);
  };

  const handleDeleteButton = (id) => {
    const newProfessionInfo = professionalData.filter((prof) => prof.id !== id);
    handleProfessionInfoChange(newProfessionInfo, 2);
  };

  const handleChange = (e, prof) => {
    const { name, value } = e.target;
    const newProfessionInfo = professionalData.map((profession) =>
      profession.id === prof.id
        ? {
            ...profession,
            [name]: name.includes("Date") ? new Date(value) : value,
          }
        : profession,
    );
    handleProfessionInfoChange(newProfessionInfo, 2);
  };

  const toggleFormVisibility = (id) => {
    const newProfessionInfo = professionalData.map((prof) =>
      prof.id === id ? { ...prof, showForm: !prof.showForm } : prof,
    );
    handleProfessionInfoChange(newProfessionInfo, 2);
  };

  const allProfessionInfo = professionalData.map((prof) => (
    <ProfessionSection
      key={prof.id}
      profession={prof}
      handleChange={handleChange}
      handleDeleteButton={handleDeleteButton}
      toggleFormVisibility={toggleFormVisibility}
    />
  ));

  return (
    <div className="mt-6 bg-white p-4 shadow-md">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Professional Experience</h2>
        <button
          onClick={() => {
            setShowProfessionalExp(!showProfessionalExp);
          }}
        >
          {showProfessionalExp ? (
            <MdKeyboardDoubleArrowDown className="size-7 duration-200 hover:rotate-180 hover:scale-150" />
          ) : (
            <MdKeyboardArrowDown className="size-7 transition duration-200 hover:scale-150" />
          )}
        </button>
      </div>
      {showProfessionalExp ? (
        <div className="space-y-1">{allProfessionInfo}</div>
      ) : (
        ""
      )}
      {showProfessionalExp && (
        <button className="mt-2 p-1" onClick={handleAddButton}>
          <div className="group relative overflow-hidden rounded-lg bg-gray-200 px-6 py-2 [transform:translateZ(0)] before:absolute before:bottom-0 before:left-0 before:size-full before:origin-[100%_100%] before:scale-x-0 before:bg-sky-600 before:transition before:duration-500 before:ease-in-out hover:before:origin-[0_0] hover:before:scale-x-100">
            <span className="relative z-0 text-black transition duration-500 ease-in-out group-hover:text-gray-50">
              Add Profession
            </span>
          </div>
        </button>
      )}
    </div>
  );
};

const ProfessionSection = ({
  profession,
  handleChange,
  handleDeleteButton,
  toggleFormVisibility,
}) => {
  return (
    <div>
      <div className="my-3 flex justify-between px-1">
        <p className="text-lg font-medium">
          {!profession.showForm ? profession.companyName : ""}
        </p>
        <div className="flex gap-2">
          <button
            className="px-1 hover:animate-bounce hover:text-red-500"
            onClick={() => handleDeleteButton(profession.id)}
          >
            <FaTrash />
          </button>
          <button
            className="px-1"
            onClick={() => toggleFormVisibility(profession.id)}
          >
            {profession.showForm ? (
              <FaEye className="hover:scale-125" />
            ) : (
              <FaEyeSlash className="hover:scale-125" />
            )}
          </button>
        </div>
      </div>
      <hr className="my-2 border" />
      {profession.showForm && (
        <div>
          <form action="" className="flex flex-col gap-2 text-lg">
            <label htmlFor="company" className="font-medium">
              Company :
            </label>
            <input
              type="text"
              id="company"
              name="companyName"
              placeholder="Enter company name"
              value={profession.companyName}
              className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
              onChange={(e) => {
                handleChange(e, profession);
              }}
            />
            <label htmlFor="position" className="font-medium">
              Position Held :
            </label>
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Enter position title"
              value={profession.position}
              className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
              onChange={(e) => {
                handleChange(e, profession);
              }}
            />
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="emp_startDate" className="font-medium">
                  Start Date :
                </label>
                <input
                  type="date"
                  id="emp_startDate"
                  name="emp_startDate"
                  placeholder="Enter start date"
                  defaultValue={profession.emp_startDate.toLocaleDateString(
                    "fr-CA",
                  )}
                  className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                  onChange={(e) => {
                    handleChange(e, profession);
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="emp_endDate" className="font-medium">
                  End Date :
                </label>
                <input
                  type="date"
                  id="emp_endDate"
                  name="emp_endDate"
                  placeholder="Enter end date"
                  defaultValue={profession.emp_endDate.toLocaleDateString(
                    "fr-CA",
                  )}
                  className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                  onChange={(e) => {
                    handleChange(e, profession);
                  }}
                />
              </div>
            </div>
            <label htmlFor="workLocation" className="font-medium">
              Location :
            </label>
            <input
              type="text"
              id="workLocation"
              name="workLocation"
              placeholder="Enter work location"
              value={profession.workLocation}
              className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
              onChange={(e) => {
                handleChange(e, profession);
              }}
            />
            <label htmlFor="jobDescription" className="font-medium">
              Description :
            </label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              placeholder="Enter job description"
              value={profession.jobDescription}
              className="h-32 rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
              onChange={(e) => {
                handleChange(e, profession);
              }}
            />
            <div className="my-2">
              <button
                className="w-full border-2 border-blue-500 p-1"
                onClick={() => toggleFormVisibility(profession.id)}
              >
                {profession.showForm ? "submit" : ""}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

Professional.propTypes = {
  professionalData: PropTypes.array,
  handleProfessionInfoChange: PropTypes.func,
};

ProfessionSection.propTypes = {
  profession: PropTypes.object,
  handleChange: PropTypes.func,
  handleDeleteButton: PropTypes.func,
  toggleFormVisibility: PropTypes.func,
};

export default Professional;
