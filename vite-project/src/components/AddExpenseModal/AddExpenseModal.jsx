import React, { useState } from 'react';
import './AddExpenseModal.css';

const AddExpenseModal = ({ isOpen, onClose, onAddExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && category && date) {
      onAddExpense({ name, amount: parseFloat(amount), category, date });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Registrar Gasto</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre del gasto:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
          <label>
            Cantidad:
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              required 
            />
          </label>
          <label>
            Categoría:
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              required
            >
              <option value="">Selecciona una categoría</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
            </select>
          </label>
          <label>
            Fecha:
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
            />
          </label>
          <button type="submit">Registrar Gasto</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default AddExpenseModal;
