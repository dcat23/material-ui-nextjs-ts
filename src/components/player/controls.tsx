'use client'

import React from 'react';
import {
  PauseCircleOutline,
  PlayArrowOutlined,
  SkipNextOutlined,
  SkipPreviousOutlined
} from "@mui/icons-material";
import {Paper} from "@mui/material";
import {usePlayer} from "@dcat23/components/player/provider";
import ControlButton from "@dcat23/components/player/control-button";

interface ControlsProps {
  props?: any;
}

const Controls: React.FC<ControlsProps> = ({ props }) => {
  const player = usePlayer();


  function handlePlay() {
    player?.setIsPlaying(!player?.isPlaying)
  }

  function handleBack() {
    // player.
  }

  function handleSkip() {

  }

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, my: 4 }} elevation={3} >
      <ControlButton onClick={handleBack} label="Back" icon={<SkipPreviousOutlined />} />
      {player?.isPlaying ? (
        <ControlButton onClick={handlePlay} label="play" icon={<PlayArrowOutlined />} />
        ) : (
        <ControlButton onClick={handlePlay} label="pause" icon={<PauseCircleOutline />} />
      )}
      <ControlButton onClick={handleSkip} label="Skip" icon={<SkipNextOutlined />} />
    </Paper>
  );
};

export default Controls;