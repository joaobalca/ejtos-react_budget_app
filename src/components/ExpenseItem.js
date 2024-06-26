import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleIncrease = () => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: { name: props.name, cost: 10 },
        });
    };

    const handleDecrease = () => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: { name: props.name, cost: 10 },
        });
    };

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button className='btn btn-success btn-sm' onClick={handleIncrease}>
                    +
                </button>
            </td>
            <td>
                <button className='btn btn-danger btn-sm' onClick={handleDecrease}>
                    -
                </button>
            </td>
            <td>
                <button className='btn btn-danger btn-sm' onClick={handleDeleteExpense}>
                    x
                </button>
            </td>
        </tr>
    );
};

export default ExpenseItem;
