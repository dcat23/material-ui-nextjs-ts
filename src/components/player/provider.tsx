'use client'

import React, {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react';
import {useSession} from "next-auth/react";
import {Session} from "next-auth";

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

type SetState<T> = Dispatch<SetStateAction<T>>

export interface PlayerState {
    playlists: Playlist[]
    currentSongId: string,
    selectedPlaylist?: Playlist,
    isPlaying: boolean
    session: Session | null,
    status: string, // next-auth status
    setPlaylists: SetState<Playlist[]>,
    setSelectedPlaylist: SetState<Playlist>,
    setCurrentSongId: SetState<string>,
    setIsPlaying: SetState<boolean>,
}

export const PlayerContext =  createContext<PlayerState| undefined>(undefined)



const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
    const {data: session, status} = useSession();
    const [playlists, setPlaylists] = useState<Playlist[]>([])
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist>()
    const [currentSongId, setCurrentSongId] = useState<string>("")
    const [isPlaying, setIsPlaying] = useState<boolean>(false)


  return (
    <PlayerContext.Provider value={{
        session,
        status,
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