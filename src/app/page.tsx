import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@dcat23/components/ProTip';
import Copyright from '@dcat23/components/Copyright';
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <Container maxWidth="lg">
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
          Material UI - Next.js App Router example in TypeScript
        </Typography>
          <Box sx={{ maxWidth: 'sm' }}>
              <Button variant="contained" component={NextLink} href="/about">
                  Go to the about page
              </Button>
          </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
