import React, { useState } from 'react';
import Hero from './sections/Hero.jsx';
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import LogoSection from './components/LogoSection.jsx';
import FeatureCards from './sections/FeatureCards.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import Loader from './components/Loader.jsx';

const App = () => {
    const [loading, setLoading] = useState(true);

    const handleLoaderFinish = () => {
        setLoading(false);
    };

    return (
        <>
            {loading && <Loader onComplete={handleLoaderFinish} />}
            {!loading && (
                <>
                    <CustomCursor />
                    <Navbar />
                    <Hero />
                    <ShowcaseSection />
                    <LogoSection />
                    <FeatureCards />
                    <ExperienceSection />
                </>
            )}
        </>
    );
};

export default App;
