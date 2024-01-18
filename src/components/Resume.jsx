import { PropTypes } from "prop-types";

const Resume = ({ personalDetails }) => {
  return (
    <div className="mt-10 border border-black">
      <section className="bg-cyan-950">
        <div className="py-10 text-center">
          <h1 className="mb-2 text-3xl text-white">
            {personalDetails.firstName} {personalDetails.lastName}
          </h1>
          <p className="flex justify-center gap-4 text-xl text-white">
            <span>{personalDetails.email}</span>
            <span>{personalDetails.phoneNumber}</span>
            <span>{personalDetails.address}</span>
          </p>
        </div>
      </section>
    </div>
  );
};

Resume.propTypes = {
  personalDetails: PropTypes.object,
};

export default Resume;
