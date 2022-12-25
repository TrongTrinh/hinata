window.addEventListener('scroll', function () {
    console.log(this.scrollY);
});

// addEventListener('scroll', (event) => {
//     console.log('🚀 ~ file: script.js ~ line 3 ~ event', event);
// });
// $(function () {
//   $('body').prepend('<div class="overlay" role="menuClose"></div>');

//   $('#totop').on('click', function () {
//     var speed = 400; // ミリ秒
//     $('body,html').animate({ scrollTop: 0 }, speed, 'swing');
//     return false;
//   });

//   $(window).on('scroll load', function () {
//     var scroll = $(this).scrollTop();
//     var windowHeight = $(window).height();
//     $('.fadeIn').each(function () {
//       var imgPos = $(this).offset().top;
//       if (scroll > imgPos - windowHeight + windowHeight / 3) {
//         $(this).addClass('active');
//       }
//     });
//   });
// });

// if (IsSmartPhone()) {
//   $(function () {
//     var scrollPosition;
//     $('#menuBtn').on('click', function () {
//       $('.overlay').fadeToggle('fast');
//       $('#spMenu').addClass('cr');
//       scrollPosition = $(window).scrollTop();
//       $('body').addClass('fixed').css({ top: -scrollPosition });
//     });
//     $('[role="menuClose"]').on('click', function () {
//       $('#spMenu').removeClass('cr');
//       $('.overlay').hide();
//       $('body').removeClass('fixed').css({ top: 0 });
//       window.scrollTo(0, scrollPosition);
//     });

//     $('#spMenu .hasChild span').on('click', function () {
//       $(this).toggleClass('opened');
//       $('+ul', this).slideToggle();
//     });
//   });
// }

/*===========================================================
レスポンシブ時の画像切り替え
=============================================================*/
// <img src>の[_pc]または[_sp]を判定し、ブレイクポイントに応じて画像を切り替える。
// $(function () {
//   //変数セット
//   var $elem = $('.switch');
//   var sp = '_sp.';
//   var pc = '_pc.';
//   var replaceWidth = 760; //ブレイクポイント設定

//   function imageSwitch() {
//     //ウィンドウサイズ取得
//     var windowWidth = parseInt($(window).width());
//     //.switchに適用
//     $elem.each(function () {
//       var $this = $(this);
//       if (windowWidth > replaceWidth) {
//         $this.attr('src', $this.attr('src').replace(sp, pc));
//       } else {
//         $this.attr('src', $this.attr('src').replace(pc, sp));
//       }
//     });
//   }
//   imageSwitch();
//   $(window).on('load resize', function () {
//     imageSwitch();
//   });
// });

// スマートフォンかどうか判断するメソッド
// function IsSmartPhone() {
//   // デバイスの種類。
//   var media = ['iPhone', 'iPod', 'Windows Phone', 'Android'];
//   var pattern = new RegExp(media.join('|'), 'i'); //デバイスの種類を正規表現にする。
//   return pattern.test(navigator.userAgent); //ユーザーエージェントにデバイスが含まれるかを調べる。
// }
