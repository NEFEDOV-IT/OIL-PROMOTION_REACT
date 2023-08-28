import React, { FC } from "react";
import CustomizedAccordions from "./Accordion";
import { Projects } from "./Projects/Projects";
import "./About.scss";
import Activities from "./Activities/Activities";
import Page from "../../components/Page/Page";

const subTitleText = (
  <p className={"about__body-subtitle"}>
    Our company is engaged in oil production for further deliveries
    throughout the Russian Federation and neighboring countries. The CEO of
    the company has an impressive experience in organizing the work of oil
    production and delivery. Oil Promotion LTD. carries out a stable
    delivery of fuels and lubricants for the needs of the public sector, the
    population and small wholesale consumers in the region. The company has
    been operating in the system of oil production and oil products supply
    for more than 20 years. The company owns a fleet of fuel trucks and
    railway tanks.
  </p>
)
const About: FC = () => {
  return (
    <Page
      title={'About'}
      titleClass={'about__title'}
    >
      <div className="about__body">
        {subTitleText}
        <Projects />
        <CustomizedAccordions />
        <Activities />
      </div>
    </Page>
  );
};

export default About;
