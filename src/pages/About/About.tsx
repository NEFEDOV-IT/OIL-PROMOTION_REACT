import React, {FC} from 'react';
import CustomizedAccordions from "./Accordion";
import {Projects} from "./Projects/Projects";
import './About.scss'
import Title from "./Title";
import Activities from "./Activities/Activities";

const About:FC = () => {
    return (
        <div className={'main'}>
            <div className="container">
                <Title/>
                <Projects/>
                <CustomizedAccordions/>
                <Activities/>
            </div>
        </div>
    );
};

export default About;
