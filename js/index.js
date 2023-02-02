$(function(){
var recomTop = $(".recommend").offset().top;
displayToggle()
$(window).scroll(function(){
    displayToggle()
}
)
function displayToggle(){
    if($(document).scrollTop() >= recomTop){
   $ (".fixedtool").fadeIn();
}
else{
    $ (".fixedtool").fadeOut();

}
} 
var flag = true;
var flag1 = true; 
  $ (".fixedtool li").click(function(){
    flag = false;
    flag1 = false;
        var index = $(this).index();
        var distance = $(".floor .w").eq(index).offset().top
        $("body,html").stop().animate({
            scrollTop :distance
        },function(){
            flag = true;
        })
        })
$ (".fixedtool li").mouseover(function(){
$(this).addClass("current").siblings().removeClass("current");
})
$ (".fixedtool li").mouseout(function(){
    if(flag1){
         $(this).removeClass("current");
    }
    })
   
    
 
        $(window).scroll(function(){
            if(flag){
               $(".floor .w").each(function(i,ele){
if($(document).scrollTop() >= $(ele).offset().top)
{
$(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current");
// console.log(i);
}  
            }
            )}
            displayToggle()
        })
}
)
