import React, { FC } from 'react';
import { IProject } from "./Projects";

const BigProjectsItem: FC<IProject> = (item) => {
  return (
    <div className="projects__item">
      <img className="projects__img" src={item.img} alt={item.name} />
      <hr />
      <h3>{item.name}</h3>
      <p>{item.text}</p>
    </div>
  );
};

export default BigProjectsItem;