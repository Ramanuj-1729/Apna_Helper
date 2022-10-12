import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Navigation from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import SignUp from './pages/SignUp/SignUp';
import TeamDiary from './pages/TeamDiary/TeamDiary';
import LogIn from './pages/LogIn/LogIn';
import AccountType from './components/AccountType/AccountType';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/team-diary" element={<TeamDiary />}/>
        <Route path="/sign-in" element={<LogIn />}/>
        <Route path="/sign-up/account-type" element={<AccountType/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
