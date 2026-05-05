"use client";

import { useEffect, useRef, useState } from "react";

const HERO_VIDEOS = [
  "/herovideo1.mp4",
  "/herovideo2.mp4",
  "/herovideo3.mp4",
  "/herovideo4.mp4",
];

export default function HeroVideoBackground() {
  const FADE_MS = 1800;
  const PRELOAD_BEFORE_END_SECONDS = 1.9;

  const videoRefs = [
    useRef<HTMLVideoElement | null>(null),
    useRef<HTMLVideoElement | null>(null),
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeLayer, setActiveLayer] = useState<0 | 1>(0);
  const [layerSources, setLayerSources] = useState<[string, string]>([
    HERO_VIDEOS[0],
    HERO_VIDEOS[1],
  ]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const transitionLockRef = useRef(false);

  const transitionToVideo = (targetIndex: number) => {
    if (transitionLockRef.current) return;
    transitionLockRef.current = true;
    setIsTransitioning(true);

    const outgoingLayer = activeLayer;
    const incomingLayer: 0 | 1 = outgoingLayer === 0 ? 1 : 0;
    const nextIndex = (targetIndex + HERO_VIDEOS.length) % HERO_VIDEOS.length;
    const incomingVideo = videoRefs[incomingLayer].current;

    if (incomingVideo) {
      incomingVideo.currentTime = 0;
      void incomingVideo.play().catch(() => {
        // Ignore autoplay interruptions.
      });
    }

    setLayerSources((previous) => {
      const updated: [string, string] = [...previous] as [string, string];
      updated[incomingLayer] = HERO_VIDEOS[nextIndex];
      return updated;
    });

    requestAnimationFrame(() => {
      setActiveLayer(incomingLayer);
    });

    window.setTimeout(() => {
      const outgoingVideo = videoRefs[outgoingLayer].current;
      if (outgoingVideo) {
        outgoingVideo.pause();
      }

      setCurrentIndex(nextIndex);
      setIsTransitioning(false);
      transitionLockRef.current = false;
    }, FADE_MS);
  };

  const goToNextVideo = () => {
    transitionToVideo(currentIndex + 1);
  };

  const goToPreviousVideo = () => {
    transitionToVideo(currentIndex - 1);
  };

  useEffect(() => {
    const startingVideo = videoRefs[0].current;
    if (!startingVideo) return;

    void startingVideo.play().catch(() => {
      // Ignore autoplay interruptions.
    });
    setIsReady(true);
  }, []);

  useEffect(() => {
    const activeVideo = videoRefs[activeLayer].current;
    if (!activeVideo) return;

    const handleTimeUpdate = () => {
      const secondsRemaining = activeVideo.duration - activeVideo.currentTime;
      if (!Number.isFinite(secondsRemaining)) return;
      if (secondsRemaining <= PRELOAD_BEFORE_END_SECONDS && !isTransitioning) {
        goToNextVideo();
      }
    };

    const handleEnded = () => {
      if (!isTransitioning) {
        goToNextVideo();
      }
    };

    activeVideo.addEventListener("timeupdate", handleTimeUpdate);
    activeVideo.addEventListener("ended", handleEnded);

    return () => {
      activeVideo.removeEventListener("timeupdate", handleTimeUpdate);
      activeVideo.removeEventListener("ended", handleEnded);
    };
  }, [activeLayer, currentIndex, isTransitioning]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goToNextVideo();
      }
      if (event.key === "ArrowLeft") {
        goToPreviousVideo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeLayer, currentIndex, isTransitioning]);

  return (
    <>
      <video
        ref={videoRefs[0]}
        autoPlay
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
          activeLayer === 0 && isReady ? "opacity-100" : "opacity-0"
        } ${activeLayer === 0 ? "scale-105" : "scale-100"} transition-transform duration-[12000ms] ease-linear`}
        aria-label="Cinematic travel hero background"
      >
        <source src={layerSources[0]} type="video/mp4" />
      </video>

      <video
        ref={videoRefs[1]}
        autoPlay
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
          activeLayer === 1 && isReady ? "opacity-100" : "opacity-0"
        } ${activeLayer === 1 ? "scale-105" : "scale-100"} transition-transform duration-[12000ms] ease-linear`}
        aria-hidden="true"
      >
        <source src={layerSources[1]} type="video/mp4" />
      </video>
    </>
  );
}
