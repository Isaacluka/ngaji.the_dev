export default function SlashLogo({ size = 40 }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="128"
          height="128"
          rx="20"
          ry="20"
          fill="#136BEC"
        />
        <path
          d="M76 20 L92 20 L52 108 L36 108 Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }
  