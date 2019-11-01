import React from 'react'

export default function Display(props) {
    const { strikeCount, ballCount } = props;
    return (
        <div>
            <p>Strike count: {strikeCount} </p>
            <p>Ball count: {ballCount}</p>
        </div>
    )
}
