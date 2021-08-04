// Your code goes here
let nav = document.querySelectorAll('.nav a')
// console.log(nav)

// nav.addEventListener('mouseover', function(event) {
//     event.target.style.backgroundColor = 'pink';

//     setTimeout(function() {
//         event.target.style.backgroundColor = "";
//     }, 500);
// }, false);

nav.forEach(function(item) {
    item.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'pink';
    
        setTimeout(function() {
            event.target.style.backgroundColor = "";
        }, 500);
    }, false);
})
