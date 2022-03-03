import { Box } from "../../shared";
import { css } from "../../stitches";

const DefaultSVG = css({
  transition: "transform 100ms linear",
});

const DefaultPath = css({
  fill: "hsl(0, 0%, 52%)",
});

interface CaretProps {
  isOpen: boolean;
}

const Caret: React.FC<CaretProps> = ({ isOpen }) => {
  return (
    <Box css={{ mt: "$1" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 512 512"
        className={DefaultSVG()}
        style={{
          transform: isOpen ? "rotate(180deg)" : undefined,
        }}
      >
        <path
          className={DefaultPath()}
          d="M414,321.94,274.22,158.82a24,24,0,0,0-36.44,0L98,321.94c-13.34,15.57-2.28,39.62,18.22,39.62H395.82C416.32,361.56,427.38,337.51,414,321.94Z"
        />
      </svg>
    </Box>
  );
};

export default Caret;
