// function ScrollHandler(pageId) {
//     var page = $('#' + pageId);
//     var pageStart = page.offset().top;
//     var pageJump = false;
//
//     function scrollToPage() {
//         pageJump = true;
//         $('html, body').animate({
//             scrollTop: pageStart
//         }, {
//             duration: 1000,
//             complete: function() {
//                 pageJump = false;
//             }
//         });
//     }
//     window.addEventListener('wheel', function(event) {
//         var viewStart = $(window).scrollTop();
//         if (!pageJump) {
//             var pageHeight = page.height();
//             var pageStopPortion = pageHeight / 2;
//             var viewHeight = $(window).height();
//
//             var viewEnd = viewStart + viewHeight;
//             var pageStartPart = viewEnd - pageStart;
//             var pageEndPart = (pageStart + pageHeight) - viewStart;
//
//             var canJumpDown = pageStartPart >= 0;
//             var stopJumpDown = pageStartPart > pageStopPortion;
//
//             var canJumpUp = pageEndPart >= 0;
//             var stopJumpUp = pageEndPart > pageStopPortion;
//
//             var scrollingForward = event.deltaY > 0;
//             if (  ( scrollingForward && canJumpDown && !stopJumpDown)
//                 || (!scrollingForward && canJumpUp   && !stopJumpUp)) {
//                 event.preventDefault();
//                 scrollToPage();
//             }
//         } else {
//             event.preventDefault();
//         }
//     });
// }
// new ScrollHandler('profil');
// new ScrollHandler('competences');
// new ScrollHandler('exp');
// new ScrollHandler('perso');
// new ScrollHandler('contact');

$('a[href^="#"]').click(function(){

    var the_id = $(this).attr("href");
    var headerHeight = $(".navbar").height() + 10;
    $('html, body').animate({
        scrollTop:$(the_id).offset().top - headerHeight
    }, 'slow');

    return false;});