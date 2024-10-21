import React from "react";

type ArrowProps = {
  styles?: React.CSSProperties;
};

const Arrow: React.FC<ArrowProps> = ({ styles }) => {
  return (
    <svg
      /* width="97"
      height="137" */
      viewBox="0 0 97 137"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={styles && styles}
    >
      <path
        d="M93.25 4.84711L10 68.5L93.25 132.153"
        stroke="black"
        stroke-width="11"
      />
    </svg>
  );
};

export default Arrow;
