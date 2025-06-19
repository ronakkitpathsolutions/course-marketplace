"use client";

import { ICONS } from "@/assets/icons";
import { BASE_URL } from "@/constants";
import { success } from "@/theme/colors";
import {
  Container,
  Box,
  Typography,
  Avatar,
  Stack,
  styled,
} from "@mui/material";
import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

const StyledLink = styled(Link)(() => ({
  color: "#782fef",
  textDecoration: "none",
  fontWeight: 400,
  transition: "opacity 0.3s",
  "&:hover": {
    opacity: 0.7,
  },
}));

const CourseAuthor = ({ data }) => {
    const { t } = useTranslation();
    
    const SUPPORT_MAIL = "ronakk@itpathsolutions.com"

  return (
    <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
      <Typography
        color="primary.typography"
        fontWeight={500}
        fontSize={28}
        mt={{ xs: 2, sm: 3 }}
        mb={4}
      >
        {t("meet_course_author")}
      </Typography>
      <Stack
        mt={{ xs: 2, sm: 4 }}
        alignItems={{ xs: "flex-start", md: "center" }}
        gap={2.5}
        direction="row"
      >
        <Avatar
          src={data?.author_image ? BASE_URL + data?.author_image : ""}
          sx={{ width: { xs: 50, sm: 100 }, height: { xs: 50, sm: 100 } }}
        />
        <Stack spacing={2}>
          <Typography
            fontWeight={400}
            fontSize={16}
            color="primary.typography"
            dangerouslySetInnerHTML={{
              __html: data?.author_bio || "",
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
        </Stack>
      </Stack>
      <Box
        my={{ xs: 2, sm: 6 }}
        sx={{
          backgroundColor: success.light,
          p: { xs: 2 },
          borderRadius: { xs: 0, sm: 1 },
          mx: { xs: "-16px", sm: 2 },
        }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2 }}
          alignItems="flex-start"
        >
          <Box>
            <ICONS.INFO_OUTLINED size={20} style={{ color: "#00cf91" }} />
          </Box>

          <Stack spacing={0.5}>
            <Typography fontWeight={600} fontSize={16}>
              <Trans
                i18nKey="refund_after_days"
                values={{ email: SUPPORT_MAIL }}
                components={{
                  span: <span style={{ fontWeight: 400 }} />,
                  a: <StyledLink href={`mailto:${SUPPORT_MAIL}`} />,
                }}
              />
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default CourseAuthor;
