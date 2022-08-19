import React, { FC } from "react";
import "./Projects.scss";
import resource1 from "../../../img/oil-sea.jpg";
import resource2 from "../../../img/oil_project.jpg";
import resource3 from "../../../img/oil_project2.jpg";
import Title from "./Title";

interface IProps {
  item: IProject;
}

interface IProject {
  img: string;
  name: string;
  text: string;
  id: number;
}

const dataProjects = [
  {
    img: `${resource1}`,
    name: 'Oil pitching "Volzhskoe"',
    text: "Floating installation for production, storage and offloading of oil. Oil has been produced daily for 13 years. Experienced specialists work on the installation in teams of 5 people.",
    id: 1,
  },
  {
    img: `${resource2}`,
    name: "Oil Mine in Perevozochny",
    text: "An oil mine is a complex of underground and surface structures, namely: two vertical shafts with a diameter of 4.5 to 8.0 m, a depth of 180-200 m (one lifting - for lowering - lifting people, materials and equipment); the second ventilation - for performing auxiliary operations, emergency descent - ascent).",
    id: 2,
  },
  {
    img: `${resource3}`,
    name: "Oil Pumping Machines in the Chuvash Republic",
    text: "Pumping units are installed and set up for maximum oil production. Typical oil pumps cope with their functions, provided that a force of 20-25 kW is applied.",
    id: 3,
  },
];

const BigProjectsItems: FC<IProps> = ({ item }) => {
  return (
    <div className="projects__item">
      <img className="projects__img" src={item.img} alt={item.name} />
      <hr />
      <h3>{item.name}</h3>
      <p>{item.text}</p>
    </div>
  );
};

export const Projects: FC = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects__body">
          <Title />
          <div className="projects__items">
            {dataProjects.map((item) => {
              return <BigProjectsItems item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
