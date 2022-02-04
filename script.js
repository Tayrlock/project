"use strict"
let numberOfFilms = undefined
function start() {

    while (numberOfFilms == '' || numberOfFilms < 0 || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели')
        if (numberOfFilms == '' || numberOfFilms < 0 || isNaN(numberOfFilms)) { alert('Произошла ошибка') }
    }
}

start()
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

function rememberMyFils() {
    let a = ''
    while (a == false || a.length > 50) {
        a = prompt('Какой из последних фильмов вы посмотрели?');
    }
    let b = ''
    while (b == false || b.length > 50) {
        b = prompt('На сколько вы его оцените?');
    }
}
rememberMyFils();

function detectPersonalLevel() {
    if (personalMovieDB.count > 30) { alert('Вы киноман') }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) { alert('Вы классный зритель') }
    else { alert('Просмотрено мало фильмов') }
}

personalMovieDB.movies[a] = b
console.log(personalMovieDB)

function showMyDB(hidden) {
    if (!hidden) { console.log(personalMovieDB) }
}
//showMyDB(personalMovieDB.privat)
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`))
        console.log(personalMovieDB.genres)
    }
}

