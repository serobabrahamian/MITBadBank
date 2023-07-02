import React, { useState, useContext } from 'react';
import { Context } from './Context';
import Card from './Card';

function Withdraw() {
  const [amount, setAmount] = useState('');
  const { withdraw } = useContext(Context);
  const {balance}= useContext(Context);

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (amount > balance || amount == 0) {
      alert('You cannot withdraw that much, insufficient funds!');
      return;
      } 
    if (amount < 0) {
      alert('Please enter a positive number!')
    }
    withdraw(parseInt(amount)) 
    setAmount('');
  };

  return (
    <Card 
      bgcolor="primary"
      header= <p> Current Balance ${balance} </p>
      body={(
        <>
          <h2>Withdraw</h2>
          <form onSubmit={handleWithdraw}>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min = '0'
            />
            <button type="submit" disabled={!amount}>Withdraw</button>
          </form>
        </>
    )}
    />
  );
}

export default Withdraw;
