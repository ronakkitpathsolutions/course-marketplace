"use client";
import { createTheme } from "@mui/material";
import { createTypography } from "./typography";
import { createComponents } from "./override";
import { spacing } from "./spacing";
import { createPalette } from "./palette";


const defaultTheme = createTheme({
  palette: createPalette,
  shape: {
    borderRadius: 10,
  },
  breakpoints: {
    values: {
      xs: 0, // mobile
      sm: 600, // small tablets
      md: 900, // tablets / small laptops
      lg: 1200, // desktops
      xl: 1536, // large desktops
    },
  },
  spacing: spacing.base, // Use our 8px base spacing
});

const theme = createTheme({
  ...defaultTheme,
  cssVariables: true,
  typography: createTypography(defaultTheme),
  components: createComponents(defaultTheme),
});

export default theme;
``