import React from "react";

type ThreeBarsMenuLogoProps = {
  styles?: React.CSSProperties;
};

const ThreeBarsMenuLogo: React.FC<ThreeBarsMenuLogoProps> = ({ styles }) => {
  return (
    <svg
      /* width="241"
      height="84" */
      viewBox="0 0 241 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={styles && styles}
    >
      <rect width="241" height="16" fill="#B4C93E" />
      <rect y="34" width="241" height="16" fill="#A0F9FF" />
      <rect y="68" width="241" height="16" fill="black" />
    </svg>
  );
};

export default ThreeBarsMenuLogo;
