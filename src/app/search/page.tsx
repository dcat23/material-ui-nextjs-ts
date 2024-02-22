import React, {Suspense} from 'react';
import Typography from "@mui/material/Typography";
import {
  Card, CardContent,
  ListItemButton,
  ListItemText,
  Paper,
  Skeleton
} from "@mui/material";
import {Query} from "@prisma/client";
import Container from "@mui/material/Container";
import prisma from "@dcat23/lib/prisma";
import moment from "moment/moment";
import NextLink from "next/link";

interface Props {}

export default async function Search(props: Props) {
  const data = await prisma.query.findMany({
    where: {
      value: { not: null }
    },
    orderBy: [
      {
        createdAt: 'desc'
      }
    ],
  })


  return (
    <Container>
      <Typography variant="h4">Recent</Typography>
      <Suspense
        fallback={
          <Paper>
            {Array.from(new Array(5)).map((_, idx) => (
              <Card key={idx} sx={{my:1}} elevation={3}>
                <CardContent>
                  <Skeleton />
                  <Skeleton width="60%" />
                </CardContent>
              </Card>
            ))}
          </Paper>
        }
      >
        <Paper>
          {data.length ? (data.map(
            (item: Query, idx) => (
              <Card key={idx} sx={{my:1}} elevation={3}>
                <CardContent>
                  <ListItemButton key={idx} component={NextLink} href={`/search/${encodeURIComponent(item.value as string)}`}>
                    <ListItemText primary={item.value} secondary={moment(item.createdAt).fromNow()}/>
                  </ListItemButton>
                </CardContent>
              </Card>
            )
          )) : (Array.from(new Array(5)).map(
            (_, idx) => (
              <Card key={idx} sx={{my:1}} elevation={3}>
                <CardContent>
                  <Skeleton width="60%" />
                  <Skeleton width="20%" />
                </CardContent>
              </Card>
            )
          ))}
        </Paper>
      </Suspense>
    </Container>
  );
};
