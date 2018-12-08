import React from 'react'


export default props => (
    <li>
        <a href={props.path}>
            <i className={`fa fa-${props.icon}`}></i> 
            <span children={props.label}/>
        </a>
    </li>
)