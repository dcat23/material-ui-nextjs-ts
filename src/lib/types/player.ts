export type Song<T = any> = T & {
  id: string | number;
}

export interface Playlist<T = any> {
  id: string;
  songs: Set<Song<T>>;
  add(song: Song<T>): void;
  remove(song: Song<T>): void;
  all(): Array<Song<T>>
}