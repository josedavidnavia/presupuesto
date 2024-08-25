import React, { useState } from 'react';
import Header from './components/Header/Header';
import CircularProgress from './components/CircularProgress/CircularProgress';
import ExpenseList from './components/ExpenseList/ExpenseList';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import FloatingButton from './components/FloatingButton/FloatingButton';
import AddExpenseModal from './components/AddExpenseModal/AddExpenseModal';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App">
      <Header />
      {/* Pantalla de Presupuesto */}
      <div className="content">
        <CircularProgress percentage={50} />
        <ExpenseList expenses={expenses} />
        <CategoryFilter />
      </div>
      <FloatingButton onClick={() => setModalOpen(true)} />
      <AddExpenseModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onAddExpense={handleAddExpense} 
      />
    </div>
  );
};

export default App;
