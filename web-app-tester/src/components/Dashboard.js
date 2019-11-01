import React, { useState } from 'react'
import Display from './Display';

export default function Dashboard() {

    const [strikeCount, setStrikeCount] = useState(0);
    const [ballCount, setBallCount] = useState(0);

    const handleStrikeCount = () => {
        if (strikeCount < 2) {
            setStrikeCount(strikeCount + 1);
        } else {
            setStrikeCount(0);
        }
    }

    const handleBallCount = () => {
        if (ballCount < 3) {
            setBallCount(ballCount + 1)
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
            <button data-testid="strike" onClick={handleStrikeCount}>Strike</button>
            <button data-testid="ball" onClick={handleBallCount}>Ball</button>
            <button data-testid="foul" onClick={handleFoul}>Foul</button>
            <button data-testid="hit" onClick={handleHit}>Hit</button>
        </div>
    )
}
