import React, { useState, useContext } from 'react'
import Card from '../UI/Card'
import Input from '../UI/Input'
import SingleTodo from './SingleTodo'
import FilterTodos from './FilterTodos'
import TodoContext from '../../store/todo-context'

const filters = [
    'all',
    'active',
    'completed',
    'important',
]

export default function Todos() {
    const {items, addItem} = useContext(TodoContext)
    const [activeFilter, setActiveFilter] = useState(filters[0])

    function handleFilterChange(filter) {
        setActiveFilter(filter)
    }

    function renderTodos() {
        if(items.length === 0) return <p>There are no todos</p>

        return (items?.map(todo =>  <SingleTodo key={todo.id} id={todo.id} completed={todo.completed} text={todo.text}/>))
    }

    return (
        <div>
            <Card title="todo list">
                <Input addItem={addItem}/>
                <FilterTodos filters={filters} activeFilter={activeFilter} handleFilterChange={handleFilterChange}/>
                <ul className='list'>
                {renderTodos()}
                </ul>
            </Card>
        </div>
    )
}
