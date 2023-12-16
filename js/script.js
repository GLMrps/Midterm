$(document).ready(function()
{
    $(window).resize(function()
    {
        if ($(window).width()<600)
        {
            $("#bar1").attr("src","img/bar1-2.png");
            $("#bar2").attr("src","img/bar2-2.png");
            $("#phone-img").style.display="block";
        }  
        if ($(window).width()>600)
        {
            $("#bar1").attr("src","img/img-bar1.png");
            $("#bar2").attr("src","img/img-bar2.png");
            $("#phone-img").style.display="none";
        }
    });
});