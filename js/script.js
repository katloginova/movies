"use strict";

const numberOfFilms = +prompt("How many films do you watch?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//1-ый способ (мой)
/* for (let i = 0; i < 2; i++) {
    let a = prompt("What kind of last films do you like?", "");
    while (a == null || a.length === 0 || a.length > 50) {
        a = prompt("What kind of last films do you like?", "");
    }
    let b = prompt("how much do you evaluate?", "");
    while (b == null || b.length === 0 || b.length > 50) {
        b = prompt("how much do you evaluate?", "");
    }
    personalMovieDB.movies[a] = b;
} */

//2-ой способ (из урока)
for (let i = 0; i < 2; i++) {
    const a = prompt("What kind of last films do you like?", ""),
          b = prompt("how much do you evaluate?", "");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        i--;
        console.log('error');
    }
}
console.log(personalMovieDB);

/* if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический киноман');
} else if (personalMovieDB > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
} */