'use client'

import React from 'react';
import {FormControl, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import Box from "@mui/material/Box";
import {useSearch} from "@dcat23/components/search/provider";
import {InputChangeEvent, InputKeyboardEvent} from "@dcat23/lib/types/events";

interface Props {}

export default function SearchBar(props: Props) {
  const { query, setQuery, execute } = useSearch();

  function handleChange(e: InputChangeEvent) {
    setQuery(e.target.value as string);
  }

  function handleKeyUp(e: InputKeyboardEvent) {
    if (e.key === "Enter") execute();
  }

  return (
    <Box sx={{ width: { xs: "100%", md: "75%" , lg: "50%" }}}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="search-input">Search</InputLabel>
        <OutlinedInput
        sx={{ width:"100%", my:2 }}
        value={query}
        id="search-input"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        endAdornment={
          <InputAdornment position="end">
            {/*<Tooltip title={`Toggle format [mp4 | m4a]`}>*/}
            {/*  <Button onClick={handleFormat}>*/}
            {/*    <Typography>{format}</Typography>*/}
            {/*  </Button>*/}
            {/*</Tooltip>*/}
          </InputAdornment>
        }
      />
      </FormControl>
    </Box>
  );
};
