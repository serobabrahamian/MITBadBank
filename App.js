import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllData from './AllData';
import Navbar from './Navbar';
import CreateAccount from './CreateAccount';
import Login from './Login';
import Withdraw from './Withdraw';
import Balance from './Balance';
import Home from './Home';
import { CardProvider } from "./Context";
import Deposit from './Deposit';


function App() {
  return (
    <CardProvider>
      <Navbar className='container'/>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Home" element={<Home/>} />
              <Route path="/Createaccount" element={<CreateAccount/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Deposit" element={<Deposit/>} />
              <Route path="/Withdraw" element={<Withdraw/>} />
              <Route path="/Balance" element={<Balance/>} />
              <Route path="/AllData" element={<AllData/>} />
          </Routes>
          </div>
      </CardProvider>
  );
}

export default App;
