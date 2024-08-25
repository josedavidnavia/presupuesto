import React from 'react';
import './BudgetBar.css';

const BudgetBar = ({ amount, setAmount }) => {
    return (
        <div className="budget-bar">
            <button onClick={() => setAmount(amount - 1)}>-</button>
            <span>{amount}</span>
            <button onClick={() => setAmount(amount + 1)}>+</button>
        </div>
    );
};

export default BudgetBar;
