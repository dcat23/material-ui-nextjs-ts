import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Providers from "@dcat23/app/providers";
import NextLink from "next/link";
import {Stack} from "@mui/material";
import Controls from "@dcat23/components/player/controls";
import Box from "@mui/material/Box";
import ReactPlayer from "react-player";
import PlayerDisplay from "@dcat23/components/player/player-display";


export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CssBaseline />
          <Stack marginLeft={2} marginTop={2}>
            <NextLink href="/search">Search</NextLink>
            <NextLink href="/player">Player</NextLink>
          </Stack>
          {props.children}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Controls />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
