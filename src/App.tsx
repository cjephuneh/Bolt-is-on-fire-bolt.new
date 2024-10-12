import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Marketplace from './components/Marketplace';
import Payment from './components/Payment';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Marketplace />
            </>
          } />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;