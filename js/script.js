
// Jquery tells browser to listen for a click event
$("button.burger").click(function () {  // when button.burger is activated run function:
    $(".items").toggle(); // toggle class .itmes on click event, toggle activates .items display: block;
});

//chain a function to turn off navBar row to setup slideToggle function above 

window.onscroll = function () {  //tells browser to listen for a verticle scroll event and be ready to execute a function
    myFunction();
};

var header = document.getElementById("naviBar");  //target class naviBar and declare as variable header
var hold = header.offsetTop;  //offset height of the header element is declared as var hold 

function myFunction() {
    if (window.scrollY > hold) {    //If the window scrolls verically, activate class hold
        header.classList.add("hold");  //class hold is added to the header section, sticky effect is activated
    } else {
        header.classList.remove("hold");  //class hold is removed from the header section if the broswer does not scroll or the scroll exceeds the header verticle height
    }
}
 

//about page q&a
$(document).ready(function () {

    $('.qAnda li p').hide();

    $('.btn').click(function () {
        let $answer = $(this).siblings('p');
        $answer.fadeToggle('900');
    });
});