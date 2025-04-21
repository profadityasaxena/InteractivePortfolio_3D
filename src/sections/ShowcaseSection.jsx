import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);

    useGSAP(() => {
        const cards = [project1Ref.current, project2Ref.current, project3Ref.current, project4Ref.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut",
                    delay: index * 0.4,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "bottom 85%",
                        toggleActions: "play none none none"
                        // scrub: true, // Optional: use only if animations are continuous
                        // pin: true,   // ⚠️ REMOVE unless each element is full-screen and isolated
                    }
                }
            );
        });
    }, []);




    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT SIDE */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Ryde App Interface" />
                        </div>
                        <div className="text-content">
                            <h2>
                                Bajaj Manless Engine Assembly Project: Fully Automated Industry 4.0 MES System
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                The Bajaj manless engine assembly project is an advanced automation initiative aimed at streamlining the engine manufacturing process with minimal human intervention. Utilizing robotic arms, automated guided vehicles (AGVs), and AI-powered inspection systems, the project ensures high precision and efficiency. This innovation significantly reduces labor costs while enhancing product consistency and quality. The manless system operates in a synchronized manner, handling complex assembly tasks that traditionally required skilled technicians. Bajaj's implementation of this project marks a major step forward in smart manufacturing within the Indian automotive sector.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#FFE7D6]">
                                <img src="/images/project3.png" alt="Machine Learning and Azure Stock Market Prediction" />
                            </div>
                            <h2>TechDeck - Business Directory Listing</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#DCF5F2]">
                                <img src="/images/project4.png" alt="Care Connect: find a family doctor" />
                            </div>
                            <h2>Care Connect - Health care application for Canadian Ecosystem</h2>
                        </div>
                        <div className="project" ref={project4Ref}>
                            <div className="image-wrapper bg-[#F7F1FF]">
                                <img src="/images/project2.png" alt="Smart City Sustainability Simulation" />
                            </div>
                            <h2>Stock Sage - AI/ML/Cloud Stock Market App</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
