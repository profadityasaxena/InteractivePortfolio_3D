import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import Navbar from "./components/Navbar.jsx";
import LogoSection from "./components/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";

const App = () => {
    return (
        <>
            <CustomCursor />
            <Navbar/>
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <FeatureCards/>
        </>
    )
}
export default App
