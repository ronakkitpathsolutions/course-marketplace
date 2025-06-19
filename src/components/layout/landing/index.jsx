import React from "react";
import useLanding from "./use-landing";
import VideoPlayer from "@/shared/players/video";
import { Container, Stack } from "@mui/material";
import CourseDetail from "@/components/ui/course-detail";
import GetAccessWithReview from "@/components/ui/get-access-course";

// for slider pre load CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CourseModules from "@/components/ui/course-modules";
import AcademicPlan from "@/components/ui/academic-plan";
import CourseAuthor from "@/components/ui/course-author";
import PaymentSteps from "@/components/ui/payment-steps";
import FAQ from "@/components/ui/faq";

const Landing = ({ ...data }) => {
  const { videoOptions, translation } = useLanding(data);

  return (
    <Stack>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Container maxWidth="md" sx={{ my: 6 }}>
        <VideoPlayer {...videoOptions} />
        <CourseDetail {...translation} {...{ course: data.course || {} }} />
      </Container>
      <GetAccessWithReview {...{ translation }} {...data} />
      <CourseModules {...{ data: translation }} />
      <AcademicPlan {...{ data: translation }} />
      <CourseAuthor {...{ data: translation }} />
      <PaymentSteps />
      <FAQ/>
    </Stack>
  );
};

export default Landing;
