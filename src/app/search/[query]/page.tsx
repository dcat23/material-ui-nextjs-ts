import React, {Suspense} from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {decode} from "@dcat23/lib/utils";
import {Grid, List} from "@mui/material";
import SearchResult from "@dcat23/components/search/result";
import {ResultData} from "@dcat23/lib/types/search";

interface QueryPageProps {
  params: {query: string};
}

const results = [
  {
    title: "greatest video",
    thumbnail: "https://images.unsplash.com/photo-1525097487452-6278ff080c31?w=248&fit=crop&auto=format&dpr=2",
    videoId: "vi34324",
    publishDate: Date.now()
  },
  {
    title: "greatest video",
    thumbnail: "https://images.unsplash.com/photo-1525097487452-6278ff080c31?w=248&fit=crop&auto=format&dpr=2something awesome",
    videoId: "vi34324",
    publishDate: Date.now()
  },
  {
    title: "greatest video",
    thumbnail: "https://images.unsplash.com/photo-1525097487452-6278ff080c31?w=248&fit=crop&auto=format&dpr=2",
    videoId: "vi34324",
    publishDate: Date.now()
  },
]

const QueryPage: React.FC<QueryPageProps> = ({ params }) => {
  return (
    <Container>
       <span>{results.length}</span> Results
      <Typography variant="h3">{decode(params.query)}</Typography>
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
          {(results.length > 0 ? results : Array.from(new Array(5))).map(
            (item: ResultData | undefined, idx) => (
              <SearchResult key={idx} data={item} />
            )
          )}
        </Grid>
      </Suspense>
    </Container>
  );
};

export default QueryPage;