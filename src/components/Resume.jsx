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

  const formatDate = (date) => {
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);

    const today = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date());

    if (formattedDate === today) return "Present";

    return formattedDate;
  };

  return (
    <div className="mx-auto mb-8 min-h-[297mm] border border-black bg-white md:w-auto md:max-w-[210mm] lg:mt-10 print:m-0 print:border-none">
      <section className="bg-cyan-950 text-white print:border-b-2">
        <div className="py-10 text-center md:py-12">
          <h1 className="mb-4 text-2xl sm:text-4xl">
            {personal.firstName} {personal.lastName}
          </h1>
          <p className="flex justify-center gap-2 text-xs sm:gap-3 sm:text-sm md:gap-6 md:text-xl">
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
        <div className="mx-2 space-y-1 md:mx-10 md:space-y-2">
          <div className="pt-5 md:pt-8">
            <h2 className="bg-slate-200 py-1 text-center font-medium uppercase sm:text-xl">
              Education
            </h2>
          </div>
          {educational.map((info) => (
            <div key={uuidv4()}>
              <div className="flex space-x-4 md:space-x-10">
                <div className="w-[45%] space-y-2 p-2 sm:w-2/5 md:w-1/3">
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
                <div className="w-4/5 space-y-2 p-2 md:w-3/4">
                  <p className="font-medium sm:text-lg">{info.schoolName}</p>
                  <p className="sm:text-lg">{info.degree}</p>
                </div>
              </div>
              <hr className="border" />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-2 space-y-1 md:mx-10 md:space-y-4">
          <div className="pt-8">
            <h2 className="bg-slate-200 py-1 text-center font-medium uppercase sm:text-xl">
              Professional Experience
            </h2>
          </div>
          {professional.map((info) => (
            <div key={uuidv4()}>
              <div className="flex space-x-4 md:space-x-10">
                <div className="w-[45%] space-y-2 p-2 sm:w-2/5 md:w-1/3">
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
                <div className="w-4/5 space-y-1 p-2 md:w-3/4">
                  <p className="font-medium sm:text-lg">{info.companyName}</p>
                  <p className="sm:text-lg">{info.position}</p>
                  <p className="text-sm sm:text-lg">
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
