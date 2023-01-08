import React, { useState } from "react";
import { CSSProperties } from "styled-components";

interface Props {
  rotation?: number;
  className?: string;
  style?: CSSProperties;
}

const HeroTriangle: React.FC<Props> = ({ rotation, className, style }) => {
  const rot = {
    transform: `rotate(${rotation ? rotation : 0}deg)`,
  };

  return (
    <svg
      version="1.1"
      viewBox="0 0 768 616"
      style={{ ...rot, ...style }}
      className={`${className}`}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#00d09c", stopOpacity: 1 }} />
          <stop offset="30%" style={{ stopColor: "#00d09c", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#11cfec", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <g>
        <path
          // style={{ opacity: 0.431 }}
          fill="url(#grad1)"
          className={`bg-gradient-to-r from-primary to-secondary`}
          d="M 380.5,24.5 C 392.12,24.3028 400.62,29.3028 406,39.5C 503.386,210.599 601.053,381.599 699,552.5C 707.064,568.568 703.231,580.735 687.5,589C 681.534,589.898 675.534,590.398 669.5,590.5C 474.447,589.681 279.114,589.181 83.5,589C 70.75,586.585 64.0833,578.919 63.5,566C 63.2357,561.594 64.0691,557.427 66,553.5C 165.432,381.738 264.432,209.738 363,37.5C 367.049,30.5993 372.882,26.266 380.5,24.5 Z"
        />
      </g>
    </svg>
  );
};

export default HeroTriangle;
