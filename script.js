"use strict"
const numberOfFilms = +prompt('Сколько фильмов вы посмотрели')
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

let a = prompt('Какой из последних фильмов вы посмотрели?');
let b = prompt('На сколько вы его оцените?');



personalMovieDB.movies[a] = b


console.log(personalMovieDB)