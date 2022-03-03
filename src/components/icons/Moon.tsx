import { Box } from "../../shared";
import { css } from "../../stitches";

const Default = css({
  // fill: isDark ? 'white' : 'none',
  // stroke: isDark ? 'white' : '#000',
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "$6",
});

const Moon = () => {
  return (
    <Box
      css={{
        mr: "$2",
        display: "flex",
        alignItems: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 512 512"
      >
        <path
          d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z"
          className={Default()}
        />
      </svg>
    </Box>
  );
};

export default Moon;
