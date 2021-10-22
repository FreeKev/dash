import React from 'react'
import './Clock.css'
import { useState, useEffect } from 'react'
// From http://thenewcode.com/482/Placing-Text-on-a-Circle-with-SVG

export default function Clock() {

    const [time, setTime] = useState(new Date())

    function refreshClock() {
        setTime(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 60000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);


    return (
        <div className="absolute flex flex-1 justify-center h-full w-full">
            <div className="svg-container absolute flex flex-1 justify-center h-full w-full">
                <svg xmlnsXlink="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
                    <title>Animating Clock</title>
                    <defs>
                        <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
                            <animateTransform
                                attributeName="transform"
                                begin="0s"
                                dur="30s"
                                type="rotate"
                                from="0 250 250"
                                to="360 250 250"
                                repeatCount="indefinite" 
                                />
                        {/* <!-- SMIL animation: deprecated in Chrome, so eventually will have to be replaced with Web Animation API or alternative --> */}
                        </path>
                        {/* <symbol>
                            <rect x="225" y="135" width="50" height="230" id="redstripe"/>
                        </symbol> */}
                            <rect x="0" y="0" width="100" height="100" fill="red"></rect>
                            <text x="0" y="50" fontFamily="Verdana" fontSize="35" fill="white">Hello</text>
                    </defs>
                    <use xlinkHref="#redstripe" />
                    <use xlinkHref="#redstripe" transform="rotate(90 250 250)" />
                    <use xlinkHref="#redstripe" transform="rotate(45 250 250)" />
                    <use xlinkHref="#redstripe" transform="rotate(-45 250 250)" />
                    <text dy="70" textLength="1220">
                    {/* <!-- textLength (essentially the circumference of the circle) is used as an alternative to letter-spacing for Firefox, which currently doesn't support letter-spacing for SVG --> */}
                        <textPath xlinkHref="#textcircle">the days are evil      ✝     ✝     ✝</textPath>
                    </text>
                </svg>
            </div>
            {/* style={{ cursor: 'none' }} */}
            <div className="absolute flex flex-1 justify-center h-full w-full items-center font-bold text-center text-darkred" style={{ fontSize: 77 }}>
                    {time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    <br />
                    {String(time.getMonth() + 1).padStart(2, '0') + '/' + String(time.getDate()).padStart(2, '0')}
            </div>
        </div>
    )
}
