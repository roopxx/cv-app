import { PropTypes } from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";

const Resume = ({ resumeData }) => {
  const [personal, educational, professional] = [
    resumeData[0][0],
    resumeData[1],
    resumeData[2],
  ];

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en-GB", {
      month: "short",
      year: "numeric",
    }).format(date);

  return (
    <div
      className="mx-auto my-10 border border-black bg-white"
      style={{ width: "210mm", height: "auto" }}
    >
      <section className="bg-cyan-950">
        <div className="py-16 text-center">
          <h1 className="mb-4 text-4xl text-white">
            {personal.firstName} {personal.lastName}
          </h1>
          <p className="flex justify-center gap-6 text-xl text-white">
            <span className="inline-flex items-center gap-1">
              <MdEmail />
              {personal.email}
            </span>
            <span className="inline-flex items-center gap-1">
              <MdPhoneIphone />
              {personal.phoneNumber}
            </span>
            <span className="inline-flex items-center gap-1">
              <FaAddressCard />
              {personal.address}
            </span>
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-10 space-y-2">
          <div className="pt-8">
            <h2 className="bg-slate-200 py-1 text-center text-xl font-medium uppercase">
              Education
            </h2>
          </div>
          {educational.map((info) => (
            <div key={uuidv4()}>
              <div className="flex w-full space-x-10">
                <div className="w-1/3 space-y-2 p-2">
                  <p>
                    {(() => {
                      var [startDate, endDate] = [
                        formatDate(info.startDate),
                        formatDate(info.endDate),
                      ];

                      endDate ==
                      new Intl.DateTimeFormat("en-GB", {
                        dateStyle: "short",
                      }).format(new Date())
                        ? endDate
                        : "Present";

                      return `${startDate} - ${endDate}`;
                    })()}
                  </p>
                  <p>{info.location}</p>
                </div>
                <div className="w-3/4 space-y-2 p-2">
                  <p className="text-lg font-medium">{info.schoolName}</p>
                  <p className="text-lg">{info.degree}</p>
                </div>
              </div>
              <hr className="border" />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-10 space-y-4">
          <div className="pt-8">
            <h2 className="bg-slate-200 py-1 text-center text-xl font-medium uppercase">
              Professional Experience
            </h2>
          </div>
          {professional.map((info) => (
            <div key={uuidv4()}>
              <div className="flex w-full space-x-10">
                <div className="w-1/3 space-y-2 p-2">
                  <p>
                    {(() => {
                      var [emp_startDate, emp_endDate] = [
                        formatDate(info.emp_startDate),
                        formatDate(info.emp_endDate),
                      ];

                      if (
                        emp_endDate ==
                        new Intl.DateTimeFormat("en-GB", {
                          dateStyle: "short",
                        }).format(new Date())
                      ) {
                        emp_endDate = "Present";
                      }

                      return `${emp_startDate} - ${emp_endDate}`;
                    })()}
                  </p>
                  <p>{info.workLocation}</p>
                </div>
                <div className="w-3/4 space-y-0.5 p-2">
                  <p className="text-lg font-medium">{info.companyName}</p>
                  <p className="text-lg">{info.position}</p>
                  <p>
                    {info.jobDescription.split(". ").map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                  </p>
                </div>
              </div>
              <hr className="border" />
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
