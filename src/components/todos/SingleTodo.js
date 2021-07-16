import React, { useContext } from 'react'
import TodoContext from '../../store/todo-context'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

export default function SingleTodo({text, id, completed, important}) {
    const { removeItem, toggleMarkAsDone, toggleMarkAsImportant } = useContext(TodoContext)

    function handleItemRemoval() {
        removeItem(id)
    }
    function handleCheckboxClick() {
        toggleMarkAsDone(id)
    }
    function handleStarClick() {
        toggleMarkAsImportant(id)
    }

    return (
        <li className='todo-item ui-state-default '>
            <div className="checkbox-wrapper">
                <input onChange={handleCheckboxClick} checked={completed} id={text} type="checkbox"/>
                <label htmlFor={text}>
                    {text}
                </label>
            </div>
            <div className="buttons">
                <div onClick={handleStarClick} className="start-container">
                    {important ? <AiFillStar className='start-btn selected'/>  : <AiOutlineStar className='start-btn'/>}
                </div>
                <button onClick={handleItemRemoval}>Delete</button>
            </div>
        </li>
    )
}
