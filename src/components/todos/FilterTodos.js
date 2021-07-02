import React from 'react'

export default function FilterTodos() {
    return (
        <div className='pull-right'>
            <div class="filters list-unlisted clearfix">
                <li>
                    <a className='selected'>All</a>
                </li>
                <li>
                    <a>Active</a>
                </li>
                <li>
                    <a>completed</a>
                </li>
                <li>
                    <a>important</a>
                </li>
            </div>            
        </div>
    )
}
