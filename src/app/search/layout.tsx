import React, { ReactNode } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SearchBar from '@dcat23/components/search/search-bar';
import SearchProvider from "@dcat23/components/search/provider";

export default function SearchLayout ({ children }: { children: ReactNode }) {
  return (
    <SearchProvider>
      <Container maxWidth="xl">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Search layout
          </Typography>
          <SearchBar />
          {children}
        </Box>
      </Container>
    </SearchProvider>
  );
};
