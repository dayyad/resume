import Image from "next/image";
import "./turbine.scss";

export default function Turbine() {
  {
    /* This has to be an inline SVG as far as I can tell, this is to get the classes with animation to apply correctly. */
  }
  return (
    <svg
      width="300"
      height="500"
      viewBox="0 0 300 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M141 443.5L144 132H157.5C158.667 224.833 161 417.1 161 443.5H141Z"
        fill="#F0ECEC"
        stroke="black"
      />
      <g className="turbine-rotor">
        <path
          d="M151.917 137.036C147.667 140.876 193.361 224.152 216.739 265.311L169.443 145.393C165.372 141.008 156.167 133.197 151.917 137.036Z"
          fill="#D9D9D9"
          stroke="black"
        />
        <path
          d="M144.5 125C143.3 119.4 48.3333 117.333 1 117L128.5 136C134.333 134.667 145.7 130.6 144.5 125Z"
          fill="#D9D9D9"
          stroke="black"
        />
        <path
          d="M153.998 126.455C159.348 128.498 212.804 49.9779 238.863 10.4624L153.487 107.045C151.428 112.663 148.648 124.411 153.998 126.455Z"
          fill="#D9D9D9"
          stroke="black"
        />
      </g>
      <circle cx="150.5" cy="128.5" r="9.5" fill="#D9D9D9" />
      <circle cx="150.5" cy="128.5" r="6.5" fill="white" />
    </svg>
  );
}
