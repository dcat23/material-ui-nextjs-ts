import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Providers from "@dcat23/app/providers";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CssBaseline />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
