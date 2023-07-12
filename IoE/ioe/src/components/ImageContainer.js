import React, { useState } from 'react';
import './ImageContainer.css';

function ImageContainer() {
    const [hover, setHover] = useState(false);

    return (
        <div className="image-container"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
            <img src="your_image_url" alt="Your alt text"/>
            {hover && <p>Your Description Here</p>}
        </div>
    );
}

export default ImageContainer;
