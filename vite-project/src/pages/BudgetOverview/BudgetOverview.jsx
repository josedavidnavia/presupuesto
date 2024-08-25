import React, { useState } from 'react';
import './BudgetOverview.css';
import CircularProgress from '../../components/CircularProgress/CircularProgress';
import ExpenseList from '../../components/ExpenseList/ExpenseList';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';

const BudgetOverview = ({ budget, onReset }) => {
    const [category, setCategory] = useState("Todas las Categorías");
    const expenses = []; // Aquí irían los gastos filtrados por categoría

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
        // Filtra los gastos aquí basándote en la categoría seleccionada
    };

    return (
        <div className="budget-overview">
            <h1 className="title">
                Planificador de Presupuesto
                <button className="reset-app-btn" onClick={onReset}>
                    Restablecer Aplicación
                </button>
            </h1>
            <div className="budget-summary">
                <CircularProgress percentage={50} /> {/* Ejemplo */}
                <div className="budget-details">
                    <p>Presupuesto: {budget}</p>
                    <p>Restante: {budget - 100}</p> {/* Ejemplo */}
                    <p>Gastos: 100</p> {/* Ejemplo */}
                </div>
            </div>
            <div className="expenses-section">
                <h2>Filtro de Categorías</h2>
                <CategoryFilter onCategoryChange={handleCategoryChange} />
                {expenses.length > 0 ? (
                    <ExpenseList expenses={expenses} />
                ) : (
                    <p>No hay gastos...</p>
                )}
            </div>
        </div>
    );
};

export default BudgetOverview;
