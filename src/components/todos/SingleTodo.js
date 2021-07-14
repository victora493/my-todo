import React from 'react'

export default function SingleTodo({text}) {
    // const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

    // <li className={className}>
    return (
        <li className='todo-item ui-state-default '>
            <div className="checkbox">
                <input type="checkbox"/>
                <label>
                    {text}
                </label>
            </div>
        </li>
    )
}
