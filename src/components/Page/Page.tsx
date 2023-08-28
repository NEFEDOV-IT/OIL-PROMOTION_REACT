import React, { FC, ReactNode } from 'react';

interface IProps {
  title?: string;
  titleClass?: string;
  children: JSX.Element | ReactNode,
}

const Page: FC<IProps> = ({ title, titleClass, children }) => {
  return (
    <main className={"main"}>
      <div className={'container'}>
        {title ?
          <h1 className={`root__title ${titleClass ? titleClass : ''}`}>
            {title}
          </h1>
          : null
        }
        {children}
      </div>
    </main>
  );
};

export default Page;
