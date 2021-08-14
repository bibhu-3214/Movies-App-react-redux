import React from 'react';
import { Container, Grid } from '@material-ui/core';
import MoviesForm from './MoviesForm';
import MoviesList from './MoviesList';
import MovieStats from './MovieStats';

const MoviesContainer = () => (
   <Container>
      <Grid container direction="row" spacing={5}>
         <Grid item xs={12}>
            <MoviesList />
         </Grid>
         <Grid item xs={6}>
            <MoviesForm />
         </Grid>
         <Grid item xs={6}>
            <MovieStats />
         </Grid>
      </Grid>
   </Container>
);

export default MoviesContainer;
