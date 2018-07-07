// // $('')
// //     .hide()
// //     .slideDown(1000)
// //     .delay(3000)
// //     .slideUp();



// $(document).ready(function () {
//     $(".active").click(function () {
//         $(".items").hide(300);
//     });
// //     $(".active").click(function () {
// //         $(".items").show(300);
// //     });
// // });

// // $(document).ready(function() {
// //   $('.toggle-nav').click(function(e) {
// //     $(this).toggleClass('active')
// //     $('.menu ul').toggleClass('active');
// // 		e.preventDefault();
// // 	});
// // });

// let mainNav = document.getElementById('main-nav');
// let navbarToggle = document.getElementById('navbar-toggle');

// navbarToggle.addEventListener('click', function () {

//     if (this.classList.contains('active')) {
//         mainNav.style.display = "none";
//         this.classList.remove('active');
//     }
//     else {
//         mainNav.style.display = "flex";
//         this.classList.add('active');

//     }
// });

// $(".papaJohns").mouseout(function () {
//     $(".papaJohns").css("background-color", "rgba(0,0,0,0.5)");
//     $('.pjText').css("text-shadow", "0 0 0");
// });


$(document).ready(function () {
$("button").click(function () {
    $("ul.items").toggle();
});

// click listener added to the menu and then toggle the visibility of the nav element

// $(document).ready(function () {
//             $("button").click(function () {
//                 $(".items").toggle();
//             })

//  hide togglebutton over mediaq 799px 
$(document).on("click", function () {
    $(".showup").hide();
});

// $(document).on("button", function () {
//     $("ul").show();
// });

$("#menu").click(function () {
    $("#nav").toggle();
});