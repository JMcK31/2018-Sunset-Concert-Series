
// Jquery tells browser to listen for a click event
$("button.burger").click(function () {  // when button.burger is activated run function:
    $(".items").toggle(); // toggle class .itmes on click
});



window.onscroll = function () {  //tells browser to listen to scroll and be ready for a function
    myFunction();
};

var header = document.getElementById("naviBar");  //
var hold = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > hold) {    //class hold is a child element of pageYoffset
        header.classList.add("hold");  //class hold is added to the header div
    } else {
        header.classList.remove("hold");  //class hold is removed from the header div
    }
}



// $(".anthem").hover(function () {
//     $(this).toggleClass("hovered");
//     $(".anthemText").toggleClass("hovered");
// });

// $(".anthem").click(function () {
//     $(this).toggleClass("hovered");
//     $(".anthemText").toggleClass("hovered");
// });

$(document).ready(function () {
    $("question").click(function () {
        $(this).show("answer");
    });
});