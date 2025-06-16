import { alertClasses, paperClasses } from "@mui/material";
import { error, success, warning } from "./colors";
import { spacing, fontSize, spacingHelpers } from "./spacing";

export const createComponents = ({ palette }) => {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: fontSize.sm,
          fontWeight: 600,
          letterSpacing: 0,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          "& span": {
            top: spacing.component.badge.offset.top,
            right: spacing.component.badge.offset.right,
          },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: spacingHelpers.px(spacing.component.dialog.actions.padding),
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          whiteSpace: "break-spaces",
          padding: spacingHelpers.padding(
            spacing.component.alert.padding.vertical,
            spacing.component.alert.padding.horizontal
          ),
          [`&.${alertClasses.colorWarning}`]: {
            color: warning.main,
            backgroundColor: warning.light,
          },
          [`&.${alertClasses.colorError}`]: {
            color: error.main,
            backgroundColor: error.light,
          },
          [`&.${alertClasses.colorSuccess}`]: {
            color: success.main,
            backgroundColor: success.light,
          },
        },
        icon: {
          [`&.${alertClasses.colorWarning}`]: {
            color: warning.main,
          },
          [`&.${alertClasses.colorError}`]: {
            color: error.main,
          },
          [`&.${alertClasses.colorSuccess}`]: {
            color: success.main,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: palette.primary.typography,
          overflowWrap: "anywhere",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: spacing.xs + 2, // 6px
          textTransform: "none",
          "&.MuiButton-colorPrimary": {
            color: "white",
            transition: "all 0.3s ease",
            ":hover": {
              backgroundColor: palette.primary.light,
            },
            "&.Mui-disabled": {
              backgroundColor: palette.primary.light,
            },
          },
          "&.MuiButton-colorSecondary": {
            color: "white",
            transition: "all 0.3s ease",
            ":hover": {
              backgroundColor: palette.secondary.light,
            },
            "&.Mui-disabled": {
              backgroundColor: palette.secondary.light,
            },
          },
          "&.MuiButton-colorError": {
            color: "white",
            transition: "all 0.3s ease",
            ":hover": {
              backgroundColor: palette.error.light,
            },
            "&.Mui-disabled": {
              backgroundColor: palette.error.light,
            },
          },
        },
        sizeSmall: {
          padding: spacingHelpers.padding(
            spacing.component.button.small.padding.vertical,
            spacing.component.button.small.padding.horizontal
          ),
          borderRadius: spacingHelpers.px(
            spacing.component.button.small.borderRadius
          ),
        },
        sizeMedium: {
          padding: spacingHelpers.padding(
            spacing.component.button.medium.padding.vertical,
            spacing.component.button.medium.padding.horizontal
          ),
          borderRadius: spacingHelpers.px(
            spacing.component.button.medium.borderRadius
          ),
        },
        sizeLarge: {
          padding: spacingHelpers.padding(
            spacing.component.button.large.padding.vertical,
            spacing.component.button.large.padding.horizontal
          ),
          borderRadius: spacingHelpers.px(
            spacing.component.button.large.borderRadius
          ),
        },
        textSizeSmall: {
          padding: spacingHelpers.padding(
            spacing.component.button.text.small.vertical,
            spacing.component.button.text.small.horizontal
          ),
        },
        textSizeMedium: {
          padding: spacingHelpers.padding(
            spacing.component.button.text.medium.vertical,
            spacing.component.button.text.medium.horizontal
          ),
        },
        textSizeLarge: {
          padding: spacingHelpers.padding(
            spacing.component.button.text.large.vertical,
            spacing.component.button.text.large.horizontal
          ),
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: spacingHelpers.px(spacing.component.card.borderRadius),
          [`&.${paperClasses.elevation1}`]: {
            boxShadow:
              "0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: spacingHelpers.padding(
            spacing.component.card.content.padding.vertical,
            spacing.component.card.content.padding.horizontal
          ),
          "&:last-child": {
            paddingBottom: spacingHelpers.px(
              spacing.component.card.content.padding.vertical
            ),
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
        subheaderTypographyProps: {
          variant: "body2",
        },
      },
      styleOverrides: {
        root: {
          padding: `${spacing.component.card.header.padding.top}px ${spacing.component.card.header.padding.horizontal}px ${spacing.component.card.header.padding.bottom}px`,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        "#__next": {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        },
        "#nprogress": {
          pointerEvents: "none",
        },
        "#nprogress .bar": {
          backgroundColor: palette.primary.dark,
          height: spacingHelpers.px(spacing.component.progress.height),
          left: 0,
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 2000,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
        input: {
          "&::placeholder": {
            opacity: 0.5,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          fontSize: fontSize.sm,
          fontWeight: 500,
          lineHeight: spacingHelpers.px(fontSize.xxxl),
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "black",
          fontWeight: 400,
          marginBottom: spacingHelpers.px(
            spacing.component.form.label.marginBottom
          ),
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: spacingHelpers.px(
            spacing.component.list.padding.vertical
          ),
          paddingBottom: spacingHelpers.px(
            spacing.component.list.padding.vertical
          ),
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
  };
};