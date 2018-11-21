import React from 'react'

export default props => (
    <li className='treeview'>
        <a href>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
            <span className='pull-right-container'>
                <i className='fa fa-angle-left pull-right'></i>
            </span>
        </a>
        <ul className='treeview-menu'>
            {props.children}
        </ul>
    </li>
)