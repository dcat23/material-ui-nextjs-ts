'use client'

import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react';
import {useSession} from "next-auth/react";
import {Session} from "next-auth";
import {SetState} from "@dcat23/lib/types";

interface PlayerProviderProps {
    children: ReactNode;
}
type Song<T = any> = T & {
    id: string | number;
}

type Playlist<T = any> = T & {
    songs: Song[];
    id: string;
}


export interface PlayerState {
    playlists: Playlist[]
    currentSongId: string,
    selectedPlaylist?: Playlist,
    isPlaying: boolean
    setPlaylists: SetState<Playlist[]>,
    setSelectedPlaylist: SetState<Playlist>,
    setCurrentSongId: SetState<string>,
    setIsPlaying: SetState<boolean>,
}

export const PlayerContext =  createContext<PlayerState | undefined>(undefined)
export function usePlayer() {
  return useContext(PlayerContext) as PlayerState;
}

const PlayerProvider = ({ children }: { children: ReactNode }) => {
    const [playlists, setPlaylists] = useState<Playlist[]>([])
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist>()
    const [currentSongId, setCurrentSongId] = useState<string>("")
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

  return (
    <PlayerContext.Provider value={{
        playlists,
        currentSongId,
        selectedPlaylist,
        isPlaying,
        setPlaylists,
        setSelectedPlaylist,
        setCurrentSongId,
        setIsPlaying

    }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;