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
        schoolName: "University of XYZ",
        degree: "A.B.C",
        startDate: new Date("2020-01-01"),
        endDate: new Date("2024-12-01"),
        location: "New Delhi, IN",
      },
    ],
    [
      {
        id: 1,
        companyName: "XXX Company",
        position: "Developer Intern",
        emp_startDate: new Date("2010-01-01"),
        emp_endDate: new Date("2020-01-01"),
        workLocation: "Bangalore, IN",
        jobDescription:
          "Developed and prototyped user interface patterns for various web applications in XXX Company, including self-service applications within the health sector to monitor and track consumer health records.",
      },
    ],
  ];

  const [templateData, setTemplateData] = useState(resumeData);

  function loadTemplate() {
    setTemplateData(resumeData);
  }

  function clearTemplate() {
    const clearedDetails = templateData.map((section) =>
      section.map((item) => {
        const clearedItem = {};
        for (const [key, value] of Object.entries(item)) {
          clearedItem[key] = value instanceof Date ? new Date(0) : "";
        }
        return clearedItem;
      }),
    );
    setTemplateData(clearedDetails);
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
