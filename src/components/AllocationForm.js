import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

        setName('');
        setCost('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <div className='form-group'>
                        <label htmlFor='name'>Department</label> {/* Changed for to htmlFor */}
                        <input
                            required='required'
                            type='text'
                            className='form-control'
                            id='name'
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                </div>
                <div className='col-sm'>
                    <div className='form-group'>
                        <label htmlFor='cost'>Cost</label> {/* Changed for to htmlFor */}
                        <input
                            required='required'
                            type='number'
                            className='form-control'
                            id='cost'
                            value={cost}
                            onChange={(event) => setCost(event.target.value)}
                        />
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
