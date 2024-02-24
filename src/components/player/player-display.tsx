'use client'

import React, {useEffect, useState} from 'react';
import ReactPlayer from "react-player";
import {usePlayer} from "@dcat23/components/player/provider";

interface Props {}

export default function PlayerDisplay(props: Props) {
  const { isPlaying, selectedPlaylist } = usePlayer();
  const [urls, setUrls] = useState<string[]>([])
  useEffect(() => {
    setUrls(selectedPlaylist.all().map(s => s.webpageUrl))
  }, [selectedPlaylist]);
  return (
    <>
      <ReactPlayer
        playing={isPlaying}
        url={urls}
        style={{ position: "fixed", zIndex: -1, filter: "blur(12px)" }}
        width={"100%"}
        height={"100%"}
      />
    </>
  );
};
