"use client";

import { useEffect, useRef, useState } from "react";

interface SequentialVideoProps {
  sources: { src: string; aspect: string }[];
  className?: string;
}

export function SequentialVideo({ sources, className }: SequentialVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onEnded = () => {
      setIndex((i) => (i + 1) % sources.length);
    };
    video.addEventListener("ended", onEnded);
    return () => video.removeEventListener("ended", onEnded);
  }, [sources.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch(() => {});
    }
  }, [index, sources]);

  const current = sources[index];

  return (
    <div
      className={"relative w-full overflow-hidden " + (className ?? "")}
      style={{ aspectRatio: current?.aspect ?? "16/9" }}
    >
      <video
        ref={videoRef}
        src={current?.src}
        autoPlay
        muted
        playsInline
        className="h-full w-full object-cover"
      />
    </div>
  );
}