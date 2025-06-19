import { BASE_URL } from "@/constants";
import { getVideoType, isHLS, videoURL } from "@/helpers";

const useLanding = ({ ...data }) => {
    
    const translation = data?.landing_page_translations?.[0];

    const videoOptions = {
      options: {
        controls: true,
        responsive: true,
        fluid: true,
        autoSetup: true,
        bigPlayButton: false,
        enableDocumentPictureInPicture: false,
        preload: "auto",
        disablePictureInPicture: false,
        loop: true,
        muted: true,
        sources: [
          {
            src: videoURL(translation?.intro) || "",
            type: getVideoType(
              translation?.intro ? BASE_URL + translation?.intro : ""
            ),
          },
        ],
        ...(isHLS(translation?.intro) && {
          html5: {
            vhs: {
              enableLowInitialPlaylist: true, // prioritize fast start
              overrideNative: true, // ensure VHS is used even on Safari
            },
          },
        }),
        controlBar: {
          pictureInPictureToggle: false,
          skipButtons: {
            forward: 5,
            backward: 5,
          },
        },
        poster: translation?.intro_thumbnail
          ? videoURL(translation?.intro_thumbnail)
          : "",
      },
      type: getVideoType(translation?.intro),
    };
  return { videoOptions, translation };
}

export default useLanding