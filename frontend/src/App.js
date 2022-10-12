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
import SignUp from './pages/RegistrationSteps/SignUp/SignUp';
import AccountType from './pages/RegistrationSteps/AccountType/AccountType';
import BuildProfile from './pages/RegistrationSteps/BuildProfile/BuildProfile';
import Finish from './pages/RegistrationSteps/Finish/Finish';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/team-diary" element={<TeamDiary />}/>
        <Route path="/sign-in" element={<LogIn />}/>
        <Route path="/register/sign-up" element={<SignUp/>}/>
        <Route path="/register/account-type" element={<AccountType/>}/>
        <Route path="/register/build-profile" element={<BuildProfile/>}/>
        <Route path="/register/finish" element={<Finish/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
