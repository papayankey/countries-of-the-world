import { createStitches } from "@stitches/react";
import media from "./media";
import theme from "./theme";
import utils from "./utils";

const stitches = createStitches({
  theme: theme,
  media: media,
  utils: utils,
});

export const { styled, globalCss, keyframes, css } = stitches;
