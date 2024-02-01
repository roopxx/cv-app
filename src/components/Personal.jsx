import { PropTypes } from "prop-types";

const Personal = ({ personalData, handlePersonalInfoChange }) => {
  function handleChange(event) {
    const newPersonalInfo = [
      {
        ...personalData[0],
        [event.target.name]: event.target.value,
      },
    ];
    handlePersonalInfoChange(newPersonalInfo, 0);
  }

  return personalData.map((info, index) => (
    <div key={index} className="mt-10 bg-white p-4 shadow-md">
      <h2 className="mb-2 text-2xl font-semibold">Personal Information</h2>
      <form action="" className="flex flex-col gap-2 text-lg">
        <label htmlFor="f_name" className="font-medium">
          First Name :
        </label>
        <input
          type="text"
          id="f_name"
          name="firstName"
          placeholder="Enter first name"
          value={info.firstName}
          className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
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
          className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
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
          className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
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
          className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
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
