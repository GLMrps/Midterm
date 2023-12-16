$(document).ready(function()
{
    $(window).resize(function()
    {
        if ($(window).width()<600)
        {
            $("#bar1").attr("src","img/bar1-2.png");
            $("#bar2").attr("src","img/bar2-2.png");
        }  
        if ($(window).width()>600)
        {
            $("#bar1").attr("src","img/img-bar1.png");
            $("#bar2").attr("src","img/img-bar2.png");
        }
    });
   $("#parent").hover(function()
   {
    $("#parent").click();
   });
});