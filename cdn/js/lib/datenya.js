function datenya() {
    $(".timestamp-link .updated.published").each(function() {
        var g = $(this).attr("title");
        var a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        if (g != "") {
            var i = g.substring(0, 10),
                f = i.substring(0, 4),
                b = i.substring(5, 7),
                e = i.substring(8, 10),
                c = a[parseInt(b, 10) - 1]
        }
        var d = $(this).parents(".post");
        var h = d.children(".datex");
        $("strong", h).html(e);
        $("small", h).html(f);
        $("span", h).html(c)
    });
};