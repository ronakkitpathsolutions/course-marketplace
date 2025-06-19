"use client";
import {
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  styled,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const CustomStepLabel = styled(StepLabel)(() => ({
  "& .MuiStepLabel-iconContainer": {
    "& .MuiStepIcon-root": {
      color: "transparent",
      border: "1px solid",
      borderColor: "#747474",
      borderRadius: "50%",
      "& text": {
        fill: "#747474",
      },
    },
  },
}));

const PaymentSteps = () => {
  const { t } = useTranslation();
  const paymentSteps = t("payment_steps", {
    brand_name: "Eduelle",
    returnObjects: true,
  });

  return (
    <Container maxWidth="md" sx={{ pb: { xs: 2, md: 4 } }}>
      <Typography
        color="primary.typography"
        fontWeight={500}
        fontSize={28}
        mb={3.75}
      >
        {t("after_payment_practicing")}
      </Typography>
      <Stepper orientation="vertical" activeStep={-1}>
        {paymentSteps?.map((label, index) => (
          <Step key={index}>
            <CustomStepLabel>
              <Typography
                fontSize={16}
                fontWeight={400}
                color="primary.typography"
              >
                {label}
              </Typography>
            </CustomStepLabel>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
};

export default PaymentSteps;
