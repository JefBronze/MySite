import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowText(true);
        }, 3000);
    }, []);

    return (
        <div className="hero">
            <img src="https://i.imgur.com/mtj10sP.png" alt="Your alt text"/>
            {showText && <h1 className="neon-text">Your Phrase Here</h1>}
        </div>
    );
}

export default Hero;
