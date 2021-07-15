import React, {useState} from 'react'

export default function Input({ addItem }) {
    const [value, setValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        addItem(value)
        setValue('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    autoFocus
                    type="text"
                    className="form-control add-todo"
                    placeholder="Add New"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </>
    )
}
