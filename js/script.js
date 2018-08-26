// Jquery tells browser to listen for a click event
$("button.burger").click(function () { // click event handler tells browser to "do something" when button.burger engaged 
    $(".items").toggle(); //  click event activates toggle function, .items display: block is activated on toggle click and deactivated on toggle click
});


//js for navigation bar stick to header, until reaching bottom of header
window.onscroll = function () { //tells browser to listen for a verticle scroll event handler and be ready to execute a function
    myFunction();
};
var header = document.getElementById("naviBar"); //targets class naviBar and declares as variable header
var hold = header.offsetTop; //pixelated distance of variable header is entered into variable hold
//class hold is added to naviBar when vertical scroll reaches bottom of header and removed when the page scrolls past the header.
function myFunction()  {
    if (window.scrollY > hold) { 
        header.classList.add("hold");
    } else {
        header.classList.remove("hold"); 
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

//attempt to change the color of questions upon click
$(document).ready(function() {
    $('.about-btn').click(function(){
    $(this).css('font', '#FFFFFF');
    });
});

window.onclick = function () {
    myFunction();
};

document.getElementsByClassName('about-btn').onclick = changeColor;

    function changeColor()  {
        console.log(changeColor);
        document.toggle.style.color = "red";
        return false;
    }