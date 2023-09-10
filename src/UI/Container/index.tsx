import React from 'react';

interface IContainerProps {
  children: any;
  className?: string;
}

const Container = ({ children, className }: IContainerProps) => {
  return (
    <div
      className={`max-w-7xl w-full relative my-0 mx-auto py-10 px-4 min-h-screen ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
