import React from "react";

const Option = (props) => {
  const { onClick } = props;
  return (
    <div
      className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      {props.children}
    </div>
  );
};

export default Option;
