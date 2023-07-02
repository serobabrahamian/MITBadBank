import React, { useContext, useState } from 'react';
import { Context } from './Context';
import Card from './Card';


function Deposit() {
  const [amount, setAmount] = useState('');
  const { deposit } = useContext(Context);
  const { balance } = useContext(Context)

  const handleDeposit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      alert('Please enter a valid amount!');
      return;
    }
    
    deposit(parseInt(amount));
    setAmount('');
  };



  return (
    <Card 
        bgcolor="primary"
        header= <p> Current Balance ${balance} </p>
        body={(
          <>
          <h2>Deposit</h2>
          <form onSubmit={handleDeposit}>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min = "0"
            />
            <button type="submit" disabled={!amount} >Deposit</button>
            
            
          </form>
          </>
        )}
    />
    
  );
}

export default Deposit;