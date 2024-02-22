'use client'

import React, { ReactNode } from 'react';
import {SessionProvider} from "next-auth/react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v14-appRouter";
import {ThemeProvider} from "@mui/material/styles";
import PlayerProvider from "@dcat23/components/player/provider";
import theme from "@dcat23/theme";
import {Toaster} from "sonner";


export default function Providers ({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <SessionProvider>
        <ThemeProvider theme={theme}>
          <Toaster className="dark:hidden" />
          <Toaster theme="dark" className="hidden dark:block" />
          <PlayerProvider>
            {children}
        </PlayerProvider>
      </ThemeProvider>
    </SessionProvider>
    </AppRouterCacheProvider>
  );
};
