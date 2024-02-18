import {SetState} from "@dcat23/lib/types/index";

export interface SearchState {
  query: string;
  setQuery: SetState<string>;
  execute(): void;
}