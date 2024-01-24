import { PropTypes } from "prop-types";

const Resume = ({ resumeData }) => {
  const [personal, educational, professional] = [
    resumeData[0][0],
    resumeData[1],
    resumeData[2],
  ];
  return (
    <div className="mt-10 border border-black">
      <section className="bg-cyan-950">
        <div className="py-10 text-center">
          <h1 className="mb-2 text-3xl text-white">
            {personal.firstName} {personal.lastName}
          </h1>
          <p className="flex justify-center gap-4 text-xl text-white">
            <span>{personal.email}</span>
            <span>{personal.phoneNumber}</span>
            <span>{personal.address}</span>
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-10">
          <div className="pt-8">
            <h2 className="bg-slate-200 text-center">Education</h2>
          </div>
          {educational.map((info) => (
            <div key={info.id}>
              <div className="flex w-full space-x-10">
                <div className="w-1/4 space-y-2 p-2">
                  <p>
                    {(() => {
                      var [startDate, endDate] = [
                        Intl.DateTimeFormat("en-GB", {
                          dateStyle: "short",
                        }).format(new Date(info.startDate)),
                        Intl.DateTimeFormat("en-GB", {
                          dateStyle: "short",
                        }).format(new Date(info.endDate)),
                      ];
                      console.log("Start Date:", info.startDate);
                      console.log("End Date:", info.endDate);

                      return `${startDate} - ${endDate}`;
                    })()}
                  </p>
                  <p>{info.location}</p>
                </div>
                <div className="w-3/4 space-y-2 p-2">
                  <p>{info.schoolName}</p>
                  <p>{info.degree}</p>
                </div>
              </div>
              <hr className="border" />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-10">
          <div className="pt-8">
            <h2 className="bg-slate-200 text-center">
              Professional Experience
            </h2>
          </div>
          {professional.map((info) => (
            <div key={info.id}>
              <div className="flex w-full space-x-10">
                <div className="w-1/4 space-y-2 p-2">
                  <p>
                    {(() => {
                      var [emp_startDate, emp_endDate] = [
                        Intl.DateTimeFormat("en-GB", {
                          dateStyle: "short",
                        }).format(new Date(info.emp_startDate)),
                        Intl.DateTimeFormat("en-GB", {
                          dateStyle: "short",
                        }).format(new Date(info.emp_endDate)),
                      ];
                      console.log("Start Date:", info.emp_startDate);
                      console.log("End Date:", info.emp_endDate);

                      return `${emp_startDate} - ${emp_endDate}`;
                    })()}
                  </p>
                  <p>{info.workLocation}</p>
                </div>
                <div className="w-3/4 space-y-2 p-2">
                  <p>{info.companyName}</p>
                  <p>{info.position}</p>
                  <p>{info.jobDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

Resume.propTypes = {
  resumeData: PropTypes.array,
};

export default Resume;
