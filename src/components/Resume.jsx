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
      <section className="bg-white">
        <div className="mx-10">
          <div className="pt-8">
            <h2 className="bg-slate-200 text-center">Education</h2>
          </div>
          <div className="flex w-full space-x-10">
            <div className="w-1/4 space-y-2 p-2">
              <p>
                {(() => {
                  var [startDate, endDate] = [
                    personalDetails.startDate,
                    personalDetails.endDate,
                  ];
                  startDate = startDate
                    ? Intl.DateTimeFormat("en-GB", {
                        dateStyle: "short",
                      }).format(new Date(personalDetails.startDate))
                    : "";
                  endDate =
                    endDate === ""
                      ? ""
                      : endDate ===
                            Intl.DateTimeFormat("fr-CA").format(new Date()) ||
                          endDate === "present"
                        ? "present"
                        : Intl.DateTimeFormat("en-GB", {
                            dateStyle: "short",
                          }).format(new Date(personalDetails.endDate));
                  return `${startDate} - ${endDate}`;
                })()}
              </p>
              <p>{personalDetails.location}</p>
            </div>
            <div className="w-3/4 space-y-2 p-2">
              <p>{personalDetails.schoolName}</p>
              <p>{personalDetails.degree}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-10">
          <div className="pt-8">
            <h2 className="bg-slate-200 text-center">
              Professional Experience
            </h2>
          </div>
          <div className="flex w-full space-x-10">
            <div className="w-1/4 space-y-2 p-2">
              <p>
                {(() => {
                  var [emp_startDate, emp_endDate] = [
                    personalDetails.emp_startDate,
                    personalDetails.emp_endDate,
                  ];
                  emp_startDate = emp_startDate
                    ? Intl.DateTimeFormat("en-GB", {
                        dateStyle: "short",
                      }).format(new Date(personalDetails.emp_startDate))
                    : "";
                  emp_endDate =
                    emp_endDate === ""
                      ? ""
                      : emp_endDate ===
                            Intl.DateTimeFormat("fr-CA").format(new Date()) ||
                          emp_endDate === "present"
                        ? "present"
                        : Intl.DateTimeFormat("en-GB", {
                            dateStyle: "short",
                          }).format(new Date(personalDetails.emp_endDate));
                  return `${emp_startDate} - ${emp_endDate}`;
                })()}
              </p>
              <p>{personalDetails.workLocation}</p>
            </div>
            <div className="w-3/4 space-y-2 p-2">
              <p>{personalDetails.companyName}</p>
              <p>{personalDetails.position}</p>
              <p>{personalDetails.jobDescription}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Resume.propTypes = {
  personalDetails: PropTypes.object,
};

export default Resume;
