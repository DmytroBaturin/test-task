export const HexagonImage = () => {
  return (
    <svg
      width="81"
      height="105"
      viewBox="0 0 81 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="paint0_linear_1_417"
          x1="40.5"
          y1="0"
          x2="40.5"
          y2="65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#57E1FF" stopOpacity="0" />
          <stop offset="1" stopColor="#57E1FF" />
        </linearGradient>
        <clipPath id="hexClip">
          <path d="M6.42597 44.8274L40.5 25.1547L74.574 44.8274V84.1726L40.5 103.845L6.42597 84.1726V44.8274Z" />
        </clipPath>
      </defs>

      <rect x="5.5" width="70" height="65" fill="url(#paint0_linear_1_417)" />

      <g clipPath="url(#hexClip)">
        <image
          href="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          x="0"
          y="0"
          width="81"
          height="105"
          preserveAspectRatio="xMidYMid slice"
        />
      </g>

      <path
        d="M6.42597 44.8274L40.5 25.1547L74.574 44.8274V84.1726L40.5 103.845L6.42597 84.1726V44.8274Z"
        stroke="#57E1FF"
        strokeWidth="2"
      />
    </svg>
  );
};
