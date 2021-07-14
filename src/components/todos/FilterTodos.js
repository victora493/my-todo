import React from 'react'

const filters = [
    'all',
    'active',
    'completed',
    'important',
]

export default function FilterTodos({handleFilterChange, activeFilter}) {
    return (
        <div className='filters-container'>
            <div class="filters list-unlisted clearfix">
                {filters.map(filter => {
                    return <li onClick={() => handleFilterChange(filter)}>
                        <a className={activeFilter === filter ? 'selected' : ''}>{filter}</a>
                    </li>
                }
                )}
            </div>            
        </div>
    )
}
