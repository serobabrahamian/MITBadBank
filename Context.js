import { createContext, useState } from "react";
import React from "react";

export const Context = createContext();

export function CardProvider({ children }) {
    const [balance, setBalance] = useState(0);
  
    const deposit = (amount) => {
      setBalance((prevBalance) => prevBalance + amount);
    };
  
    const withdraw = (amount) => {
      setBalance((prevBalance) => prevBalance - amount);
    };
  
    return (
      <Context.Provider value={{ balance, deposit, withdraw, users: [] }}>
        {children}
      </Context.Provider>
    );
  }
  
  export default CardProvider;


