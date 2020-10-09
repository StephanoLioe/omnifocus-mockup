import React from "react";

const UncompletedCheckbox: React.FC = () => {
  return (
    <div className="h-4 w-4 border-2 box-border border-red-500 rounded-full"></div>
  );
};

const CompletedCheckBox: React.FC = () => {
  return (
    <div className="h-4 w-4 box-border bg-gray-400 rounded-full relative overflow-hidden">
      <div
        className="h-1 w-4 border-l-2 border-b-2 border-gray-700 absolute translate-y-1 translate-x-1 transform -rotate-45"
        style={{ top: -2 }}
      ></div>
    </div>
  );
};

const Checkbox: React.FC<{ completed: boolean }> = ({ completed = false }) => {
  return (
    <div className="cursor-pointer">
      {completed ? <UncompletedCheckbox /> : <CompletedCheckBox />}
    </div>
  );
};

export default Checkbox;
