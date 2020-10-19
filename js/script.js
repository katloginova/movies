"use strict";

const numberOfFilms = +prompt("How many films do you watch?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("What kind of last films do you like?", ""),
      b = prompt("how much do you evaluate?", ""),
      c = prompt("What kind of last films do you like?", ""),
      d = prompt("how much do you evaluate?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);