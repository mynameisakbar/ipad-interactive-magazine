var down_x = null;
var up_x = null;
var mouse_down = false;
var speed = 300;
var j = jQuery.noConflict();
function init(){
    //register swipe
    register_swipe(j("#slider"), swipe);
};

function register_swipe(div, callback)
{
    div.mousedown(function(e){
        e.preventDefault();
            down_x = e.pageX;
        up_x = e.pageX;
        mouse_down = true;
        j("body").unbind();
        j("body").mousemove(function(e){
            if (mouse_down)
            {
                var diff = e.pageX - up_x;
                var left = parseInt(div.css('left').replace('px',''));
                div.css('left',left+diff);
                up_x = e.pageX;
            }
        });
        j("body").mouseup(function(e){
            up_x = e.pageX;
            callback();
            $(this).unbind();
            mouse_down = false;
        });
    });
    div.bind('touchstart', function(e){
            down_x = e.originalEvent.touches[0].pageX;
        up_x = down_x;
        j("body").unbind();
        j("body").bind('touchmove', function(e){
                    e.preventDefault();
            var diff = e.originalEvent.touches[0].pageX - up_x;
                        var left = parseInt(div.css('left').replace('px',''));
                        div.css('left',left+diff);
                    up_x = e.originalEvent.touches[0].pageX;
            });
        j("body").bind('touchend', function(e){
                    callback();
            $(this).unbind();
            });
    });
   }
   
  function swipe()
  {
  	if ((down_x - up_x) > 50)
    {
    	if (popupPanel == 'closed')
    	{
    		window.open('file:///Users/pahlevi/Desktop/Edit/Delite2-Template1/index.html','_self'); //SlideRight
    	}
    }
   }