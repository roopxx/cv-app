import { PropTypes } from "prop-types";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";

const Personal = ({ personalData, handlePersonalInfoChange }) => {
  const [showPersonalSection, setShowPersonalSection] = useState(false);

  function handleChange(event) {
    const newPersonalInfo = [
      {
        ...personalData[0],
        [event.target.name]: event.target.value,
      },
    ];
    handlePersonalInfoChange(newPersonalInfo, 0);
  }

  return (
    <div className="mt-6 bg-white p-4 shadow-md lg:mt-10">
      <div className="flex justify-between">
        <h2 className="text-lg font-medium sm:text-2xl sm:font-semibold">
          Personal Information
        </h2>
        <button
          onClick={() => {
            setShowPersonalSection(!showPersonalSection);
          }}
        >
          {showPersonalSection ? (
            <MdKeyboardDoubleArrowDown className="size-7 duration-200 hover:rotate-180 hover:scale-150" />
          ) : (
            <MdKeyboardArrowDown className="size-7 transition duration-200 hover:scale-150" />
          )}
        </button>
      </div>
      {showPersonalSection &&
        personalData.map((info, index) => (
          <form
            key={index}
            action=""
            className="mt-2 flex flex-col gap-1 sm:gap-2 sm:text-lg"
          >
            <label htmlFor="f_name" className="font-medium">
              First Name :
            </label>
            <input
              type="text"
              id="f_name"
              name="firstName"
              placeholder="Enter first name"
              value={info.firstName}
              className="rounded-sm bg-slate-200 px-1 py-0.5 outline-none focus:outline-blue-500"
              onChange={handleChange}
            />
            <label htmlFor="l_name" className="font-medium">
              Last Name :
            </label>
            <input
              type="text"
              id="l_name"
              name="lastName"
              placeholder="Enter last name"
              value={info.lastName}
              className="rounded-sm bg-slate-200 px-1 py-0.5 outline-none focus:outline-blue-500"
              onChange={handleChange}
            />
            <label htmlFor="email" className="font-medium">
              Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter e-mail"
              value={info.email}
              className="rounded-sm bg-slate-200 px-1 py-0.5 outline-none focus:outline-blue-500"
              onChange={handleChange}
            />
            <label htmlFor="phone" className="font-medium">
              Phone Number :
            </label>
            <input
              type="tel"
              id="phone"
              name="phoneNumber"
              placeholder="Enter phone number"
              value={info.phoneNumber}
              className="rounded-sm bg-slate-200 px-1 py-0.5 outline-none focus:outline-blue-500"
              onChange={handleChange}
            />
            <label htmlFor="address" className="font-medium">
              Address :
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="City, Country"
              value={info.address}
              className="rounded-sm bg-slate-200 px-1 py-0.5 outline-none focus:outline-blue-500"
              onChange={handleChange}
            />
          </form>
        ))}
    </div>
  );
};

Personal.propTypes = {
  personalData: PropTypes.array,
  handlePersonalInfoChange: PropTypes.func,
};

export default Personal;
