$("#hamburger").click(function(){
    $("#arrow").fadeToggle(0);
});


//   $(window).scroll(function () {
//       var scrollTop = $(window).scrollTop();
//       var height = $(window).height();

//       $('#arrow-div').css({
//           'opacity': ((height - 1.5*(scrollTop)) / height)

//    }); 
//  });


 $(window).scroll(function(){
     var scrollTop = $(window).scrollTop();
      var height = $(window).height();
      $("#arrow-div").fadeToggle(600);
 });


// $(function () {
//             $(document).scroll(function () {
//                 var $nav = $("#mainNavbar");
//                 $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//             });
//         });


// window.open("https://www..com/","_self")