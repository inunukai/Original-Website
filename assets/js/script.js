
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
        $("body,html").animate({scrollTop:0},1000);
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
    $(".box1").on("click",function(){
        $("body,html").animate({scrollTop: $(".electric").offset().top}, 1000);
    });
});
$(function(){
    $(".box3").on("click",function(){
        $("body,html").animate({scrollTop: $(".training").offset().top}, 1000);
    });
});
$(function(){
  $(".box4").on("click",function(){
      $("body,html").animate({scrollTop: $(".maintenance").offset().top}, 1000);
  });
});
$(function(){
    $(".box1").on("click",function(){
        $("body,html").animate({scrollTop: $(".electric").offset().top}, 1000);
    });
});
$(function(){
    $(".NEWS-Latest").on("click",function(){
        $("body,html").animate({scrollTop: $(".containers").offset().top}, 1000);
    });
});

// $(function(){
//     $(".link-kenjitsu").on("click",function(){
//         $("body,html").animate({scrollTop: $(".kenjitsu").offset().top}, 500);
//     });
// });
// $(function(){
//     $(".link-akogare").on("click",function(){
//         $("body,html").animate({scrollTop: $(".akogare").offset().top}, 500);
//     });
// });
// $(function(){
//     $(".link-haisuinojin").on("click",function(){
//         $("body,html").animate({scrollTop: $(".haisuinojin").offset().top}, 500);
//     });
// });
// $(function(){
//     $(".link-part1").on("click",function(){
//         $("body,html").animate({scrollTop: $(".part1").offset().top}, 500);
//     });
// });

