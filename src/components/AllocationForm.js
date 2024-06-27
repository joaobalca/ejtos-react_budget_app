import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch, remaining, currency } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('Add');

    const onSubmit = (event) => {
        event.preventDefault();

        if (isNaN(cost)) {
            alert("Please enter a valid number");
            return;
        }

        if (cost > remaining) {
            alert(`The value cannot exceed remaining funds ${currency}${remaining}`);
            return;
        }

        const expense = {
            name,
            cost: parseInt(cost),
        };

        if (action === 'Add') {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        }

        setName('');
        setCost('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <div className='form-group'>
                        <label htmlFor='name'>Department</label>
                        <select
                            required
                            className='form-control'
                            id='name'
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        >
                            <option value=''>Choose...</option>
                            <option value='Marketing'>Marketing</option>
                            <option value='Finance'>Finance</option>
                            <option value='Sales'>Sales</option>
                            <option value='Human Resource'>Human Resource</option>
                            <option value='IT'>IT</option>
                        </select>
                    </div>
                </div>
                <div className='col-sm'>
                    <div className='form-group'>
                        <label htmlFor='cost'>Value</label>
                        <div className='input-group'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text'>{currency}</span>
                            </div>
                            <input
                                required
                                type='number'
                                className='form-control'
                                id='cost'
                                value={cost}
                                onChange={(event) => setCost(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-sm'>
                    <div className='form-group'>
                        <label htmlFor='action'>Allocation</label>
                        <select
                            required
                            className='form-control'
                            id='action'
                            value={action}
                            onChange={(event) => setAction(event.target.value)}
                        >
                            <option value='Add'>Add</option>
                            <option value='Reduce'>Reduce</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AllocationForm;
