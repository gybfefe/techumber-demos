  // JQuery hover event with timeout by Taufik Nurrohman
  (function (a) {
    a.fn.hoverTimeout = function (c, e, b, d) {
      return this.each(function () {
        var f = null,
          g = a(this);
        g.hover(function () {
          clearTimeout(f);
          f = setTimeout(function () {
            e.call(g)
          }, c)
        }, function () {
          clearTimeout(f);
          f = setTimeout(function () {
            d.call(g)
          }, b)
        })
      })
    }
  })(jQuery);