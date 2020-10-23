"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How many films do you watch?", "");
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films do you watch?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("What kind of last films do you like?", ""),
                  b = prompt("how much do you evaluate?", "");
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический киноман');
        } else if (personalMovieDB > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`What kind of genres do you like at number ${i}?`, "");
            if(genre != '' && genre != null) {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        // for (let i = 1; i < 2; i++) {
        //     let genre = prompt(`What kind of genres do you like for comma?`, "").toLowerCase();
        //     if (genre === '' || genre == null) {
        //         console.log("No correct!");
        //         i--;
        //     } else {
        //         personalMovieDB.genres = genre.split(", ");
        //         personalMovieDB.genres.sort();
        //     }
        // }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favourite genre ${i + 1} is ${item}`);
        });
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false; 
        } else {
            personalMovieDB.privat = true;
        }
    }
};


