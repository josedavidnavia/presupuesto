import React from 'react';
import { SwipeableList, SwipeableListItem } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
    return (
        <SwipeableList>
            {expenses.map((expense) => (
                <SwipeableListItem
                    key={expense.id}
                    swipeLeft={{
                        content: <div>Eliminar</div>,
                        action: () => console.log('Eliminar gasto', expense.id)
                    }}
                    swipeRight={{
                        content: <div>Editar</div>,
                        action: () => console.log('Editar gasto', expense.id)
                    }}
                >
                    <div className="expense-item">
                        <p>{expense.name}</p>
                        <span>${expense.amount}</span>
                    </div>
                </SwipeableListItem>
            ))}
        </SwipeableList>
    );
};

export default ExpenseList;
