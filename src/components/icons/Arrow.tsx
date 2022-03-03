import { ComponentProps } from "react";
import { css } from "../../stitches";

const Defaults = css({
  fill: "none",
  // stroke: isDark ? 'hsl(0, 0%, 98%)' : '#000',
  stroke: "$gray300",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "30px",
});

const Arrow: React.FC<ComponentProps<"div">> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 512 512"
      className={className}
    >
      <polyline points="244 400 100 256 244 112" className={Defaults()} />
      <line x1="120" y1="256" x2="412" y2="256" className={Defaults()} />
    </svg>
  );
};

export default Arrow;
