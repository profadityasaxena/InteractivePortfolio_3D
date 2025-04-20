import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const moveCursor = (e) => {
            const { clientX, clientY } = e;
            cursor.style.left = `${clientX}px`;
            cursor.style.top = `${clientY}px`;
        };

        const handleMouseEnter = () => cursor.classList.add('cursor-hover');
        const handleMouseLeave = () => cursor.classList.remove('cursor-hover');

        // Follow mouse
        document.addEventListener('mousemove', moveCursor);

        // Enlarge on link hover
        const links = document.querySelectorAll('a, button, .hover-target');
        links.forEach(link => {
            link.addEventListener('mouseenter', handleMouseEnter);
            link.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            links.forEach(link => {
                link.removeEventListener('mouseenter', handleMouseEnter);
                link.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;
