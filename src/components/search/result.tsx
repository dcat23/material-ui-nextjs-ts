'use client'

import React from 'react';
import Image from "next/image";
import {decodeUrl} from "@dcat23/lib/utils";
import {Card, CardContent, Divider, Paper, Skeleton, Typography} from "@mui/material";
import moment from "moment";
import {Video} from "@prisma/client";
import {usePlayer} from "@dcat23/components/player/provider";
import {Song} from "@dcat23/lib/types/player";
import Controls from "@dcat23/components/player/controls";
import {toast} from "sonner";

interface SearchResultProps {
  data?: Video;
}

const SearchResult: React.FC<SearchResultProps> = ({ data }) => {
  const title = decodeUrl(data?.title as string);
  const player = usePlayer();

  function handleClick() {
    if (data) {
      player.selectedPlaylist.add(data as Song<Video>)
      toast.info(`Adding ${data.title} to playlist`)
    }
  }

  return (
    <>
      <Paper sx={{mx: 2, my: 5}} elevation={3} onClick={handleClick}>
        {/*<Card onClick={handleClick} sx={{mx: 2, my: 5}} elevation={3} >*/}
          {data ? (
            <CardContent>
              <Image
                alt={title}
                src={data?.thumbnail as string}
                width={210}
                height={118}
                style={{ cursor: "pointer" }}
              />
              <Typography>{moment(data.publishDate).fromNow()}</Typography>
              {/*<Typography component="h3">*/}
              {/*</Typography>*/}
              <Divider sx={{mb: 1}}/>
              <Typography>
                {decodeUrl(data.title as string)}
              </Typography>
            </CardContent>
            ) : (
              <CardContent>
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton />
                <Divider />
                <Skeleton width="60%" />
              </CardContent>
            )}
        {/*</Card>*/}
      </Paper>
    </>
  )};

export default SearchResult;