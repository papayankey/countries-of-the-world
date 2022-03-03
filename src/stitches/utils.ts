import { ConfigType } from "@stitches/react/types/config";

const utils: ConfigType.Utils = {
  bgcolor: (value) => ({
    backgroundColor: value,
  }),
  p: (value) => ({
    paddingTop: value,
    paddingRight: value,
    paddingBottom: value,
    paddingLeft: value,
  }),
  pl: (value) => ({
    paddingLeft: value,
  }),
  pr: (value) => ({
    paddingLeft: value,
  }),
  pt: (value) => ({
    paddingTop: value,
  }),
  pb: (value) => ({
    paddingBottom: value,
  }),
  px: (value) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  m: (value) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: (value) => ({
    marginTop: value,
  }),
  mb: (value) => ({
    marginBottom: value,
  }),
  ml: (value) => ({
    marginLeft: value,
  }),
  mr: (value) => ({
    marginRight: value,
  }),
  mx: (value) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value) => ({
    marginTop: value,
    marginBottom: value,
  }),
};

export default utils;
