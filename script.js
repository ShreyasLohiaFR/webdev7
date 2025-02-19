let movies = [];
const movieInput = document.getElementById('movieInput');
const addMovieBtn = document.getElementById('addMovieBtn');
const movieList = document.getElementById('movieList');
const totalMovies = document.getElementById('totalMovies');
const clearListBtn = document.getElementById('clearListBtn');
function updateList() {
  movieList.innerHTML = movies.map((movie, index) =>
    `<li onclick="removeMovie(${index})">${movie}</li>`
  ).join('');
  totalMovies.textContent = `Total Movies: ${movies.length}`;
}
function addMovie() 
{
  const movieName = movieInput.value.trim();
  if (movieName) 
    {
    movies.push(movieName);
    movieInput.value = '';
    updateList();
  } 
  else 
  {
    alert('Please enter a movie name');
  }
}
function removeMovie(index)
{
  movies.splice(index, 1);
  updateList();
}
function clearList() 
{
  movies = [];
  updateList();
}
addMovieBtn.addEventListener('click', addMovie);
clearListBtn.addEventListener('click', clearList);
updateList();