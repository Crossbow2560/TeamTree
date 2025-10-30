import './LandingPage.css';
import { useRef, useState, useEffect } from 'react';
import { animate, createScope, linear } from 'animejs';

function LandingPage({onButtonClick}) {
    const scope = useRef(null)
    const root = useRef(null)

    useEffect(() => {
        scope.current = createScope({root})
        scope.current.add(self => {
            animate(
                '#get-started',
                {
                    scale: 1.05,
                    ease: 'inOutSine',
                    loop: true,
                    alternate: true,
                }
            )
        })

        return () => scope.current.revert();
    }, [])

    const handleButtonClick = () => {
        onButtonClick();
    }
    return(
        <div id='landing-page-container' ref={root}>
            <div id="header">TeamTree</div>
            <div id='sub-header'>Ideate. Collaborate. Innovate</div>
            <div id='button-container'>
                <div id='get-started' onClick={handleButtonClick}>Get Started</div>
            </div>
        </div>
    )
}

export default LandingPage