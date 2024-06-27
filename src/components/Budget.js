import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    const handleBudgetChange = (event) => {
        const newBudget = event.target.value;

        if (newBudget > 20000) {
            alert("The value cannot exceed 20000");
            return;
        }

        if (newBudget < totalExpenses) {
            alert(`You cannot reduce the budget value lower than the spending`);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(newBudget),
        });
    };

    return (
        <div className='alert alert-secondary d-flex align-items-center'>
            <span>Budget: {currency}</span>
            <input
                type='number'
                className='form-control ml-2'
                value={budget}
                min={totalExpenses}
                max='20000'
                step='10'
                onChange={handleBudgetChange}
                style={{ width: '100px' }}
            />
        </div>
    );
};

export default Budget;
