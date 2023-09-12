

// movies.forEach((element,i) => {
    //     //Cover imaeg is set through this
    //     element.getElementsByTagName("img")[0].src=moviesList[i].posterPath;
    //     console.log(i);
    //     //Songname is set on the Song  blocks
    
    // });
    window.addEventListener('DOMContentLoaded', function() {
        var movielist= document.getElementById('movie-img-list');
    var images = movielist.getElementsByTagName('img');
    
    var moviesList=[
        {movieName:"The Batman", posterPath:"movies/1.png", coverPath:"cover/1.jpg"},
        {movieName:"Stranger Things", posterPath:"movies/2.jpg", coverPath:"cover/2.jpg"},
        {movieName:"Ready player one", posterPath:"movies/3.jpg", coverPath:"cover/3.jpg"},
        {movieName:"The Shawshank Redemption", posterPath:"movies/4.jpg", coverPath:"cover/4.jpg"},
        {movieName:"Avatar", posterPath:"movies/5.jpg", coverPath:"cover/5.jpg"},
        {movieName:"The Matrix", posterPath:"movies/6.jpg", coverPath:"cover/6.jpg"},
        {movieName:"Avenger Endgame", posterPath:"movies/7.jpeg", coverPath:"cover/7.jpg"},
        {movieName:"Inception", posterPath:"movies/8.jpg", coverPath:"cover/8.jpg"},
        {movieName:"The Lion King", posterPath:"movies/9.jpeg", coverPath:"cover/9.jpg"},
        {movieName:"MHA", posterPath:"movies/10.jpg", coverPath:"cover/10.jpg"},
    ];
    
    for (var i = 0; i < movielist.length; i++) {
      images[i].src = moviesList[i].coverPath;
      images[i].alt = 'Image ' + (i+1); // Optional: Set alt text for accessibility
    }
  });

