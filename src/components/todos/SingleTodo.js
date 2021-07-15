import React, { useContext } from 'react'
import TodoContext from '../../store/todo-context'

export default function SingleTodo({text, id, completed}) {
    const { removeItem, toggleMarkAsDone } = useContext(TodoContext)

    function handleItemRemoval() {
        removeItem(id)
    }

    function handleCheckboxClick() {
        toggleMarkAsDone(id)
    }

    return (
        <li className='todo-item ui-state-default '>
            <div className="checkbox-wrapper">
                <input onChange={handleCheckboxClick} checked={completed} id={text} type="checkbox"/>
                <label htmlFor={text}>
                    {text}
                </label>
            </div>
            <button onClick={handleItemRemoval}>Delete</button>
        </li>
    )
}
