import React from 'react';
import {ResultData} from "@dcat23/lib/types/search";
import Image from "next/image";

import Box from "@mui/material/Box";
import {decode} from "@dcat23/lib/utils";
import {Card, CardActions, CardContent, Paper, Skeleton, Typography, Tooltip} from "@mui/material";
import moment from "moment";
import Button from "@mui/material/Button";

interface SearchResultProps {
  data?: ResultData;
}

const SearchResult: React.FC<SearchResultProps> = ({ data }) => {
  const title = decode(data?.title as string);

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
                {decode(data.title)}
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