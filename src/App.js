import React, { useState, createContext } from 'react';
import './App.css';
import "98.css";
import Window from './components/window';

export const AppContext = createContext();

function App() {
  // WINDOW SIZE MATCH BOOLEAN
  // const [matches] = useState(
  //   window.matchMedia("(min-width: 768px)").matches
  // )
  
  // USE STATE EXAMPLE
  // const [display, setDisplay] = useState(false);

  return (
    //IF STATE IS USED - ADD THIS IN BELOW value={{ display, remember }}
    <AppContext.Provider >
      {/* POSITION: RELATIVE - SO THAT CHILDREN CAN BE ABSOLUTE AND LAYER? */}
      <div className="App" style={{position: 'relative'}}>
        <Window onClick={() => console.log("hihi")}/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
