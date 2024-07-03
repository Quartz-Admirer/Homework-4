import React from 'react';
import AboutComponent from './AboutComponent';
import PortfolioComponent from './PortfolioComponent';
import ContactComponent from './ContactComponent';

const MainPage: React.FC = () => {
    return (
        <main>
            <AboutComponent />
            <PortfolioComponent />
            <ContactComponent />
        </main>
    );
};

export default MainPage;
