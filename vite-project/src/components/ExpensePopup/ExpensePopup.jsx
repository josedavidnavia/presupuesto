import React, { useState } from 'react';

const ExpensePopup = ({ onClose, onAddExpense }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('comida');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddExpense({ name, amount: parseInt(amount, 10), category });
        onClose();
    };

    return (
        <div className="popup">
            <form onSubmit={handleSubmit}>
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label>Cantidad</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <label>Categoría</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                </select>
                <button type="submit">Registrar Gasto</button>
            </form>
        </div>
    );
};

export default ExpensePopup;
