import {Playlist, Song} from "@dcat23/lib/types/player";
import {Video} from "@prisma/client";

export const youtubePlaylist: Playlist<Video> = {
  id: "youtube",
  songs: new Set<Song<Video>>,
  add(song: Song<Video>) {
    this.songs.add(song);
  },
  remove(song: Song<Video>) {
    this.songs.delete(song);
  },
  all() {
    if (!this.songs) return []
    return Array.from(this.songs);
  }


}