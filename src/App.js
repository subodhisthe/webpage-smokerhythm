import React from 'react';
import Header from './components/Header';
import LocationDetails from './components/LocationDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        <LocationDetails />
      </main>
      <Footer />
    </div>
  );
}

export default App;
