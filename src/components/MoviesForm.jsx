import {
   Button,
   FormControl,
   InputLabel,
   OutlinedInput,
   Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../Redux/actions/MoviesAction';

const MoviesForm = () => {
   const [movie, setmovie] = useState([]);
   const [rank, setrank] = useState([]);

   const dispatch = useDispatch();

   const handleChange = (e) => {
      if (e.target.name === 'name') {
         setmovie(e.target.value);
      } else if (e.target.name === 'rank') {
         setrank(e.target.value);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
         name: movie,
         rank: Number(rank),
      };
      dispatch(addMovie(formData));
      setmovie([]);
      setrank([]);
   };

   return (
      <>
         <Typography
            variant="h4"
            gutterBottom
            color="primary"
            style={{ marginLeft: '10%', marginBottom: '10px' }}
         >
            Add Movies Here
         </Typography>
         <form
            onSubmit={handleSubmit}
            style={{ textAlign: 'center', width: '80%', marginLeft: '10%' }}
         >
            <FormControl
               fullWidth
               variant="outlined"
               style={{ marginBottom: '20px' }}
            >
               <InputLabel htmlFor="outlined-adornment-amount">
                  Names
               </InputLabel>
               <OutlinedInput
                  id="outlined-adornment-amount"
                  placeholder="Enter Movie Name"
                  value={movie}
                  name="name"
                  onChange={handleChange}
                  labelWidth={60}
                  required
               />
            </FormControl>
            <FormControl
               fullWidth
               variant="outlined"
               style={{ marginBottom: '20px' }}
            >
               <InputLabel htmlFor="outlined-adornment-amount">Rank</InputLabel>
               <OutlinedInput
                  id="outlined-adornment-amount"
                  placeholder="IMDB Ranking"
                  value={rank}
                  name="rank"
                  onChange={handleChange}
                  labelWidth={60}
                  required
               />
            </FormControl>
            <Button
               type="submit"
               variant="contained"
               color="primary"
               style={{ width: '100%', padding: '12px' }}
            >
               ADD
            </Button>
         </form>
      </>
   );
};

export default MoviesForm;
