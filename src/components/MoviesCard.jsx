import {
   Card,
   CardContent,
   Grid,
   IconButton,
   MenuItem,
   Select,
   TextField,
   Typography,
} from '@material-ui/core';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeMovie } from '../Redux/actions/MoviesAction';

const MoviesCard = () => {
   const [input, setinput] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [selected, setSelected] = useState('');

   const movies = useSelector((state) => state.movies);

   const dispatch = useDispatch();

   const handleChange = (e) => {
      setinput(e.target.value);
   };

   useEffect(() => {
      const results = movies.filter((movie) => movie.name.includes(input));
      setSearchResult(results);
   }, [input, movies]);

   const handleRemove = (name) => {
      dispatch(removeMovie(name));
   };

   const handleSelect = (e) => {
      const result = e.target.value;
      setSelected(result);

      if (result === 'order') {
         const res = searchResult;
         setSearchResult(res);
      } else if (result === 'AtoZ') {
         const res1 = movies.sort((a, b) => {
            const fa = a.name.toLowerCase();
            const fb = b.name.toLowerCase();
            if (fa < fb) {
               return -1;
            }
            if (fa > fb) {
               return 1;
            }
            return 0;
         });
         setSearchResult(res1);
      } else if (result === 'ZtoA') {
         const res2 = movies.sort((a, b) => {
            const fa = b.name.toLowerCase();
            const fb = a.name.toLowerCase();
            if (fa < fb) {
               return -1;
            }
            if (fa > fb) {
               return 1;
            }
            return 0;
         });
         setSearchResult(res2);
      } else if (result === 'high') {
         const res3 = movies.sort((a, b) => b.rank - a.rank);
         setSearchResult(res3);
      } else if (result === 'low') {
         const res4 = movies.sort((a, b) => a.rank - b.rank);
         setSearchResult(res4);
      }
   };

   return (
      <>
         <Grid container spacing={3}>
            <Grid item xs={12}>
               <form style={{ textAlign: 'center' }}>
                  <TextField
                     variant="outlined"
                     label="Search Movies"
                     type="search"
                     value={input}
                     onChange={handleChange}
                     style={{ marginRight: '10px' }}
                  />
                  <Select
                     value={selected}
                     onChange={handleSelect}
                     variant="outlined"
                  >
                     <MenuItem value="order">Order By</MenuItem>
                     <MenuItem value="AtoZ">A to Z</MenuItem>
                     <MenuItem value="ZtoA">Z to A</MenuItem>
                     <MenuItem value="high">Highest Ranking</MenuItem>
                     <MenuItem value="low">Lowest Ranking</MenuItem>
                  </Select>
               </form>
            </Grid>
            <Grid item xs={12}>
               {searchResult.map((movie) => (
                  <Card
                     key={movie.name}
                     style={{
                        display: 'flex',
                        marginBottom: '20px',
                        backgroundColor: '#f5f5f5',
                        marginLeft: '30%',
                        width: '40%',
                        justifyContent: 'space-between',
                     }}
                  >
                     <CardContent>
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
                     </CardContent>
                     <CardContent>
                        <IconButton
                           edge="end"
                           aria-label="delete"
                           color="secondary"
                           onClick={() => handleRemove(movie.name)}
                        >
                           <DeleteRoundedIcon />
                        </IconButton>
                     </CardContent>
                  </Card>
               ))}
            </Grid>
         </Grid>
      </>
   );
};

export default MoviesCard;
