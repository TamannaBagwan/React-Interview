import React from 'react'

const ConditionalRenderer = ({ value }) => {
    if (typeof value === 'number') {
        return <span>{value}</span>;
    }
    if (typeof value === 'string') {
        return <div> {value} </div>
    }

    if (Array.isArray) {
        return (
            <ul>
                {value.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )
    }
    return null;

}

export default ConditionalRenderer 
