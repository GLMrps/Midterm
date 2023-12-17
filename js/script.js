$(document).ready(function()
{
    $(window).resize(function()
    {
        if ($(window).width()<600)
        {
            $("#bar1").attr("src","img/bar1-2.png");
            $("#bar2").attr("src","img/bar2-2.png");
            $("#bar1-another").attr("src","../img/bar1-2.png");
            $("#bar2-another").attr("src","../img/bar2-2.png");
            $("#h-menu").removeClass("invisible");
            $(".debug-cover").removeClass("invisible");
        }  
        if ($(window).width()>600)
        {
            $("#bar1").attr("src","img/img-bar1.png");
            $("#bar2").attr("src","img/img-bar2.png");
            $("#bar1-another").attr("src","../img/img-bar1.png");
            $("#bar2-another").attr("src","../img/img-bar2.png");
            $("#h-menu").addClass("invisible");
            $(".debug-cover").addClass("invisible");
        }
    });

    $(".toggle").click(function()
    {
       $(".debug-cover").toggleClass("show");
    })
    
});
