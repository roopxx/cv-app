import "./App.css";
import Header from "./components/Header";
import Personal from "./components/Personal";
import Educational from "./components/Educational";
import Professional from "./components/Professional";
import Resume from "./components/Resume";
import { useState } from "react";

function App() {
  const resumeData = [
    [
      {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@email.com",
        phoneNumber: "9876543210",
        address: "Chennai, India",
      },
    ],
    [
      {
        id: 1,
        schoolName: "Delhi University",
        degree: "M.C.A",
        startDate: new Date("2021-11-01"),
        endDate: new Date("2023-07-01"),
        location: "New Delhi, IN",
      },
      {
        id: 2,
        schoolName: "VIT Institute of Computer Sciences",
        degree: "B.Tech",
        startDate: new Date("2017-04-01"),
        endDate: new Date("2021-08-01"),
        location: "Chennai, IN",
      },
    ],
    [
      {
        id: 1,
        companyName: "AcSoft Enterprise",
        position: "Full-Stack Developer",
        emp_startDate: new Date("2022-07-01"),
        emp_endDate: new Date(),
        workLocation: "Bangalore, IN",
        jobDescription:
          "Developed and prototyped user interface patterns for various web applications in AcSoft Company, including self-service applications within the health sector to monitor and track consumer health records.",
      },
      {
        id: 2,
        companyName: "Capella Inc.",
        position: "Frontend Intern & UI Designer",
        emp_startDate: new Date("2021-11-01"),
        emp_endDate: new Date("2022-05-01"),
        workLocation: "Ahmedabad, IN",
        jobDescription:
          "Designed and developed responsive web pages using HTML, CSS, and JavaScript. Collaborated with UX/UI designers to ensure a consistent and user-friendly design across the website. Participated in team meetings and provided input on project planning and development strategies.",
      },
    ],
  ];

  const [templateData, setTemplateData] = useState(resumeData);

  function loadTemplate() {
    setTemplateData(resumeData);
  }

  function clearTemplate() {
    const clearedData = resumeData.map((section) =>
      section.map((item) => {
        Object.keys(item).forEach((key) => {
          if (item[key] instanceof Date) {
            item[key] = new Date();
          } else {
            item[key] = "";
          }
        });
        return item;
      }),
    );

    setTemplateData(clearedData);
  }

  function handleTemplateDataChange(changedData, index) {
    setTemplateData((prevTemplateData) => {
      const newTemplateData = [...prevTemplateData];
      newTemplateData[index] = changedData;
      return newTemplateData;
    });
  }

  return (
    <div className="mx-auto w-4/5">
      <div className="w-full">
        <Header loadTemplate={loadTemplate} clearTemplate={clearTemplate} />
      </div>
      <div className="flex gap-6">
        <div className="w-1/3">
          <Personal
            personalData={templateData[0]}
            handlePersonalInfoChange={handleTemplateDataChange}
          />
          <Educational
            educationalData={templateData[1]}
            handleEducationInfoChange={handleTemplateDataChange}
          />
          <Professional
            professionalData={templateData[2]}
            handleProfessionInfoChange={handleTemplateDataChange}
          />
        </div>
        <div className="w-full">
          <Resume resumeData={templateData} />
        </div>
      </div>
    </div>
  );
}

export default App;
