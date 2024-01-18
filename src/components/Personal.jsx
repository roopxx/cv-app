import { PropTypes } from "prop-types";

const Personal = ({ personalDetails, handleChange }) => {
  return (
    <div className="mt-10 bg-white p-4 shadow-md">
      <h2 className="mb-2 text-2xl">Personal Details</h2>
      <form action="" className="flex flex-col gap-2">
        <label htmlFor="f_name">First Name :</label>
        <input
          type="text"
          id="f_name"
          name="firstName"
          value={personalDetails.firstName}
          className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
          onChange={handleChange}
        />
        <label htmlFor="l_name">Last Name :</label>
        <input
          type="text"
          id="l_name"
          name="lastName"
          value={personalDetails.lastName}
          className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
          onChange={handleChange}
        />
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={personalDetails.email}
          className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone Number :</label>
        <input
          type="tel"
          id="phone"
          name="phoneNumber"
          value={personalDetails.phoneNumber}
          className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
          onChange={handleChange}
        />
        <label htmlFor="address">Address :</label>
        <input
          type="text"
          id="address"
          name="address"
          value={personalDetails.address}
          className="rounded-sm bg-slate-200 outline-none focus:outline-blue-500"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

Personal.propTypes = {
  personalDetails: PropTypes.object,
  handleChange: PropTypes.func,
};

export default Personal;
