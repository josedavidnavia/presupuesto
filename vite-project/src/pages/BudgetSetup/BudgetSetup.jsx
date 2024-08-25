import React, { useState } from 'react';
import './BudgetSetup.css';
import BudgetBar from '../../components/BudgetBar/BudgetBar';

const BudgetSetup = ({ onBudgetSet }) => {
    const [amount, setAmount] = useState(0);

    const handleSetBudget = () => {
        if (amount > 0) {
            onBudgetSet(amount);
        }
    };

    return (
        <div className="budget-setup">
            <h1 className="title">Planificador de Presupuesto</h1>
            <BudgetBar amount={amount} setAmount={setAmount} />
            <button
                className="set-budget-btn"
                onClick={handleSetBudget}
                disabled={amount <= 0}
            >
                Definir Presupuesto
            </button>
        </div>
    );
};

export default BudgetSetup;
