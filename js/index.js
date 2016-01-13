$(function() {
  /*var $leftImg =  $('div.img-div'), edu = $('#edu').offset(), about = $('#about_me').offset();
  $(window).scroll(function () {
    var $this = $(this);
    if (about.top + 10 > $this.scrollTop() && $this.scrollTop() > about.top - 10) {
      $leftImg.css('background-image', 'url(images/leftStreet.jpg)')
    } else if (edu.top + 10 > $this.scrollTop() && $this.scrollTop()  > edu.top - 10) {
      $leftImg.css('background-image', 'url(images/leftMan.jpg)')
    }
  });*/
  $('.animaper').appear();
  var i = 1;
  $(document.body).on("appear", ".facts-count", function(a) {
      if (1 === i) k(2600);
      i++;
  });
  function j(a, b, c, d) {
      if (d) {
          var e = 0;
          var f = parseInt(d / a);
          var g = setInterval(function() {
              if (e - 1 < a) c.html(e); else {
                  c.html(b);
                  clearInterval(g);
              }
              e++;
          }, f);
      } else c.html(b);
  }
  function k(a) {
      $(".facts-count .num").each(function() {
          var b = $(this);
          var c = b.attr("data-num");
          var d = b.attr("data-content");
          j(c, d, b, a);
      });
  }
  $(document.body).on('appear', '.piechart-holder', function() {
      $(this).find('.chart').each(function() {
          var a = $('.piechart-holder').data('skcolor');
          $('.chart').easyPieChart({
              barColor: a,
              trackColor: '#eee',
              scaleColor: '#9ACFB7',
              size: '150',
              lineWidth: '5',
              onStep: function(a, b, c) {
                  $(this.el).find('.percent').text(Math.round(c));
              }
          });
      });
  });
  $(document.body).on("appear", ".skillbar-box", function() {
      $(this).find("div.skillbar-bg").each(function() {
          $(this).find(".custom-skillbar").delay(600).animate({
              width: $(this).attr("data-percent")
          }, 1500);
      });
  });
  // accordion ------------------
  $(".accordion").each(function() {
      var a = 2 * $(this).attr("data-name");
      $(this).find(".description:nth-child(" + a + ")").show();
      $(this).find(".description:nth-child(" + a + ")").prev().addClass("activeac");
  });
  $(".accordion .title").click(function() {
      if ($(this).next().is(":hidden")) {
          $(this).parent().find(".title").removeClass("activeac").next().slideUp(500);
          $(this).toggleClass("activeac").next().slideDown(500);
      }
      return false;
  });
});
    