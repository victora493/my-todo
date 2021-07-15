import React from 'react'

export default function FilterTodos({handleFilterChange, filters, activeFilter}) {
    return (
        <div className='filters-container'>
            <div className="filters list-unlisted clearfix">
                {filters.map((filter, i) => {
                    return <li key={i} onClick={() => handleFilterChange(filter)}>
                        <a className={activeFilter === filter ? 'selected' : ''}>{filter}</a>
                    </li>
                }
                )}
            </div>            
        </div>
    )
}
