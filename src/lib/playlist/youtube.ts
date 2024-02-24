import {Playlist, Song} from "@dcat23/lib/types/player";
import {Video} from "@prisma/client";
import {mockProviders} from "next-auth/client/__tests__/helpers/mocks";


class SongNode  implements Song<Video> {
  private _next: Video | null = null;
  private _prev: Video | null = null;

  id

  get next(): Video | null {
    return this._next;
  }

  set next(value: Video | null) {
    this._next = value;
  }

  get prev(): Video | null {
    return this._prev;
  }

  set prev(value: Video | null) {
    this._prev = value;
  }

  constructor(id: string | number, next: Video, prev: Video) {
    this._id = id;
    this._next = next;
    this._prev = prev;
  }

  get hasNext(): boolean {
    return this.next !== null
  }
  get hasPrev(): boolean {
    return this.prev !== null
  }
}


class Youtube implements Playlist<Video> {

  private _name = "youtube"
  private _songs = new Set<SongNode>
  private _current: SongNode

  get current() {
    return this._current;
  }

  set current(value: Song<Video> | null) {
    const next = this._current.next
    this._current = value;
  }

  add(song: Song<Video>) {
    if (song == null) return;
    let next = this.current.next;


    this.songs.add(song);
  }

  addNext(song: Song<Video>) {
    if (song == null) return;
    this.songs.add(song);
  }
  skip() {
    if (this.current == null) return;
    this.current = this.current?.next
  }

  remove(song: Song<Video>) {
    if (song == null) return;
    this.songs.delete(song);
  }
  get all() {
    if (!this.songs) return []
    return Array.from(this.songs);
  }
  get name() {
    return this._name;
  }
  get songs(): Set<any> {
    return this._songs;
  }

  find(id: string | number) {
    this.songs.forEach((s) => {
      if (s.id == id) {
        return s;
      }
    })
    return null;
  }
}

export const youtubePlaylist = new Youtube();