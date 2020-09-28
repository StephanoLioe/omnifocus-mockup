import React from "react";

function Note({
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
          fill={active ? "#cbd5e0" : "white"}
          stroke="#cbd5e0"
          strokeWidth="20"
        >
          <path
            d="M140 320 l0 -240 180 0 180 0 0 213 0 213 -28 27 c-28 27 -29 27
-180 27 l-152 0 0 -240z"
          />
        </g>
      </svg>
    </div>
  );
}

export default Note;
