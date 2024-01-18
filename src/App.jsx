import "./App.css";
import Header from "./components/Header";
import Personal from "./components/Personal";
import Resume from "./components/Resume";
import { useState } from "react";

function App() {
  const resumeData = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com",
    phoneNumber: "9876543210",
    address: "Chennai, India",
  };

  const [personalDetails, setPersonalDetails] = useState(resumeData);

  function handleChange(event) {
    setPersonalDetails({
      ...personalDetails,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="mx-auto w-4/5">
      <div className="w-full">
        <Header />
      </div>
      <div className="flex gap-6">
        <div className="w-1/3">
          <Personal
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
