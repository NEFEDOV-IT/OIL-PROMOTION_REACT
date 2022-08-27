import React, { FC } from "react";
import "./Projects.scss";
import Title from "./Title";
import { dataProjects } from "./dataProjects";
import BigProjectsItem from "./BigProjectsItem";

export interface IProject {
  img: string;
  name: string;
  text: string;
  id: number;
}

export const Projects: FC = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects__body">
          <Title />
          <div className="projects__items">
            {dataProjects.map((item: IProject) => {
              return <BigProjectsItem {...item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
