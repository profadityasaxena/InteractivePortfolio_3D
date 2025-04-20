import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

const App = () => {
    return (
        <>
            <CustomCursor />
            <Hero />
            <ShowcaseSection />
        </>
    )
}
export default App
