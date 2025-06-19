"use client";
import { ICONS } from "@/assets/icons";
import { formatCurrency } from "@/helpers";
import CustomButton from "@/shared/buttons";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
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

const GetAccessWithReview = ({ ...data }) => {
  const { t } = useTranslation();
  const course = data?.course || {};

  const prices = {
    price: course?.course_prices?.[0]?.price || 0,
    currency: course?.course_prices?.[0]?.currency?.name || "USD",
  };

  const calculatedDiscount = 100 - course?.discount;
  const actualPrice = (prices.price / calculatedDiscount) * 100;

  const shouldShowPriceDetails = true;

  const withIncrease = formatCurrency(actualPrice, prices.currency);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "primary.container",
        py: { xs: 2, md: 8 },
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ width: "100%", py: 3 }}>
          {shouldShowPriceDetails ? (
            <>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: 28,
                  lineHeight: 1.2,
                  mb: 1,
                }}
              >
                {prices?.currency ? prices?.currency : ""}{" "}
                {formatCurrency(prices.price, prices.currency)}
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                {course?.discount ? (
                  <>
                    <span
                      style={{
                        color: "#808080",
                        textDecoration: "line-through",
                      }}
                    >
                      {withIncrease || ""}
                    </span>{" "}
                    <span style={{ fontWeight: 600 }}>
                      {course?.discount || 0}% — {t("discount")}
                    </span>
                  </>
                ) : null}
              </Typography>
              <Typography sx={{ color: "error.main", fontSize: 16 }}>
                {t("end_of_sale")}:{" "}
                <span style={{ color: "black" }}>{t("hours")}</span>
              </Typography>
            </>
          ) : null}
          <CustomButton
            sx={{
              mb: 2,
              mt: 4,
              borderRadius: "2rem",
              minHeight: "58px",
              width: { xs: "100%", sm: "300px" },
              display: "flex",
              flexDirection: "column",
              ".MuiButton-icon": {
                position: "absolute",
                alignSelf: "flex-end",
              },
              fontSize: 16,
              fontWeight: 500,
              px: 4,
            }}
            endIcon={
              <ICONS.ARROW_RIGHT
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 400,
                }}
              />
            }
          >
            {t("get_access")}
          </CustomButton>
          <Stack direction="row" mb={1} alignItems="center" spacing={2}>
            <ICONS.SHIELD_CHECK size={26} color={"#1E1E1E"} />
            <Typography
              sx={{ fontWeight: 500, fontSize: 16 }}
              color="primary.typography"
            >
              {t("money_back")}
            </Typography>
          </Stack>
          <Typography sx={{ fontSize: { xs: 13, sm: 16 }, fontWeight: 400 }}>
            <Trans
              i18nKey="email_support_message"
              values={{ email: "ronakk@itpathsolutions.com" }}
              components={{
                a: <StyledLink href={`mailto:ronakk@itpathsolutions.com`} />,
              }}
            />
          </Typography>
        </Box>
        <hr
          style={{
            border: "1px dashed #808080",
            margin: "42px 0",
            opacity: 0.2,
          }}
        />
        <Typography
          sx={{
            color: "primary.typography",
            fontWeight: 500,
            fontSize: 28,
            mt: 3,
            mb: 3,
          }}
        >
          {t("comments_about_course")}
        </Typography>
      </Container>
    </Box>
  );
};

export default GetAccessWithReview;
