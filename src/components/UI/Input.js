import React, {useState} from 'react'

export default function Input() {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    autoFocus
                    type="text"
                    className="form-control add-todo"
                    placeholder="Add New"
                />
            </form>
        </>
    )
}
