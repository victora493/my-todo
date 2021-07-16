import React, {useState} from 'react'

export default function Input({ items, addItem }) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const hasError = checkErrors()
        if(hasError) return

        addItem(value)
        setValue('')
        setError('')
    }

    function checkErrors() {
        const isEmpty =  !value
        setError('Todo cannot be empty')
        if(isEmpty) return isEmpty
        
        const isRepeated =  items.some(item => item.text === value)
        setError('Todo is repeated, please choose another name')
        if(isRepeated) return isRepeated

        return false
    }

    function onInputChange(e) {
        setValue(e.target.value)
        setError('')
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
                    onChange={onInputChange}
                />
                {error && <p className="input-err">{error}</p>}
            </form>
        </>
    )
}
