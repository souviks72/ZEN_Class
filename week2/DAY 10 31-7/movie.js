class Movie{
    constructor(title,studio,rating='PG'){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

getPG = (arr) =>  arr.filter(movie => movie.rating === 'PG')

let movie = new Movie('Casino Royale', 'Eon Productions','PG13');
let movie2 = new Movie('Casino Royale2', 'Eon Productions','PG');
let movie3 = new Movie('Casino Royale3', 'Eon Productions','PG');
let movie4 = new Movie('Casino Royale4', 'Eon Productions','PG');

console.log(`Title: ${movie.title}, Studio: ${movie.studio}, Rating: ${movie.rating}`);

console.log(getPG([movie,movie2,movie3,movie4]));
