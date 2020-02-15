import React from 'react';
import Header from './component/commonContainer/header';
import Footer from './component/commonContainer/footer';
import Main from './component/exerciseContainer/main'
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
      <Main /> 
    <Footer />
    </div>
  );
}

export default App;
