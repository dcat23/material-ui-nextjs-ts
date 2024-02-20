import React from 'react';
import Image from "next/image";
import {decodeUrl} from "@dcat23/lib/utils";
import {Card, CardContent, Paper, Skeleton, Typography} from "@mui/material";
import moment from "moment";
import {Video} from "@prisma/client";

interface SearchResultProps {
  data?: Video;
}

const SearchResult: React.FC<SearchResultProps> = ({ data }) => {
  const title = decodeUrl(data?.title as string);

  return (
    <>
      <Paper sx={{mx: 2, my: 5}} elevation={3}>
        <Card>
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
              <Typography>
                {decodeUrl(data.title as string)}
              </Typography>
            </CardContent>
            ) : (
              <CardContent>
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton />
                <Skeleton width="60%" />
              </CardContent>
            )}
        </Card>
      </Paper>
    </>
  )};

export default SearchResult;