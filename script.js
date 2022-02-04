"use strict"
let numberOfFilms = undefined

while (numberOfFilms == '' || numberOfFilms < 0 || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели')
    if (numberOfFilms == '' || numberOfFilms < 0 || isNaN(numberOfFilms)) { alert('Произошла ошибка') }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

let a = ''
while (a == false || a.length > 50) {
    a = prompt('Какой из последних фильмов вы посмотрели?');
}
let b = ''
while (b == false || b.length > 50) {
    b = prompt('На сколько вы его оцените?');
}


personalMovieDB.movies[a] = b
console.log(personalMovieDB)

/* if (personalMovieDB.count < 10 && personalMovieDB > 0) { alert('Просмотрено мало фильмов') }
if (personalMovieDB.count > 10 && personalMovieDB.count < 30) { alert('Вы классный зритель') }
if (personalMovieDB.count > 30) { alert('Вы киноман') } */

if (personalMovieDB.count > 30) { alert('Вы киноман') }
else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) { alert('Вы классный зритель') }
else {alert('Просмотрено мало фильмов')}