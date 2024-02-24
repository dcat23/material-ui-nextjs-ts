export type Song<T = any> = T & {
  next: T | null;
  prev: T | null;
}



export interface Playlist<T = any> {
  name: string;
  current: Song<T> | null;
  all: Array<Song<T>>
  add(song: T): void;
  addNext(song: T): void;
  remove(song: T): void;
  skip(): void;
}

