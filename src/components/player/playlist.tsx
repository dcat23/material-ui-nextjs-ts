'use client'

import React from 'react';
import {Avatar, List, ListItemAvatar, ListItemButton, ListItemText, Paper} from "@mui/material";
import {usePlayer} from "@dcat23/components/player/provider";

interface Props {}

const items = [
  {
    src: "",
    primary: "Days Before Rodeo (Full Mixtape)",
    secondary: "Travis Scott",
    media: "Days Before Rodeo (Full Mixtape) [c4il_1ut3WU].m4a"
  },
  {
    src: "",
    primary: "Control ft Kendrick Lamar, Jay Electronica",
    secondary: "Big Sean",
    media: "Big Sean Control ft Kendrick Lamar, Jay Electronica [Lyrics] DIRTY (OFFICIAL LYRICS) [6S9K55amRBQ].m4a"
  },
  {
    src: "",
    primary: "Earned It Prod By. Young Chop",
    secondary: "Chief Keef",
    media: "Chief Keef - Earned It Prod By. Young Chop [jJgS9MY2WD8].m4a"
  },
]

export default function Playlist(props: Props) {
  const player = usePlayer();

  function handleClick(src: string) {
    console.log("playing", src.split("."))
    player?.setCurrentSongId(`/media/m4a/${src}`);
    player?.setIsPlaying(true);
  }

  return (
    <List sx={{ width: "50%"}}>
      {items.map(({media, src, primary, secondary}, idx) => (
        <Paper sx={{my:1}} elevation={3}>
          <ListItemButton key={idx} onClick={(e) => { handleClick(media)} }>
            <ListItemAvatar>
              <Avatar alt="playlist-avatar" src={src} />
            </ListItemAvatar>
            {/*<ListItem*/}
            <ListItemText primary={primary} secondary={secondary}/>
          </ListItemButton>
        </Paper>
      ))}
    </List>
  );
};
