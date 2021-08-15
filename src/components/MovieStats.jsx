import { Card, Container, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

const MovieStats = () => {
   const movies = useSelector((state) => state.movies);
   const statsArr = movies.map((ele) => ele);

   return (
      <Container>
         <Typography variant="h4" gutterBottom color="primary">
            Top Ranked Movies ({movies.length})
         </Typography>
         {statsArr
            .sort((a, b) => b.rank - a.rank)
            .map((movie) => (
               <Card
                  key={movie.name}
                  style={{
                     marginBottom: '20px',
                     padding: '3%',
                     backgroundColor: '#f5f5f5',
                  }}
               >
                  <Typography
                     variant="h5"
                     style={{
                        textTransform: 'capitalize',
                        color: '#1a237e',
                     }}
                  >
                     Name - {movie.name}
                  </Typography>
                  <Typography
                     variant="h5"
                     style={{
                        textTransform: 'capitalize',
                        color: '#00bfa5',
                     }}
                  >
                     Rank - {movie.rank}
                  </Typography>
               </Card>
            ))}
      </Container>
   );
};
export default MovieStats;
