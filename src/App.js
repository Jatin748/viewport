import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Review from './components/Review';
import Solution from './components/Solution';
import Sharing from './components/Sharing';
import UseCases from './components/UseCases';
import Values from './components/Values';
import Contact from './components/Contact';

function App() {
  return (
    <div className="selection:bg-gray-400 md:space-y-10">
      <Header />
      <Hero />
      <Review />
      <Solution />
      <Sharing />
      <UseCases />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;