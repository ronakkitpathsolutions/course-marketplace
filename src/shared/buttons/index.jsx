import { initial, linearGradients } from "@/theme/colors";
import { CircularProgress, Button as MuiButton, useTheme } from "@mui/material";

const CustomButton = ({
  color = "primary",
  size = "medium",
  variant = "contained",
  loading = false,
  disabled,
  children,
  sx,
  ...props
}) => {
  const gradientStyle = {
    transition: "all 0.3s ease",
    content: '""',
    position: "absolute",
    height: "100%",
    width: "100%",
    bgcolor: "rgba(255, 255, 255, 0.3)",
  };

  return (
    <MuiButton {...props}
      sx={{
        ...(variant === "gradient"
          ? {
              background: linearGradients.primary,
              color: initial.white,
              borderRadius: 0.8,
              position: "relative",
              ":hover": {
                ":before": {
                  ...gradientStyle,
                  opacity: 1,
                },
              },
              ":before": {
                ...gradientStyle,
                opacity: loading || disabled ? 1 : 0,
              },
            }
          : {}),
        ...sx,
      }}
      {...(loading && {
        startIcon: <CircularProgress size={15} thickness={6} color="inherit" />,
      })}
      {...{ color, size, variant, disabled: loading || disabled }}
    >
      {loading ? "SUBMITTING..." : children}
    </MuiButton>
  );
};

export default CustomButton;
