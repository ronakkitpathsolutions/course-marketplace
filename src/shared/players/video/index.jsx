"use client";

import { useEffect, useMemo, useRef } from "react";
import Hls from "hls.js";
import "video.js/dist/video-js.css";
import videojs from "video.js";
import "./video.css"

const VideoPlayer = ({ options, onReady, type = "application/x-mpegURL" }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const hlsRef = useRef(null);

  const src = useMemo(() => options?.sources?.[0]?.src || "", [options]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !src) return;

    // Prevent double init
    if (playerRef.current) return;

    // Setup HLS
    if (type === "application/x-mpegURL") {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hlsRef.current = hls;
        hls.loadSource(src);
        hls.attachMedia(videoElement);
      } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
        videoElement.src = src;
      }
    } else {
      videoElement.src = src;
    }

    // Init video.js
    const player = videojs(videoElement, {
      controls: true,
      autoplay: true,
      muted: true,
      preload: "auto",
      bigPlayButton: true,
      responsive: true,
      fluid: true,
      poster: options?.poster,
      ...options,
    });

    playerRef.current = player;

    player.ready(() => {
      console.log("🎬 Player is ready");
      onReady && onReady(player);
    });
  }, [src, type, options, onReady]);

  return (
    <div data-vjs-player className="w-full">
      <video ref={videoRef} className="video-js vjs-default-skin" playsInline />
    </div>
  );
};

export default VideoPlayer;
