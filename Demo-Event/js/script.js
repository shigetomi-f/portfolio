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
$(function () {
  $(".fed").hide().fadeIn('slow');
});


$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      /*
        2回目以降アクセス時の処理
      */
      $(".loading").addClass('is-active');
    } else {
      /*
        初回アクセス時の処理
      */
      sessionStorage.setItem('access', 'true');          // sessionStorageにデータを保存
      $(".loading-animation").addClass('is-active');      // loadingアニメーションを表示
      setTimeout(function () {
        // ローディングを数秒後に非表示にする
        $(".loading").addClass('is-active');
        $(".loading-animation").removeClass('is-active');
      }, 3000); // ローディングを表示する時間
    }
  }
  webStorage();
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
  $('.js-sm_nav').on('click', function () {            // js-sm_navクラスをクリックで
    $('.menu , .sm_nav-line').toggleClass('open');     // メニューとバーガーの線にopenクラスをつけ外しする
  })
});



// お問い合わせ
window.onload = function () {

  // var address, subject, nam, ptype, price, all, body, hiddenData;
  var address, subject;
  var sendmail = document.getElementById('mail_btn');

  sendmail.onclick = function () {

    // txtData = document.getElementById('txt_data').value;
    email = document.getElementById('email').value;
    // txt = document.getElementById('txt').value;

    address = email;
    subject = '';
    // body = txt;

    // location.href = 'mailto:' + address + '?subject=' + subject + '&body=' + body;
    location.href = 'mailto:' + address + '?subject=' + subject ;

  };

};


