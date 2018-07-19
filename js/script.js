
// Jquery tells browser to listen for a click event
$("button.burger").click(function () {  // when button.burger is activated run function:
    $(".items").toggle(); // toggle class .itmes on click
});



// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction();
};

// Get the header
var header = document.getElementById("naviBar");

// Get the offset position of the navbar
var hold = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > hold) {
        header.classList.add("hold");
    } else {
        header.classList.remove("hold");
    }
}