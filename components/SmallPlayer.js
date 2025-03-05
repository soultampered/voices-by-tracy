'use client'

import { useVideo } from "../app/[locale]/context/VideoContext";

export default function SmallPlayer({ src }) {
  const { openLargePlayer } = useVideo();

  return (
      <div className="w-64 cursor-pointer" onClick={() => openLargePlayer(src)}>
        <video src={src} controls className="w-full rounded-lg shadow-md" />
      </div>
  );
}