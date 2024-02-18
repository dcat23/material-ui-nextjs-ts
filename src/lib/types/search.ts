import {SetState} from "@dcat23/lib/types/index";

export interface SearchState {
  query: string;
  setQuery: SetState<string>;
  execute(): void;
}

export interface ResultData {
  title: string;
  thumbnail: string;
  videoId: string;
  publishDate: number
}