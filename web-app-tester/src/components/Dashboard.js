import React, { useState } from 'react'
import Display from './Display';

export default function Dashboard() {

    const [strikeCount, setStrikeCount] = useState(0);
    const [ballCount, setBallCount] = useState(0);

    const handleStrikeCount = () => {
        let newCount = strikeCount;
        if(newCount < 3) {
            setStrikeCount(newCount += 1);
        } else {
            setStrikeCount(0);
        }
    }

    const handleBallCount = () => {
        let newCount = ballCount
        
        if (newCount < 4) {
            setBallCount(newCount += 1)
        } else {
            setBallCount(0)
        }
    }

    const handleHit = () => {
        setBallCount(0);
        setStrikeCount(0);
    }
    
    const handleFoul = () => {
        let strikeNum = strikeCount;
        
        if(strikeNum < 2) {
            setStrikeCount(strikeNum += 1);
        }
    }

    return (
        <div>
            <Display strikeCount={strikeCount} ballCount={ballCount} />
            <button onClick={handleStrikeCount}>Strike</button>
            <button onClick={handleBallCount}>Ball</button>
            <button onClick={handleFoul}>Foul</button>
            <button onClick={handleHit}>Hit</button>
        </div>
    )
}
