import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Navigation from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import TeamDiary from './pages/TeamDiary/TeamDiary';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/Registration/RegistrationSteps/SignUp/SignUp';
import AccountType from './pages/Registration/RegistrationSteps/AccountType/AccountType';
import BuildProfile from './pages/Registration/RegistrationSteps/BuildProfile/BuildProfile';
import Finish from './pages/Registration/RegistrationSteps/Finish/Finish';
import Registration from './pages/Registration/Registration';
import ProfilePicture from './pages/Registration/RegistrationSteps/BuildProfile/BuildProfileSteps/ProfilePicture/ProfilePicture';
import MobileNumber from './pages/Registration/RegistrationSteps/BuildProfile/BuildProfileSteps/MobileNumber/MobileNumber';
import Verification from './pages/Registration/RegistrationSteps/BuildProfile/BuildProfileSteps/Verification/Verification';
import { useState } from 'react';

function App() {
  const [showNav, setShowNav] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  return (
    <Router>
      {showNav &&
        <Navigation />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="team-diary" element={<TeamDiary />} />
        <Route path="log-in" element={<LogIn funcNav={setShowNav} />} />
        <Route path="register" element={<Registration  funcNav={setShowNav} />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="account-type" element={<AccountType />} />
          <Route path="build-profile" element={<BuildProfile />}>
            <Route path="profile-picture" element={<ProfilePicture />} />
            <Route path="mobile-number" element={<MobileNumber />} />
            <Route path="verification" element={<Verification />} />
          </Route>
          <Route path="finish" element={<Finish />} />
        </Route>

      </Routes>
      {showFooter &&
        <Footer />
      }
    </Router>
  );
}

export default App;
