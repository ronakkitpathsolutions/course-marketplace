"use client";
import { ICONS } from "@/assets/icons";
import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const CourseModules = ({ data }) => {
  const [showFullText, setShowFullText] = useState(false);
  const [isTextOverflowing, setIsTextOverflowing] = useState(false);
  const textRef = useRef(null);

  const MAX_LINES = 15;

  const { t } = useTranslation();

  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseInt(
        getComputedStyle(textRef.current).lineHeight,
        10
      );
      const maxHeight = MAX_LINES * lineHeight;
      setIsTextOverflowing(textRef.current.scrollHeight > maxHeight);
    }
  }, [data?.choose_this_course]);

  return (
    <Container maxWidth="md" sx={{ pt: { xs: 6, md: 8 }, pb: 4 }}>
      <Typography
        color="primary.typography"
        fontWeight={500}
        fontSize={28}
        mb={3}
      >
        {t("course_includes")}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
        <ICONS.PLAY_CIRCLE size={18} color="primary.typography" />
        <Typography fontWeight={400} fontSize={16} color="primary.typography">
          {data?.feature_1 || ""}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
        <ICONS.UNLOCK size={22} color="primary.typography" />
        <Typography fontWeight={400} fontSize={16} color="primary.typography">
          {data?.feature_2 || ""}
        </Typography>
      </Box>
      <Box sx={{ width: "100%", my: { xs: 6, sm: 8 } }}>
        <Typography
          color="primary.typography"
          fontWeight={500}
          fontSize={28}
          mb={3}
        >
          {data?.need_for_the_course_label || ""}
        </Typography>
        <Typography
          whiteSpace="break-spaces"
          fontWeight={400}
          fontSize={16}
          color="primary.typography"
        >
          {data?.need_for_the_course || ""}
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={16}
          color="primary.typography"
          dangerouslySetInnerHTML={{
            __html: data?.nc_bullet_points || "",
          }}
          sx={{
            "& ul": {
              listStyleType: "disc",
              marginLeft: 2,
              paddingLeft: 2,
            },
            "& li": {
              display: "list-item",
            },
            whiteSpace: "break-spaces",
          }}
        />
      </Box>
      <Box sx={{ width: "100%", mt: { xs: 4, sm: 8 } }}>
        <Typography
          whiteSpace="break-spaces"
          color="primary.typography"
          fontWeight={500}
          fontSize={28}
          mb={2}
        >
          {data?.nc_header_2_title || ""}
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={16}
          color="primary.typography"
          dangerouslySetInnerHTML={{
            __html: data?.nc_description_2 || "",
          }}
          sx={{
            "& ul": {
              listStyleType: "disc",
              marginLeft: 2,
              paddingLeft: 2,
            },
            "& li": {
              display: "list-item",
            },
            whiteSpace: "break-spaces",
          }}
        />
        <Typography
          fontWeight={400}
          fontSize={16}
          mt={2}
          color="primary.typography"
          dangerouslySetInnerHTML={{
            __html: data?.nc_short_description || "",
          }}
          sx={{
            "& ul": {
              listStyleType: "disc",
              marginLeft: 2,
              paddingLeft: 2,
            },
            "& li": {
              display: "list-item",
            },
            whiteSpace: "break-spaces",
          }}
        />
      </Box>
      <Box sx={{ width: "100%", mt: { xs: 4, sm: 8 } }}>
        <Typography
          color="primary.typography"
          fontWeight={500}
          fontSize={28}
          mb={3}
        >
          {data?.choose_course_heading}
        </Typography>
        <Box
          ref={textRef}
          sx={{
            position: "relative",
            display: showFullText ? "block" : "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: showFullText ? "none" : MAX_LINES,
            overflow: "hidden",
          }}
        >
          <Typography
            ref={textRef}
            fontWeight={400}
            fontSize={16}
            color="primary.typography"
            dangerouslySetInnerHTML={{
              __html: data?.choose_this_course || "",
            }}
            sx={{
              "& ul": {
                listStyleType: "disc",
                marginLeft: 2,
                paddingLeft: 2,
              },
              "& li": {
                display: "list-item",
              },
            }}
          />
        </Box>
        {isTextOverflowing ? (
          <Button
            onClick={() => setShowFullText((prev) => !prev)}
            sx={{
              mt: 2,
              color: "#333 !important",
              fontWeight: 400,
              fontSize: 16,
              paddingX: 0,
              textDecoration: "underline !important",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent !important",
                opacity: 0.7,
              },
            }}
            disableRipple
            variant="text"
          >
            {showFullText ? t("showLessText") : t("showMoreText")}
          </Button>
        ) : null}
      </Box>
    </Container>
  );
}

export default CourseModules