import React, { useState, useEffect } from "react";

import desktopImage from '../Images/Main.jpeg';
import mobileImage from '../Images/MainMobile.jpg';

const LeftContent = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 1000 ? desktopImage : mobileImage;

    useEffect(() => {
        const scrollFunction = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('scroll', scrollFunction);

        return () => {
            window.removeEventListener('scroll', scrollFunction);
        }
    }, []);

    return(
        <div className="LeftContent" id="Main" style={{background: `url(${imageUrl}) center center/cover no-repeat `}}>
            <div className="LeftText">
                <h1>Marilin & Edgardo</h1>
                <p>¡Nos Casamos!</p>
            </div>
        </div>
    );
}


export default LeftContent;