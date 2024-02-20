'use client'

import React from 'react';
import {Avatar, List, ListItemAvatar, ListItemButton, ListItemText, Paper} from "@mui/material";
import {usePlayer} from "@dcat23/components/player/provider";
import {Video} from "@prisma/client";
import moment from "moment";

interface Props {
  playlistId: string;
}

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


  function handleClick(song: Video) {
    if (song == null) return;

    console.log("playing", song.title)
    player.setCurrentSongId(song.webpageUrl as string);
    player.setIsPlaying(true);
  }

  return (
    <List sx={{ width: "50%"}}>
      {player.selectedPlaylist.all().map((song: Video, idx) => (
        <Paper sx={{my:1}} elevation={3}>
          <ListItemButton key={idx} onClick={(e) => { handleClick(song)} }>
            <ListItemAvatar>
              <Avatar alt="playlist-avatar" src={song.thumbnail as string} />
            </ListItemAvatar>
            {/*<ListItem*/}
            <ListItemText primary={song.title} secondary={moment(song.publishDate).fromNow()}/>
          </ListItemButton>
        </Paper>
      ))}
    </List>
  );
};
