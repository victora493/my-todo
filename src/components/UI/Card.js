import React from 'react'

export default function Card({ children, title }) {
    return (
        <div className='todolist'>
            <h1>{title || 'title'}</h1>
            {children}
        </div>
    )
}
