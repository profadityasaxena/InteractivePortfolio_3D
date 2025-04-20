import React from 'react'

const ShowcaseSection = () => {
    return (
        <div id="work" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div className="first-project-wrapper">
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
                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection
