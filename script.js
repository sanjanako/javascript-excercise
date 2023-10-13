let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
  constructor(title, rating, haveWatched) {
    this.title = title;
    this.rating = rating;
    this.haveWatched = haveWatched;
  }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
  allMovies.push(movie);
  console.log("A new movie is added");
  document.write('<br>' + "A new movie is added");
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
  console.log("Printing all movies....");
  document.write('<br>' + "Printing all movies....");
  for (let i = 0; i < allMovies.length; i++) {
    console.log(allMovies[i].title + ", rating of " + allMovies[i].rating + ", havewatched: " + allMovies[i].haveWatched);
    document.write('<br>' + allMovies[i].title + ", rating of " + allMovies[i].rating + ", havewatched: " + allMovies[i].haveWatched);
  }
  console.log("\nYou have " + allMovies.length + " movies in total");
  document.write('<br>' + "You have " + allMovies.length + " movies in total");
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
  console.log("printing movie that has a rating higher than " + rating);
  document.write('<br>' + "printing movie that has a rating higher than " + rating);
  let count = 0;
  for (let i = 0; i < allMovies.length; i++) {
    if (allMovies[i].rating > rating) {
      console.log(allMovies[i].title + " has a rating of " + allMovies[i].rating);
      document.write('<br>' + allMovies[i].title + " has a rating of " + allMovies[i].rating);
      count++;
    }
  }
  console.log("\nIn total, there are " + count + " matches");
  document.write('<br>' + "In total, there are " + count + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
  console.log("changing the status of the movie...");
  document.write('<br>' + "changing the status of the movie...");
  for (let i = 0; i < allMovies.length; i++) {
    if (allMovies[i].title === title) {
      if (allMovies[i].haveWatched === true) {
        allMovies[i].haveWatched = false;
      } else {
        allMovies[i].haveWatched = true;
      }
    }
  }
}


////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
document.write("----------------");
console.log("running program......");
document.write('<br>' + "running program......");
console.log("----------------");
document.write('<br>' + "----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
document.write('<br>' + "----------------");
addMovie(movie1);
console.log("----------------");
document.write('<br>' + "----------------");


changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");
document.write('<br>' + "----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");
document.write('<br>' + "----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");
document.write('<br>' + "----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");
document.write('<br>' + "----------------");

highRatings(3.5);