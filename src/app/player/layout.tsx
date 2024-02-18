import React, { ReactNode } from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PlayerLayout ({ children }: { children: ReactNode }) {
  return (
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
          Player
        </Typography>
      {children}
      </Box>
    </Container>
  );
};
