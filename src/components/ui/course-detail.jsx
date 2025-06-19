"use client";
import { ICONS } from "@/assets/icons";
import { hover, warning } from "@/theme/colors";
import { Box, Stack, Typography } from "@mui/material";
import moment from "moment";
import { useTranslation } from "react-i18next";

const CourseDetail = ({ course, ...data }) => {
  const { t } = useTranslation()

  return (
    <Stack>
      <Box sx={{ my: 2.5, display: "flex", alignItems: "center", gap: 1 }}>
        <Typography sx={{ color: "primary.typography", fontSize: 16 }}>
          <ICONS.STAR size={16} color={warning.main} />{" "}
          {Number(data?.rating).toFixed(1) || 0} /
        </Typography>
        <Typography sx={{ color: "success.main", fontSize: 16 }}>
          {data?.amount_of_review || 0} {t("reviews")}
        </Typography>
      </Box>
      {/* Title and Description */}
      <Typography
        sx={{
          color: "primary.typography",
          fontSize: 28,
          fontWeight: 500,
          mb: 2,
        }}
      >
        {data?.header || ""}
      </Typography>
      <Typography
        fontWeight={400}
        fontSize={16}
        color="primary.typography"
        dangerouslySetInnerHTML={{
          __html: data?.description || "",
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
      {/* Course Details */}
      <Stack gap={2} sx={{ mt: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ICONS.USER size={22} color={hover.secondary} />
          <Typography sx={{ fontSize: 16 }}>
            {t("author")}:{" "}
            <span style={{ fontWeight: 500 }}>{course?.user?.name || "-"}</span>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ICONS.USERS size={22} color={hover.secondary} />
          <Typography sx={{ fontSize: 16 }}>
            <span style={{ fontWeight: 500 }}>{data?.participants || 0}</span>{" "}
            {t("participants")}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ICONS.CALENDAR size={22} color={hover.secondary} />
          <Typography sx={{ fontSize: 16 }}>
            {t("last_update")}:{" "}
            <span style={{ fontWeight: 500 }}>
              {data?.last_update
                ? moment(new Date(data?.last_update)).format("MMMM YYYY")
                : "-"}
            </span>
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default CourseDetail;
