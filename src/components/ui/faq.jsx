"use client";
import { useCallback, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { ICONS } from "@/assets/icons";
import Link from "next/link";
import Image from "next/image";
import customer_manager from '@/assets/images/manager-images/Kayla.webp'

const StyledAccordion = styled(Accordion)(() => ({
  ":hover": {
    "& .MuiAccordionSummary-expandIconWrapper": {
      backgroundColor: "#333333",
      borderRadius: "50%",
      "& svg": {
        color: "#a0a0a0",
      },
    },
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  "& .MuiAccordionSummary-expandIconWrapper": {
    padding: theme.spacing(0.8),
    "&:hover": {
      backgroundColor: "#333333",
      borderRadius: "50%",
    },
    "& svg": {
      color: "#a0a0a0",
    },
    "&.Mui-expanded": {
      backgroundColor: "#333333",
      borderRadius: "50%",
      "& svg": {
        color: "#a0a0a0",
      },
    },
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1, 0),
}));

const StyledLink = styled(Link)(() => ({
  color: "#782fef",
  textDecoration: "none",
  transition: "opacity 0.3s",
  "&:hover": {
    opacity: 0.7,
  },
}));

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = useCallback(
    (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    },
    []
  );
  const { t } = useTranslation();
  const faqData = t("faq", { returnObjects: true });

  const SUPPORT_MAIL = "ronakk@itpathsolutions.com";

    return (
      <>
        <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
          <Typography
            color="primary.typography"
            fontWeight={500}
            fontSize={28}
            sx={{ marginBottom: "30px" }}
          >
            {t("faqTitleShort")}
          </Typography>
          {faqData?.map((item, index) => (
            <StyledAccordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                mb: { xs: 0.5, md: 1 },
                "&:before": { display: "none" },
                boxShadow: "none",
                borderRadius: "0 !important",
              }}
            >
              <StyledAccordionSummary
                expandIcon={
                  expanded === `panel${index}` ? (
                    <ICONS.ADD size={24} color="primary.secondary" />
                  ) : (
                    <ICONS.ADD
                      size={24}
                      color="primary.secondary"
                      style={{
                        transform: "rotate(-90deg)",
                        transformOrigin: "center",
                        transition: "all .25s ease-in-out",
                      }}
                    />
                  )
                }
                sx={{
                  borderBottom: "1px solid #e0e0e0",
                  borderTop: index === 0 ? "1px solid #e0e0e0" : "none",
                  "&.Mui-expanded": {
                    borderBottom: "none",
                  },
                  "& .MuiAccordionSummary-content": {
                    margin: { xs: "12px 0", md: "16px 0" },
                  },
                }}
              >
                <Typography fontWeight={500} fontSize={16} pr={2}>
                  {item.question}
                </Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography
                  fontSize={16}
                  fontWeight={400}
                  color="primary.typography"
                >
                  {item.answer.includes("{{email}}") ? (
                    <Trans
                      i18nKey={`faq.${index}.answer`}
                      values={{ email: SUPPORT_MAIL }}
                      components={{
                        a: <StyledLink href={`mailto:${SUPPORT_MAIL}`} />,
                      }}
                    />
                  ) : (
                    item.answer
                  )}
                </Typography>
              </StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </Container>
        <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
          <Stack
            sx={{
              backgroundColor: "#F8F9FA",
              borderRadius: 1,
              p: 4,
            }}
          >
            <Stack
              direction={"row"}
              spacing={{ xs: 2, sm: 3 }}
              alignItems={"center"}
            >
              <Image
                alt="customer_manager"
                src={customer_manager}
                width={94} // use the **largest** width expected
                height={94}
                style={{ borderRadius: "50%" }}
                sizes="(max-width: 900px) 65px, 94px"
              />
              <Box>
                <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  fontSize={{ xs: 16, sm: 20 }}
                >
                  {t("manager_intro")}
                </Typography>
                <Typography
                  display={{ xs: "none", md: "block" }}
                  color="text.secondary"
                  fontSize={16}
                >
                  <Trans
                    i18nKey="customer_support_message"
                    values={{ email: SUPPORT_MAIL }}
                    components={{
                      a: <StyledLink href={`mailto:${SUPPORT_MAIL}`} />,
                    }}
                  />
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </>
    );
};

export default FAQ;
