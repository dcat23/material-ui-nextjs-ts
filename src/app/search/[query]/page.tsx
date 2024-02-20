import React, {Suspense} from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {decodeUrl} from "@dcat23/lib/utils";
import {Grid} from "@mui/material";
import SearchResult from "@dcat23/components/search/result";
import prisma from "@dcat23/lib/prisma";

import {Video} from "@prisma/client";

interface QueryPageProps {
  params: {query: string};
}

const QueryPage: React.FC<QueryPageProps> = async ({ params }) => {
  const title = decodeURIComponent(params.query);

  const data = await prisma.response.findFirst({
    where: {
      query: title
    },
    include: {
      videos: true
    }
  })
  return (
    <Container>
       <span>{data?.videos.length || 0}</span> Results
      <Typography variant="h3">{decodeUrl(params.query)}</Typography>
      <Suspense
        fallback={
          <Grid
            container
            wrap="nowrap"
            sx={{ overflow: "scroll" }}
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(new Array(5)).map((_, idx) => (
              <SearchResult key={idx} />
            ))}
          </Grid>
        }
      >
        <Grid
          container
          wrap="nowrap"
          sx={{ overflow: "scroll" }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {(data?.videos && data?.videos.length > 0 ? data?.videos : Array.from(new Array(5))).map(
            (item: Video | undefined, idx) => (
              <SearchResult key={idx} data={item} />
            )
          )}
        </Grid>
      </Suspense>
    </Container>
  );
};

export default QueryPage;