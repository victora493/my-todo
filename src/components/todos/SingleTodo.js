import React, { useContext } from 'react'
import TodoContext from '../../store/todo-context'

export default function SingleTodo({text, id, completed}) {
    const { removeItem } = useContext(TodoContext)

    function handleItemRemoval() {
        removeItem(id)
    }

    return (
        <li className='todo-item ui-state-default '>
            <div className="checkbox-wrapper">
                <input defaultChecked={completed} id={text} type="checkbox"/>
                <label htmlFor={text}>
                    {text}
                </label>
            </div>
            <button onClick={handleItemRemoval}>Delete</button>
        </li>
    )
}
