import React from "react";
import useLanding from "./use-landing";
import VideoPlayer from "@/shared/players/video";
import { Container, Stack } from "@mui/material";
import CourseDetail from "@/components/ui/course-detail";
import GetAccessWithReview from "@/components/ui/get-access-course";

const Landing = ({ ...data }) => {
  const { videoOptions, translation } = useLanding(data);

  return (
    <Stack>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Container maxWidth="md" sx={{ my: 6 }}>
        <VideoPlayer {...videoOptions} />
        <CourseDetail {...translation} {...{ course: data?.course || {} }} />
      </Container>
      <GetAccessWithReview {...data} />
    </Stack>
  );
};

export default Landing;
