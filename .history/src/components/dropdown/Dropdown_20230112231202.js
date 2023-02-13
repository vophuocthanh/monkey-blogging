import React, { useState } from "react";
import { DropdownProvider } from "./dropdown-context";

const Dropdown = ({
  placeholder = "Please select an option",
  children,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full">
        {show && (
          <div className="absolute left-0 w-full bg-white shadow-sm top-full">
            {children}
          </div>
        )}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
