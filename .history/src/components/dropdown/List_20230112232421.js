import React from 'react';

const List = ({children}) => {
  return (
    {show && (
      <div className="absolute left-0 w-full bg-white shadow-sm top-full">
        {children}
      </div>
    )}
  );
};

export default List;