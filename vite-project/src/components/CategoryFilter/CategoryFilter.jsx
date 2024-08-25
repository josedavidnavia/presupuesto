import React, { useState } from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ onCategoryChange }) => {
    const [selectedCategory, setSelectedCategory] = useState("Todas las Categorías");

    const handleChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        onCategoryChange(category); // Notifica el cambio de categoría al componente padre
    };

    return (
        <div className="category-filter">
            <label htmlFor="category-select">Filtro de Categorías:</label>
            <select
                id="category-select"
                value={selectedCategory}
                onChange={handleChange}
            >
                <option value="Todas las Categorías">Todas las Categorías</option>
                <option value="Comida">Comida</option>
                <option value="Casa">Casa</option>
            </select>
        </div>
    );
};

export default CategoryFilter;
