import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
    return (
        <>
            <CustomCursor />
            <Navbar/>
            <Hero />
            <ShowcaseSection />
        </>
    )
}
export default App
