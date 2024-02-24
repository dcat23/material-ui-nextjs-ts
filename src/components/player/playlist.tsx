'use client'

import React, {useEffect, useState} from 'react';
import {Avatar, List, ListItemAvatar, ListItemButton, ListItemText, Paper} from "@mui/material";
import {usePlayer} from "@dcat23/components/player/provider";
import {Video} from "@prisma/client";
import moment from "moment";
import {Song} from "@dcat23/lib/types/player";

interface Props {
  playlistId?: string;
}

const items: Song<any>[] = [
  {
    src: "",
    title: "Days Before Rodeo (Full Mixtape)",
    secondary: "Travis Scott",
    webpageUrl: "Days Before Rodeo (Full Mixtape) [c4il_1ut3WU].m4a"
  },
  {
    src: "",
    title: "Control ft Kendrick Lamar, Jay Electronica",
    secondary: "Big Sean",
    webpageUrl: "Big Sean Control ft Kendrick Lamar, Jay Electronica [Lyrics] DIRTY (OFFICIAL LYRICS) [6S9K55amRBQ].m4a"
  },
  {
    src: "",
    title: "Earned It Prod By. Young Chop",
    secondary: "Chief Keef",
    webpageUrl: "Chief Keef - Earned It Prod By. Young Chop [jJgS9MY2WD8].m4a"
  },
]

export default function Playlist(props: Props) {
  const {
    selectedPlaylist,
    setCurrentSongId,
    setIsPlaying } = usePlayer();

  const [playlist, setPlaylist] = useState(selectedPlaylist.all())
  useEffect(() => {
    setPlaylist(selectedPlaylist.all())

  }, [selectedPlaylist]);



  function handleClick(song: Video) {
    if (song == null) return;

    console.log("playing", song.title)
    setCurrentSongId(song.webpageUrl as string);
    setIsPlaying(true);
  }

  return (
    <List sx={{ width: "50%"}}>
      {playlist.map((song: Song, idx) => (
        <Paper key={idx} sx={{my:1}} elevation={3}>
          <ListItemButton onClick={(e) => { handleClick(song)} }>
            <ListItemAvatar>
              <Avatar alt="playlist-avatar" src={song.thumbnail as string} />
            </ListItemAvatar>
            <ListItemText primary={song.title} secondary={moment(song.publishDate).fromNow()}/>
          </ListItemButton>
        </Paper>
      ))}
    </List>
  );
};
