import { Card, Container, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

const MovieStats = () => {
   const movies = useSelector((state) => state.movies);
   const statsArr = movies.map((ele) => ele);

   return (
      <Container>
         <Typography variant="h3" gutterBottom align="center" color="primary">
            Total Movies - ({movies.length})
         </Typography>
         <Typography
            variant="h5"
            gutterBottom
            align="center"
            style={{ color: 'seagreen' }}
         >
            Top Ranked Movies
         </Typography>
         {statsArr
            .sort((a, b) => b.rank - a.rank)
            .map((movie) => (
               <Card key={movie.name} style={{ marginBottom: '20px' }}>
                  <Typography
                     variant="h5"
                     align="center"
                     color="secondary"
                     style={{
                        margin: '10px',
                        padding: '10px',
                        textTransform: 'capitalize',
                     }}
                  >
                     {movie.name} - {movie.rank}
                  </Typography>
               </Card>
            ))}
      </Container>
   );
};
export default MovieStats;
