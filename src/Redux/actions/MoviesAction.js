export const addMovie = (formData) => ({
   type: 'ADD_MOVIE',
   payload: formData,
});

export const removeMovie = (name) => ({
   type: 'REMOVE_MOVIE',
   payload: name,
});
