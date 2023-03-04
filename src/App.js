import React, { useState, createContext } from 'react';
import './App.css';
import "98.css";
import Products from './pages/Products';
import Locations from './pages/Locations';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './components/menu';

export const AppContext = createContext();

const renderPage = (selectedPage) => {
  switch (selectedPage) {
    case 'products': 
      return <Products />;
    case 'locations': 
      return <Locations />;    
    case 'about': 
      return <About />;
    default:
      return <Home/>;
  }

}

function App() {
  // WINDOW SIZE MATCH BOOLEAN
  // const [matches] = useState(
  //   window.matchMedia("(min-width: 768px)").matches
  // )
  
  // USE STATE EXAMPLE
  const [display, setDisplay] = useState(false);

  return (
    //IF STATE IS USED - ADD THIS IN BELOW value={{ display, remember }}
    <AppContext.Provider value={{ display, setDisplay }}>
      {/* POSITION: RELATIVE - SO THAT CHILDREN CAN BE ABSOLUTE AND LAYER? */}
      <div className="App" style={{position: 'relative'}}>
        <Menu />
        {renderPage(display)}
        {/* <div style={{height: "4%", width: "100%", backgroundColor: "#D9D9D9", position: "absolute", bottom: 0}}></div> */}
      </div>
    </AppContext.Provider>
  );
}

export default App;
