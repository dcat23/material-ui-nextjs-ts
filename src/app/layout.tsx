import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Providers from "@dcat23/app/providers";
import NextLink from "next/link";
import {Stack} from "@mui/material";

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
        </Providers>
      </body>
    </html>
  );
}
