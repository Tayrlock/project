"use strict"


// function start() {

//     while (numberOfFilms == '' || numberOfFilms < 0 || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы посмотрели')
//         if (numberOfFilms == '' || numberOfFilms < 0 || isNaN(numberOfFilms)) { alert('Произошла ошибка') }
//     }
// }
// start()

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        while (this.count == '' || this.count < 0 || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы посмотрели')
            if (this.count == '' || this.count < 0 || isNaN(this.count)) { alert('Произошла ошибка') }
        }
    },
    rememberMyFils(){
        let a = ''
        while (a == false || a.length > 50) {
            a = prompt('Какой из последних фильмов вы посмотрели?');
        }
        let b = ''
        while (b == false || b.length > 50) {
            b = prompt('На сколько вы его оцените?');
        }
        this.movies[a] = b
    },
    detectPersonalLevel(){
        if (this.count > 30) { alert('Вы киноман') }
        else if (this.count >= 10 && this.count <= 30) { alert('Вы классный зритель') }
        else { alert('Просмотрено мало фильмов') }
    },
    showMyDB(hidden) {
        if (!hidden) { console.log(personalMovieDB) }
    },
    writeYourGenres(){
        for (let i = 1; i <= 3; i++) {
            let a = ''
            do {
                a = prompt(`Ваш любимый жанр под номером ${i}`)
            } while (!a)
            this.genres.push(a)
        }
        // console.log(this.genres)
        this.genres.forEach((item, i)=> { console.log('Любимый жанр №' + (i + 1) + ' - это: ' + item) })

    },
    toggleVisibleMyDB() {
        (this.privat) ? this.privat = false : this.privat = true;
    }
}

personalMovieDB.writeYourGenres()

// console.log(personalMovieDB)
// personalMovieDB.toggleVisibleMyDB()
// console.log(personalMovieDB)

// function rememberMyFils() {
//     let a = ''
//     while (a == false || a.length > 50) {
//         a = prompt('Какой из последних фильмов вы посмотрели?');
//     }
//     let b = ''
//     while (b == false || b.length > 50) {
//         b = prompt('На сколько вы его оцените?');
//     }
// }
// rememberMyFils();

// function detectPersonalLevel() {
//     if (personalMovieDB.count > 30) { alert('Вы киноман') }
//     else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) { alert('Вы классный зритель') }
//     else { alert('Просмотрено мало фильмов') }
// }

// function showMyDB(hidden) {
//     if (!hidden) { console.log(personalMovieDB) }
// }
//showMyDB(personalMovieDB.privat)

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`))
//         console.log(personalMovieDB.genres)
//     }
// }

