import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Loader = ({ onComplete }) => {
    const logoRef = useRef(null);

    useEffect(() => {
        const paths = logoRef.current.querySelectorAll('path');

        paths.forEach((path, index) => {
            const length = path.getTotalLength();
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            gsap.to(path, {
                strokeDashoffset: 0,
                duration: 4,
                ease: 'power2.inOut',
                delay: 0.2 + index * 0.3,
                onComplete: index === paths.length - 1 ? onComplete : null,
            });
        });
    }, [onComplete]);

    return (
        <div style={{
            backgroundColor: '#000',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999
        }}>
            <svg
                ref={logoRef}
                width="1200"
                height="400"
                viewBox="0 0 600 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g fill="none" stroke="#ffffff" strokeWidth="4">
                    <path d="M27.7,74 L36.2,49.3 L49.6,49.3 L58.1,74 L68.4,74 L52.1,28.2 L33.6,28.2 L17.2,74 Z M39.1,42.2 L42.8,31.4 L46.6,42.2 Z" />
                    <path d="M92.3,28.2 C79.9,28.2 72.1,35.8 72.1,47.1 C72.1,58.4 79.6,62.9 89.7,66.2 L92.4,67.1 C96.8,68.5 99.6,70.1 99.6,74.0 C99.6,77.6 96.8,79.9 92.4,79.9 C87.8,79.9 84.6,77.3 84.1,72.8 L73.9,72.8 C74.7,83.7 83.4,89.7 93.0,89.7 C103.3,89.7 110.7,83.6 110.7,74.0 C110.7,64.7 104.1,60.8 95.1,57.9 L92.1,56.9 C88.1,55.6 85.7,54.0 85.7,49.9 C85.7,45.8 89.0,42.8 93.8,42.8 C98.2,42.8 101.3,45.2 101.8,49.3 L112.0,49.3 C111.2,38.2 103.1,28.2 92.3,28.2 Z" />
                </g>
            </svg>
            <div className="text-xl">
                <h1>ADITYA SAXENA</h1>
            </div>

        </div>
    );
};

export default Loader;
