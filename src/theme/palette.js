import { alpha } from '@mui/material';
import { common } from '@mui/material/colors';
import { error, hover, initial, linearGradients, neutral, primary, primaryNew, secondary, slate, success, themeColors, warning } from './colors';

export const createPalette = {
  action: {
    active: neutral[500],
    disabled: alpha(neutral[900], 0.38),
    disabledBackground: alpha(neutral[900], 0.12),
    focus: alpha(neutral[900], 0.16),
    hover: alpha(neutral[900], 0.04),
    selected: alpha(neutral[900], 0.12),
  },
  background: {
    default: common.white,
    paper: common.white,
    primary,
  },
  divider: "#F2F4F7",
  error,
  mode: "light",
  neutral,
  primary,
  secondary,
  success,
  text: {
    primary: neutral[900],
    secondary: neutral[500],
    disabled: alpha(neutral[900], 0.38),
  },
  warning,
  initial,
  slate,
  hover,
  primaryNew,
  themeColors,
  linearGradients,
};