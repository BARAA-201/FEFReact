import React from 'react'

const Device = ({laptop}) => {
    return (
        <div>
            <h4><strong>{laptop.device}</strong></h4>
            <div>{laptop.year}</div>
        </div>
    )
}

export default Device 