const lscl=document.getElementById('left-scroll');
const rscl=document.getElementById('right-scroll');

lscl.addEventListener('click', function() {
    // console.log("left-scroll");
    document.querySelector('.movie-list').scrollBy({
        left: -150,
        behavior: 'smooth'
    });
});

rscl.addEventListener('click', function() {
    document.querySelector('.movie-list').scrollBy({
        left: 150,
        behavior: 'smooth'
    });
});
