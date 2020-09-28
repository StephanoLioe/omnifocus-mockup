import React from "react";

function Flag({
  active = false,
  className,
  onClick,
}: {
  active: boolean;
  className: string;
  onClick: () => void;
}) {
  return (
    <div className={className} onClick={onClick}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 64.000000 64.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
          fill={active ? "orange" : "white"}
          stroke={active ? "orange" : "black"}
        >
          <path
            strokeWidth="20"
            d="M100 534 c0 -24 66 -400 76 -436 3 -10 14 -18 25 -18 27 0 26 27 -6
185 -4 19 1 20 180 20 145 0 185 3 185 13 0 34 -34 218 -42 227 -5 6 -82 10
-190 10 -136 0 -182 3 -185 13 -3 6 -13 12 -24 12 -14 0 -19 -7 -19 -26z"
          />
        </g>
      </svg>
    </div>
  );
}

export default Flag;