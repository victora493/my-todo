import React, { useState } from 'react'
import Card from '../UI/Card'
import Input from '../UI/Input'
import SingleTodo from './SingleTodo'
import FilterTodos from './FilterTodos'


const sampleTodos = [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false
        },
        {
            id: 3,
            text: 'Build a React App',
            completed: false
        }
    ]


export default function Todos() {
    const [activeFilter, setActiveFilter] = useState('all')

    function handleFilterChange(filter) {
        setActiveFilter(filter)
    }

    return (
        <div>
            <Card title="todo list">
                <Input/>
                <FilterTodos activeFilter={activeFilter} handleFilterChange={handleFilterChange}/>
                <ul className='list'>
                {sampleTodos.map(todo => {
                    return <SingleTodo key={todo.id} completed={todo.completed} text={todo.text}/>
                })}
                </ul>
            </Card>
        </div>
    )
}
