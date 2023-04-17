// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((eachDirector) => {
        return eachDirector.director
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter((eachSpielberg) => {
        return eachSpielberg.director === 'Steven Spielberg' && eachSpielberg.genre.includes('Drama')

    })
    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length){
        return 0
    }
    
    const sumScores = moviesArray.reduce((acc, eachScore) => {
    if (eachScore.score === undefined){
        return acc
    }
        return acc + eachScore.score
        
    }, 0)
    
    const scoresAvg = sumScores / moviesArray.length
   
    const roundScores = scoresAvg.toFixed(2)
    const toNumber = Number(roundScores)
    return toNumber    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const dramaMovies = moviesArray.filter((eachDrama) => {
        // return eachDrama.genre.includes('Drama')
        return eachDrama.genre.includes('Drama')
    })
    if (!dramaMovies.length){
        return 0
    }
    const dramaScores = dramaMovies.reduce((acc, eachDramaScore) => {
        return acc + eachDramaScore.score
    },0 )

    const dramaScoresAvg = dramaScores / dramaMovies.length
    const dramaRound = dramaScoresAvg.toFixed(2)
    const dramaAvgNumber = Number(dramaRound)
    return dramaAvgNumber
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopyByYear = JSON.parse(JSON.stringify(moviesArray))
    if (moviesCopyByYear.year === moviesCopyByYear.year){
        // moviesCopyByYear.sort((a, b) => {
        //     if(a.title < b.title) {
        //         return -1 
        //     }
        //     if(a.title > b.title) {
        //         return 1
        //     }
        //     return 0

        // })
        moviesCopyByYear.sort()
    }
    moviesCopyByYear.sort((x, y) => {
        return x.year - y.year
    }) 
    
    return moviesCopyByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
const moviesCopyByTitle = JSON.parse(JSON.stringify(moviesArray))
const movieTitles = moviesCopyByTitle.map((eachTitle) => {
    return eachTitle.title
})
movieTitles.sort()
if (movieTitles.length > 20){
    return movieTitles.slice(0,20)
}
return movieTitles

}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
