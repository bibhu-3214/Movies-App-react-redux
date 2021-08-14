import { Container, Typography } from '@material-ui/core';
import React from 'react';
import MoviesContainer from './components/MoviesContainer';

const App = () => (
   <Container>
      <Typography variant="h2" gutterBottom color="primary" align="center">
         My Big Movies List
      </Typography>
      <MoviesContainer />
   </Container>
);

export default App;
