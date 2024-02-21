'use client'

import React, {createContext, ReactNode, useContext, useState} from 'react';
import {SearchState} from "@dcat23/lib/types/search";
import {useRouter} from 'next/navigation';
import {requestInfo} from "@dcat23/lib/actions";

export const SearchContext = createContext<SearchState | undefined>(undefined)
export function useSearch() {
  return useContext(SearchContext) as SearchState;
}

export default function SearchProvider ({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("" )
  const router = useRouter()

  const execute = () => {
    if (query == "") return;
    console.log("execute search:", query)

    requestInfo({value: query.trim()})
      .then((resp) => {
        router.push(`/search/${encodeURIComponent(query.trim())}`)
        setQuery("");
      })
      .catch(console.log)

  }
  return (
    <SearchContext.Provider value={{query, setQuery , execute}}>
      {children}
    </SearchContext.Provider>
  );
};
