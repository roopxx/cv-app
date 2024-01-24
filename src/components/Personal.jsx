import { PropTypes } from "prop-types";
import { useState } from "react";

const Personal = ({ personalData, handlePersonalInfoChange }) => {
  const [personalInfo, setPersonalInfo] = useState(personalData);

  function handleChange(event) {
    const newPersonalInfo = [
      {
        ...personalInfo[0],
        [event.target.name]: event.target.value,
      },
    ];
    setPersonalInfo(newPersonalInfo);
    handlePersonalInfoChange(newPersonalInfo, 0);
  }

  return personalInfo.map((info, index) => (
    <div key={index} className="mt-10 bg-white p-4 shadow-md">
      <h2 className="mb-2 text-2xl">Personal Information</h2>
      <form action="" className="flex flex-col gap-2">
        <label htmlFor="f_name">First Name :</label>
        <input
          type="text"
          id="f_name"
          name="firstName"
          placeholder={info.firstName}
          className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
          onChange={handleChange}
        />
        <label htmlFor="l_name">Last Name :</label>
        <input
          type="text"
          id="l_name"
          name="lastName"
          placeholder={info.lastName}
          className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
          onChange={handleChange}
        />
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={info.email}
          className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone Number :</label>
        <input
          type="tel"
          id="phone"
          name="phoneNumber"
          placeholder={info.phoneNumber}
          className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
          onChange={handleChange}
        />
        <label htmlFor="address">Address :</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder={info.address}
          className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
          onChange={handleChange}
        />
      </form>
    </div>
  ));
};

Personal.propTypes = {
  personalData: PropTypes.array,
  handlePersonalInfoChange: PropTypes.func,
};

export default Personal;
