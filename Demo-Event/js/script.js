const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'Close';
  } else {
    btn.innerHTML = 'Menu';
  }
});


//  jQueryのCDN
$(function(){
  $(".fed").hide().fadeIn('slow');
});


//スクロールトップボタン
$(function () {
  var pagetop = $('#js-pagetop');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({
        scrollTop: 0
    }, 100);
    return false;
  });
});


//要素フェードイン

jQuery(function ($) {
  var fadeIn = $('.fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
});



/* 小さくなった時のメニューボタン */

$(function () {
  $('.js-sm_nav').on('click', function () {        // js-sm_navクラスをクリックすると、
    $('.menu , .sm_nav-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});






//要素フェードイン

// $(function () {
//   const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
//   const fade_move = 100; // どのぐらい要素を動かすか(px)
//   const fade_time = 800; // フェードの時間(ms)
//   // フェード前のcssを定義
//   $(".scroll-fade-up").css({
//     opacity: 0,  //まずは要素隠す
//     transform: "translateY(" + fade_move + "px)",  //下から上にフェードイン（Xにしたら横から）
//     transition: fade_time + "ms",
//   });

//   // スクロールまたはロードするたびに実行
//   $(window).on("scroll load", function () {
//     const scroll_top = $(this).scrollTop();
//     const scroll_bottom = scroll_top + $(this).height();
//     const fade_position = scroll_bottom - fade_bottom;
//     $(".scroll-fade-up").each(function () {
//       const this_position = $(this).offset().top;
//       if (fade_position > this_position) {
//         $(this).css({
//           opacity: 1,
//           transform: "translateY(0)",
//         });
//       }
//     });
//   });
// });




