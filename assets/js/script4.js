
// $(function(){
//     $(".menu-icon").on("click",function(){
//         $(".menu").slideToggle();  
            
//     });
// });

$(function () {
    const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
    const fade_move = 100; // どのぐらい要素を動かすか(px)
    const fade_time = 800; // フェードの時間(ms)
    // フェード前のcssを定義
    $(".scroll-fade-up").css({
      opacity: 0,
      transform: "translateY(" + fade_move + "px)",
      transition: fade_time + "ms",
    });
    // スクロールまたはロードするたびに実行
    $(window).on("scroll load", function () {
      const scroll_top = $(this).scrollTop();
      const scroll_bottom = scroll_top + $(this).height();
      const fade_position = scroll_bottom - fade_bottom;
      $(".scroll-fade-up").each(function () {
        const this_position = $(this).offset().top;
        if (fade_position > this_position) {
          $(this).css({
            opacity: 1,
            transform: "translateY(0)",
          });
        }
      });
    });
  });
  $(function(){
      $(".toTop").on("click",function(){
          $("body,html").animate({scrollTop:0},500);
      });
  });
  
  $(function(){
      $(".fade-line").hover(
        function() { $(this).find("::before").stop().animate({ width: "100%" }, 300); },
        function() { $(this).find("::before").stop().animate({ width: "0" }, 300); }
      );
  });
  
  $(function(){
      $(".fade-line_1").hover(
        function() { $(this).find("::before").stop().animate({ width: "100%" }, 300); },
        function() { $(this).find("::before").stop().animate({ width: "0" }, 300); }
      );
  });
  



  $(function(){
      $(".link-part1").on("click",function(){
          $("body,html").animate({scrollTop: $(".part1").offset().top}, 500);
      });
  });
  
  $(document).ready(function(){
    $('.slider').slick({
      autoplay: true,//自動的に動き出すか。初期値はfalse。
      infinite: true,//スライドをループさせるかどうか。初期値はtrue。
      speed: 500,//スライドのスピード。初期値は300。
      slidesToShow: 3,//スライドを画面に3枚見せる
      slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
      prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
      nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
      centerMode: true,//要素を中央ぞろえにする
      variableWidth: true,//幅の違う画像の高さを揃えて表示
      dots: true,//下部ドットナビゲーションの表示
    })
  });