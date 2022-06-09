import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Project from './Project';
import Skill from './Skill';


const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Skill />
            <Project />
            <Contact />
            <Footer />

        </div>
    );
};

export default Home;