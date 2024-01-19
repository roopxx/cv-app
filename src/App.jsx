import "./App.css";
import Header from "./components/Header";
import Personal from "./components/Personal";
import Educational from "./components/Educational";
import Resume from "./components/Resume";
import { useState } from "react";

function App() {
  const resumeData = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com",
    phoneNumber: "9876543210",
    address: "Chennai, India",
    schoolName: "University of XYZ",
    degree: "A.B.C",
    startDate: "2020-01-01",
    endDate: "2024-12-01",
    location: "New Delhi, IN",
  };

  const [personalDetails, setPersonalDetails] = useState(resumeData);

  function handleChange(event) {
    setPersonalDetails({
      ...personalDetails,
      [event.target.name]: event.target.value,
    });
  }

  function loadTemplate() {
    setPersonalDetails(resumeData);
  }

  function clearTemplate() {
    const clearedDetails = Object.fromEntries(
      Object.keys(personalDetails).map((key) => [key, ""]),
    );
    setPersonalDetails(clearedDetails);
  }

  return (
    <div className="mx-auto w-4/5">
      <div className="w-full">
        <Header loadTemplate={loadTemplate} clearTemplate={clearTemplate} />
      </div>
      <div className="flex gap-6">
        <div className="w-1/3">
          <Personal
            personalDetails={personalDetails}
            handleChange={handleChange}
          />
          <Educational
            personalDetails={personalDetails}
            handleChange={handleChange}
          />
        </div>
        <div className="w-full">
          <Resume personalDetails={personalDetails} />
        </div>
      </div>
    </div>
  );
}

export default App;
