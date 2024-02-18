'use client'

import React, {useEffect} from 'react';
import {
  PauseCircleOutline,
  PlayArrowOutlined,
  SkipNextOutlined,
  SkipPreviousOutlined
} from "@mui/icons-material";
import {Paper} from "@mui/material";
import {usePlayer} from "@dcat23/components/player/provider";
import ControlButton from "@dcat23/components/player/control-button";
import ReactPlayer from "react-player";

interface ControlsProps {
  props?: any;
}

const Controls: React.FC<ControlsProps> = ({ props }) => {
  const { isPlaying, setIsPlaying, currentSongId } = usePlayer();


  function handlePlay() {
    setIsPlaying(!isPlaying)
  }

  function handleBack() {
    // player.
  }

  function handleSkip() {

  }

  return (
    <>
      <Paper sx={{ position: 'fixed', bottom: 0, my: 4 }} elevation={3} >
        <ControlButton onClick={handleBack} label="back" icon={<SkipPreviousOutlined />} />
        {isPlaying ? (
          <ControlButton onClick={handlePlay} label="playing" icon={<PauseCircleOutline />} />
          ) : (
          <ControlButton onClick={handlePlay} label="paused" icon={<PlayArrowOutlined />} />
        )}
        <ControlButton onClick={handleSkip} label="skip" icon={<SkipNextOutlined />} />
      </Paper>
      <ReactPlayer playing={isPlaying} url={currentSongId}/>
    </>
  );
};

export default Controls;