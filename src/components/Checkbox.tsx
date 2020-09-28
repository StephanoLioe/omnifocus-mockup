import React, { useState } from "react";

function UncompletedCheckbox() {
  return (
    <div className="h-4 w-4 border-2 box-border border-red-500 rounded-full"></div>
  );
}

function CompletedCheckBox() {
  return (
    <div className="h-4 w-4 box-border bg-gray-400 rounded-full relative overflow-hidden">
      <div
        className="h-1 w-4 border-l-2 border-b-2 border-gray-700 absolute translate-y-1 translate-x-1 transform -rotate-45"
        style={{ top: -2 }}
      ></div>
    </div>
  );
}

function Checkbox({ completed }: { completed: boolean }) {
  const [complete, setComplete] = useState(completed);

  const toggleComplete = () => setComplete((c: boolean) => !c);

  return (
    <div onClick={toggleComplete} className="cursor-pointer">
      {complete ? <UncompletedCheckbox /> : <CompletedCheckBox />}
    </div>
  );
}

export default Checkbox;
