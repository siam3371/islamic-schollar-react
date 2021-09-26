import React from 'react';
import './Preahcer.css'
const Preacher = (props) => {
    const {name} = props.preacher
    return (
        <div>
            <li>
            <p>{name}</p> 
            </li>
        </div>
    );
};

export default Preacher;