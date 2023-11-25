import { Route, Routes } from "react-router-dom";
import "./App.css";
import ApplicationDates from "./Pages/ApplicationDates";
import Header from "./Shared/Header";
import InquiryAboutAdmission from "./Pages/InquiryAboutAdmission";

import Login from "./Authentication/Login";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<SideBar />} /> */}
        <Route path="/" element={<Login />} />
        <Route
          path="InquiryAboutAdmission"
          element={<InquiryAboutAdmission />}
        />
        <Route path="AppDate" element={<ApplicationDates />} />

        <Route path="AppForm" element={<ApplicationForm />} />


      </Routes>
    </div>
  );
}

export default App;
