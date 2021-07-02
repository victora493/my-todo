import React from 'react'

export default function SingleTodo() {
    // const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

    // <li className={className}>
    return (
        <li className='todo-item ui-state-default '>
            <div className="checkbox">
                <label>
                    <input type="checkbox"/>
                </label>
            </div>
        </li>
    )
}
