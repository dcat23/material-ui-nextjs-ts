'use client'

import React, {createContext, ReactNode, useContext, useState} from 'react';
import {SearchState} from "@dcat23/lib/types/search";

export const SearchContext = createContext<SearchState | undefined>(undefined)
export function useSearch() {
  return useContext(SearchContext) as SearchState;
}

export default function SearchProvider ({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("" )
  const execute = () => {
    console.log("execute search", query)
    setQuery("");
  }
  return (
    <SearchContext.Provider value={{query, setQuery , execute}}>
      {children}
    </SearchContext.Provider>
  );
};
