import React, {FC} from 'react';
import './Activities.scss'
import {dataActivities} from "./dataActivities";

interface IActivities {
    name: string;
    id: number;
}

const Activities: FC = () => {
    return (
        <div className={'activities__body'}>
            <h3>Main activities:</h3>
            <ul className={'activities__list'}>
                {dataActivities.map((item: IActivities) => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    );
};

export default Activities;
