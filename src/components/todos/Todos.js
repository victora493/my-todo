import React, { useState, useContext, useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom";
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

    let { hash } = useLocation();
    let history = useHistory();

    useEffect(() => {
        setActiveFilter(hash.slice(1))
    }, [items])

    function handleFilterChange(filter) {
        // need to actually filter the data
        setActiveFilter(filter)
        history.push(`#${filter}`)
    }

    function computeFilterLogic(item) {
        switch(activeFilter) {
            case 'active':
                return item.completed === false
            case 'completed':
                return item.completed === true
            case 'important':
                return item.important === true
            default:
                return item
        }
    }

    function renderTodos() {
        
        let itemsFiltered = [...items]
        if(activeFilter !== 'all') itemsFiltered = items.filter(item => computeFilterLogic(item))
        
        if(itemsFiltered.length === 0) return <p>There are no todos</p>
        return (itemsFiltered?.map(todo =>  <SingleTodo key={todo.id} id={todo.id} important={todo.important} completed={todo.completed} text={todo.text}/>))
    }

    return (
        <div>
            <Card title="todo list">
                <Input items={items} addItem={addItem}/>
                <FilterTodos filters={filters} activeFilter={activeFilter} handleFilterChange={handleFilterChange}/>
                <ul className='list'>
                    {renderTodos()}
                </ul>
            </Card>
        </div>
    )
}
