import { ICONS } from '@/assets/icons';
import { videoURL } from '@/helpers';
import { warning } from '@/theme/colors';
import { Box, Typography, Avatar, styled, Stack } from '@mui/material';

const ReviewText = styled(Typography)({
  fontSize: 16,
  fontWeight: 400,
});

const ReviewerName = styled(Typography)({
  fontWeight: 600,
  fontSize: 16,
});

const StarRating = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: 4,
});

const ReviewCard = ({ review }) => {
    return (
      <Box sx={{ px: { xs: "40px", sm: "70px" }, py: { xs: 3, sm: 4 } }}>
        <Avatar
          sx={{ width: 90, height: 90 }}
          alt="Reviewer"
          src={review.pic ? videoURL(review.pic) : ""}
        />
        <Stack
          direction="column"
          spacing={2}
          mt={1}
          gap={4}
          alignItems="flex-start"
        >
          <ReviewText sx={{ fontSize: 16 }} color="primary.typography">
            {review.comment_text}
          </ReviewText>
          <Box>
            <ReviewerName>{review.name}</ReviewerName>
            <StarRating>
              {[...Array(5)].map((_, index) => (
                <ICONS.STAR
                  key={index}
                  color={index < 5 ? warning.main : "disabled"}
                />
              ))}
            </StarRating>
          </Box>
        </Stack>
      </Box>
    );
};

export default ReviewCard