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


// ローディング
const loading = document.querySelector( '.loading' );

window.addEventListener( 'load', () => {
  loading.classList.add( 'hide' );
}, false );


/* 小さくなった時のメニューボタン */

$(function () {
  $('.js-sm_nav').on('click', function () {        // js-sm_navクラスをクリックすると、
    $('.menu , .sm_nav-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});

// ローディング画面

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
      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
      $(".loading-animation , .loading-png").addClass('is-active'); // loadingアニメーションを表示
      setTimeout(function () {
        // ローディングを数秒後に非表示にする
        $(".loading").addClass('is-active');
        $(".loading-animation , .loading-png").removeClass('is-active');
      }, 3000); // ローディングを表示する時間
    }
  }
  webStorage();
});

// window.onload = function() {

//   var address, subject, body, hiddenData;
//   var sendmail = document.getElementById('mail_btn');

//   sendmail.onclick = function() {

//       txtData = document.getElementById('txt_data').value;
//       address1 = 'メールアドレス';
//       address2 = '@co.jp';
//       address = address1+address2;
//       subject = '○○の件について';
//       body = 'メール本文' + '%0D%0A' + txtData; 

//       location.href = 'mailto:' + address + '?subject=' + subject + '&body=' + body;
//   };

// };
// テスト

// 画面で入力してメール起動
window.onload = function() {

  var address, subject, nam, ptype, price, all, body, hiddenData;
  var sendmail = document.getElementById('mail_btn');

  sendmail.onclick = function() {

      // txtData = document.getElementById('txt_data').value;
      t_data1 = document.getElementById('txt_data1').value;
      t_data2 = document.getElementById('txt_data2').value;
      
      // ptype = document.getElementById('p_type').value;
      address1 = 'demo';
      address2 = '@co.jp';
      address = address1+address2;
      subject = '【MAISON MARLO】購入品案内';
      // body = 'メール本文' 
      // + '%0D%0A' + txtData  + 'メール本文'; 
      nam = parseInt(t_data1, 10);
      p_price = parseInt(t_data2, 10);

      price = nam * p_price;
      all = 380 + price;
      body = `この度は【MAISON MARLO】をご利用いただき誠にありがとうございました。`  + '%0D%0A'
      + 'ご注文いただきました商品の在庫を確認いたしましたので、'  + '%0D%0A'
      + 'お手数かけますが、こちらのメールに送り先住所をご記入のうえ'  + '%0D%0A'
      + '返送していただくようお願いいたします。'  + '%0D%0A'
      + 'お客様からのご入金確認後、即発送させていただきます。'  + '%0D%0A'
      + '  ' + '%0D%0A'
      + '----------------------------------------------------------------'  + '%0D%0A'
      + '　商　品　詳　細　'  + '%0D%0A'
      + '----------------------------------------------------------------'  + '%0D%0A'
      + '【　商　品　番　号　】002093-1'  + '%0D%0A'
      + '【　商　　品　　名　】BAMLE sumi-kuro'  + '%0D%0A'
      + '【　価　格　(税込)　】' + price + '円'  + '%0D%0A'
      + '【　　数　　　量　　】' +  nam  + '個' + '%0D%0A'
      + '【　　送　　　料　　】380円'  + p_price +  '%0D%0A'
      + '【　　合　　　計　　】' + all + '円'  + '%0D%0A'
      + '  ' + '%0D%0A'
      + '  ~~~~~~~~~~~~~~~~~以下、お客様記入欄~~~~~~~~~~~~~~~~~' + '%0D%0A'
      + '  ▼配送先情報' + '%0D%0A'
      + ' ===============================================' + '%0D%0A'
      + '  【　お　　名　　前　】' + '%0D%0A'
      + '  【　郵　便　番　号　】' + '%0D%0A'
      + '  【　ご　　住　　所　】' + '%0D%0A'
      + '  【　電　話　番　号　】' + '%0D%0A'
      + '  ===============================================' + '%0D%0A'
      + '  ' + '%0D%0A'
      + '  今後とも【MAISON MARLO】を宜しくお願いいたします。' + '%0D%0A'
      + '  ' + '%0D%0A'
      + '  ****************************************************************' + '%0D%0A'
      + '  【MAISON MARLO】' + '%0D%0A'
      + '  所在地：福岡県福岡市博多区住吉１丁目１Yufo Garden F1' + '%0D%0A'
      + '  mail:XXX@shop-pro.jp' + '%0D%0A'; 

      location.href = 'mailto:' + address + '?subject=' + subject + '&body=' + body;
  };

};


// テストボタン


// 画面で入力してメール起動
// window.onload = function() {

//   var address, subject, body, hiddenData;
//   var sendmail = document.getElementById('mail_btn');

//   sendmail.onclick = function() {

//       txtData = document.getElementById('txt_data').value;
//       address1 = 'メールアドレス';
//       address2 = '@co.jp';
//       address = address1+address2;
//       subject = '○○の件について';
//       // body = 'メール本文' 
//       // + '%0D%0A' + txtData  + 'メール本文'; 
//       body = `お問い合わせありがとうございます。`
//       + '  ****************************************************************'
//       + ' お問い合わせ内容記入欄：'
//       + '  ****************************************************************' ; 


//       location.href = 'mailto:' + address + '?subject=' + subject + '&body=' + body;
//   };

// };




// テストお問い合わせフォーム

// window.onload = function() {

//   var address, subject, body, hiddenData;
//   var sendmail = document.getElementById('mail_btn');

//   sendmail.onclick = function() {

//       txtData = document.getElementById('txt_data').value;
//       address1 = 'メールアドレス';
//       address2 = '@co.jp';
//       address = address1+address2;
//       subject = '○○の件について';
//       body = 'メール本文' + '%0D%0A' + txtData; 

//       location.href = 'mailto:' + address + '?subject=' + subject + '&body=' + body;
//   };

// };



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




