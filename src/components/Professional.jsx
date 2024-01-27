import { useState } from "react";
import { PropTypes } from "prop-types";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaEye, FaEyeSlash, FaTrash } from "react-icons/fa";

const Professional = ({ professionalData, handleProfessionInfoChange }) => {
  const [professionInfo, setProfessionInfo] = useState(professionalData);
  const [showProfessionalExp, setShowProfessionalExp] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleAddButton = () => {
    const newProfessionInfo = [
      ...professionInfo,
      {
        id: professionInfo.length + 1,
        companyName: "",
        position: "",
        emp_startDate: new Date(),
        emp_endDate: new Date(),
        workLocation: "",
        jobDescription: "",
      },
    ];
    setProfessionInfo(newProfessionInfo);
    handleProfessionInfoChange(newProfessionInfo, 2);
  };

  const handleDeleteButton = (id) => {
    const newProfessionInfo = professionInfo.filter((prof) => prof.id !== id);
    setProfessionInfo(newProfessionInfo);
    handleProfessionInfoChange(newProfessionInfo, 2);
  };

  const handleChange = (e, prof) => {
    const { name, value } = e.target;
    setProfessionInfo((prevProfessionInfo) => {
      const newProfessionInfo = prevProfessionInfo.map((profession) =>
        profession.id === prof.id
          ? {
              ...profession,
              [name]: name.includes("Date") ? new Date(value) : value,
            }
          : profession,
      );
      handleProfessionInfoChange(newProfessionInfo, 2);
      return newProfessionInfo;
    });
  };

  const allProfessionInfo = professionInfo.map((prof) => (
    <ProfessionSection
      key={prof.id}
      profession={prof}
      handleChange={handleChange}
      handleDeleteButton={handleDeleteButton}
      showForm={showForm}
      setShowForm={setShowForm}
    />
  ));

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
  showForm,
  setShowForm,
}) => {
  return (
    <>
      <div>
        <div>
          <div className="my-3 flex justify-between px-1 text-lg">
            <p>{!showForm ? profession.companyName : ""}</p>
            <div className="flex gap-2">
              <button
                className="px-1 hover:animate-bounce hover:text-red-500"
                onClick={() => handleDeleteButton(profession.id)}
              >
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
          </div>
          <hr className="my-2 border" />
          {showForm && (
            <div>
              <form action="" className="flex flex-col gap-2">
                <label htmlFor="company">Company :</label>
                <input
                  type="text"
                  id="company"
                  name="companyName"
                  value={profession.companyName}
                  className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                  onChange={(e) => {
                    handleChange(e, profession);
                  }}
                />
                <label htmlFor="position">Position Held :</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={profession.position}
                  className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                  onChange={(e) => {
                    handleChange(e, profession);
                  }}
                />
                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="emp_startDate">Start Date :</label>
                    <input
                      type="date"
                      id="emp_startDate"
                      name="emp_startDate"
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
                    <label htmlFor="emp_endDate">End Date :</label>
                    <input
                      type="date"
                      id="emp_endDate"
                      name="emp_endDate"
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
                <label htmlFor="workLocation">Location :</label>
                <input
                  type="text"
                  id="workLocation"
                  name="workLocation"
                  value={profession.workLocation}
                  className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                  onChange={(e) => {
                    handleChange(e, profession);
                  }}
                />
                <label htmlFor="jobDescription">Description :</label>
                <textarea
                  id="jobDescription"
                  name="jobDescription"
                  value={profession.jobDescription}
                  className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
                  onChange={(e) => {
                    handleChange(e, profession);
                  }}
                />
                <div className="my-2">
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
  professionalData: PropTypes.array,
  handleProfessionInfoChange: PropTypes.func,
};

ProfessionSection.propTypes = {
  profession: PropTypes.object,
  handleChange: PropTypes.func,
  handleDeleteButton: PropTypes.func,
  showForm: PropTypes.bool,
  setShowForm: PropTypes.func,
};

export default Professional;
