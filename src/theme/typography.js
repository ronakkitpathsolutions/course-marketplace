import { fontSize, letterSpacing, lineHeight, spacingHelpers } from './spacing';

export const createTypography = (theme) => {
  return {
    fontFamily: '"Rubik", sans-serif',
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: lineHeight.normal,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: lineHeight.relaxed,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: spacingHelpers.px(fontSize.xs),
      fontWeight: 400,
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: lineHeight.relaxed,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: lineHeight.relaxed,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: spacingHelpers.px(letterSpacing.wide),
      lineHeight: lineHeight.loose,
      textTransform: "uppercase",
    },    h1: {
      fontFamily: "'Rubik', sans-serif",
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: lineHeight.tight,
    },
    h2: {
      fontFamily: "'Rubik', sans-serif",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: lineHeight.tight,
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.875rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.25rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "3rem",
      },
    },
    h3: {
      fontFamily: "'Rubik', sans-serif",
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: lineHeight.tight,
      [theme.breakpoints.up("xs")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.15rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.25rem",
      },
    },
    h4: {
      fontFamily: "'Rubik', sans-serif",
      fontWeight: 700,
      lineHeight: lineHeight.tight,
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.6rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.8rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
      },
    },
    h5: {
      fontFamily: "'Rubik', sans-serif",
      fontWeight: 700,
      lineHeight: lineHeight.tight,
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.3rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.4rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
      },
    },
    h6: {
      fontFamily: "'Rubik', sans-serif",
      fontWeight: 700,
      lineHeight: lineHeight.tight,
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.0rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.1rem",
      },
    },
    logo: {
      fontFamily: "'Rubik', sans-serif",
      fontWeight: 500,
      fontSize: spacingHelpers.px(fontSize.xxl),
      lineHeight: lineHeight.tight,
      textTransform: "uppercase",
      background: "linear-gradient(90deg, #50B3F9 0%, #667CF7 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },    indexNumber: {
      fontSize: "6.25rem",
      fontWeight: 500,
      lineHeight: lineHeight.tight,
      [theme.breakpoints.up("xs")]: {
        fontSize: "2.5rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.6rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "6rem",
      },
    },
  };
};
