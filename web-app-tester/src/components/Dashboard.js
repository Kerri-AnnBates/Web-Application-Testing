import React, { useState } from 'react'
import Display from './Display';

export default function Dashboard() {

    const [strikeCount, setStrikeCount] = useState(0);
    const [ballCount, setBallCount] = useState(0);

    const handleStrikeCount = () => {
        let newCount = strikeCount;
        setStrikeCount(newCount += 1);
    }

    const handleBallCount = () => {
        let newCount = ballCount
        setBallCount(newCount+=1)
    }

    const handleHit = () => {
        setBallCount(0);
        setStrikeCount(0);
    }
    
    const handleFoul = () => {

    }
    return (
        <div>
            <Display strikeCount={strikeCount} ballCount={ballCount} />
            <button onClick={handleStrikeCount}>Strike</button>
            <button onClick={handleBallCount}>Ball</button>
            <button>Foul</button>
            <button onClick={handleHit}>Hit</button>
        </div>
    )
}
