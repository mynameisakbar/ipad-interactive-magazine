function createArticle(name,content, summary, title, imgSrc, imgCap,smallImgSrc)
{
	this.name = name;
    this.content = content;
    this.summary = summary;
    this.title = title;
    this.imgSrc = imgSrc;
    this.imgCap = imgCap;
    this.smallImgSrc = smallImgSrc
}

function createPage(articleArr)
{
	for(var i = -1,l = articleArr.length;++i < l;){
		this[articleArr[i].name] = articleArr[i];
	}
}

function truncate(text, len)
{
    if (text.length > len){
        text = text.substring(0, len);
        text = text.replace(/\w+$/, '');
        text += '...';

    }
    return text;
}

function getRoundValue(dimension, percent)
{
    var value = Math.round(dimension * percent, 2);
    return value;
}

var getMultipler = function()
{
	var multiplier;
	/*if (window.innerHeight > 1100)
	{
		multiplier = 1.4;
	}
	else if (window.innerHeight < 700)
	{
		multiplier = 0.4;
	}
	else
	{
		multiplier = 1;
	}*/
	
	/*works based on orientation instead of screen height (need to solve this)*/
	
	var height = window.innerHeight - 44;
	if (Ext.getOrientation() == 'portrait')
	{
		var aspect = height/window.innerWidth;
		if(window.innerHeight >1100 && aspect >1.5){
			//alert('1');
			multiplier = 1;
		}
		else if(height >1100 && aspect <1.5){// xoom, Galaxy Tab Big
			//alert('2');
			multiplier = 1;
		}
		else if(height <700 && aspect >1.5){
			//alert('3');
		}
		else if(height <700 && aspect <1.5){ //Galaxy Tab Small
			//alert('4');
			multiplier=0.2;
		}
		else if(aspect >1.5){ //Flyer
			//alert('5');
			multiplier = 0.5;
		}
		else{ //iPad
			//alert('6');
			multiplier = 0.4;
		}
	}
	else 
	{
		var aspect = height/window.innerWidth;
		if (height<600 && aspect < 0.5){ // Galaxy Tab Small
			//alert('f1');
			multiplier = 0.18;
		}
		else if(height <600 && aspect < 1.6){ //Flyer
			//alert('f2'); 
			multiplier = 0.5;
		}
		else if(aspect > 1.6){ 
			//alert('f3');
			multiplier =1;
		}
		else{ //iPad, xoom, Galaxy Tab Big
			//alert('f4');
			multiplier = 0.85;
		}
	}
	return multiplier;
}

var getMultiplerSing = function()
{
	var multiplier;
	var height = window.innerHeight - 44;
	var width = window.innerWidth;
	/*if (window.innerHeight > 1100)
	{
		multiplier = 1.4;
	}
	else if (window.innerHeight < 700)
	{
		multiplier = 0.4;
	}
	else
	{
		multiplier = 1;
	}*/

	if (Ext.getOrientation() == 'portrait'){
		var aspect = height/window.innerWidth;
		
		if(height >1100 && aspect >1.4){ //xoom,Galaxy Tab Big
			//alert("s1");
			multiplier = 1.6;
		}
		else if(height <1100 && aspect <1.4){ //iPad
			//alert("s2");
			multiplier = 1.1;
		}
		else if(height <700 && aspect >1.5){
			//alert('s3');
		}
		else if(height <700 && aspect <1.5){ //Galaxy Tab Small,
			//alert('s4')
			multiplier = 0.25;
		}
		else if(aspect >1.5){ //Flyer
			//alert('s5');
			multiplier = 0.8;
		}
		else{
			//alert('s6');
		}
	}
	else {
		var aspect = height/window.innerWidth;
		if(height > 700 && aspect > 0.6){ 
			//alert('sp1');
			multiplier = 0.85;
		}
		else if(aspect < 0.6 && height>700 && width>1200){ /*xoom*/
			//alert('sp22222');
			multiplier = 1;
		}
		else if(aspect < 0.5 && height<400){ /*Galaxy Tab Small*/
			//alert('sp3');
			multiplier=0.2;
		}
		else if(aspect < 0.6 && height<700 && width<1200){ /*flyer*/
			//alert('sp2');
			multiplier = 0.4;
		}
		else { //iPad,Galaxy Tab Big
			//alert('sp4');
			multiplier=0.8;
		}
		//alert(aspect);
	}

	return multiplier;
}

function getAllId(className){
	var cc = Ext.query(className);
   	var coverCaptionArray = [];

	   for(var i = 0; cc[i];i++){
	   	coverCaptionArray.push('#'+cc[i].id);
	   }
	return coverCaptionArray;       
}

    function updateImgPanel(){
        objArray = [this.imgPanel,this.popup,this.contentPanel,this.multiImgPanel];
        /*if(this.imgPanel && this.imgPanel.isVisible){
            this.imgPanel.setWidth(getRoundValue(window.innerWidth,0.8));
            this.imgPanel.setHeight(getRoundValue(window.innerHeight,0.9));
        }

        if(this.popup && this.popup.isVisible){
            this.popup.setWidth(getRoundValue(window.innerWidth,0.8));
            this.popup.setHeight(getRoundValue(window.innerHeight,0.9));
        }

        if(this.multiImgPanel && this.multiImgPanel.isVisible){
            this.multiImgPanel.setWidth(getRoundValue(window.innerWidth, 0.9));
            this.multiImgPanel.setHeight(getRoundValue(window.innerHeight, 0.9));
        }

        if(this.contentPanel && this.contentPanel.isVisible){
            this.contentPanel.setWidth(getRoundValue(window.innerWidth, 0.9));
            this.contentPanel.setHeight(getRoundValue(window.innerHeight, 0.9));
            Ext.query('.wrapper')[0].style.height = Ext.query('#contentPanel')[0].style.height;
        }*/

        for(var i=0;i<objArray.length;i++){
            if(objArray[i] && objArray[i].isVisible){
                objArray[i].setWidth(getRoundValue(window.innerWidth, 0.9));
                var height = getRoundValue(window.innerHeight, 0.9);
                if(objArray[i] === this.popup){ 	
                    var trueHeight = $('#detailedPanel .imgPanelWrapper')[0].clientHeight;
                    height = (trueHeight > height) ? height :trueHeight;
                    objArray[i].setHeight($('#detailedPanel .imgPanelWrapper')[0].clientHeight);
                }
                else if(objArray[i] === this.imgPanel){ 
                        var trueHeight = $('#imgPanel .imgPanelWrapper')[0].clientHeight;
                        height = (trueHeight>height) ? height : trueHeight;
                        objArray[i].setHeight(height);
                }
                else if(objArray[i] === this.contentPanel){
                    Ext.query('.wrapper')[0].style.height = Ext.query('#contentPanel')[0].style.height;
                }
                else {
                	objArray[i].setHeight(height);
                }
            }
        }

        for(var i=0; Ext.query('.x-mask')[i];i++){
            Ext.query('.x-mask')[i].style.width = window.innerWidth+'px';
            Ext.query('.x-mask')[i].style.height = window.innerHeight+'px';
        }
    }

    function changeLength(){
        multiplierSing = getMultiplerSing();
        var content = Ext.select('.articleSingle');
        
        content.each(function(con){
            if(/english/.test(con.id)){
                var text = unescape(con.getAttribute('content'));
                text = truncate(text, multiplierSing * 1300);
                con.dom.innerHTML = text;
            }
            else{
                var text = unescape(con.getAttribute('content'));
                text = truncate(text, multiplierSing * 650);
                con.dom.innerHTML = text;
            }  
        })

        multiplier = getMultipler();
        var content2 = Ext.select('.newsImageDuplet');
        content2.each(function(con){
           
                var text = unescape(con.getAttribute('content'));
                text = truncate(text, 1000 * multiplier);
                con.parent().parent().select('td').elements[1].innerText = text;
        })

    }

    function hideXMask(){
         for(var i=0; Ext.query('.x-mask')[i];i++){
            Ext.query('.x-mask')[i].style.display= 'none';
        }       
    }

	 function toggleLang(){
	 		var hash = window.location.hash;
	 		if(hash != "#toggle"){
	 			window.location.hash = "#toggle";
	 		} else {
	 			window.location.hash = "#toggle1";
	 		};
	    	var currentCard = carouselMain.getActiveItem();
	    	var articleArr = $('#'+currentCard.id).find('.articleSingle');
	    	var showLang =  $('#'+currentCard.id).find('.showLang img');

	    	if(articleArr[0].style.display === 'block'){ //english article
	    		articleArr[0].style.display = 'none';
	    		var chi = unescape($(articleArr[1]).attr('content'));
	    		$(articleArr[1]).html(chi);
	    		articleArr[1].style.display = 'block';
	    		showLang.attr('src','images/toggleEnglish.jpg');
	    	}
	    	else{ //chinese article
	    		articleArr[1].style.display = 'none';
	    		var eng = unescape($(articleArr[0]).attr('content'));
	    		$(articleArr[0]).html(eng);
	    		articleArr[0].style.display = 'block';
	    		showLang.attr('src','images/toggleChinese.jpg');
	    	}

	    	magicTruncate(currentCard);
	    }

    function magicTruncate(currentCard){

        var panelArr = currentCard.query('panel');
            
        if($('#'+currentCard.id).find('.coverText').length){
            /*var ele = Ext.select('.coverTextWrapper',panelArr[i].id).elements[0];
            ele.innerHTML = unescape(ele.getAttribute('content'));*/
            var eleArr = $('#'+currentCard.id).find('.coverTextWrapper');
            var j = 0;
            for(j;j<eleArr.length;j++){
            	if(eleArr[j].style.display == 'block'){
            		var ele = $(eleArr[j]);
            		break;
            	}
            }
            	var eleContent = unescape(ele.attr('content'));
            	ele.html(eleContent);

	            var hh = ele.find('p');

	            var gg = window.innerHeight - $('#'+currentCard.id).find('.coverText')[0].offsetTop -$('#'+currentCard.id).find('.coverTextWrapper')[j].offsetTop;
	            var sum = 0;
	            var charSum = 0;
	            
	            //ele = Ext.select('.coverTextWrapper',panelArr[i].id).elements[0];
	            //ele = $('#'+currentCard.id).find('.coverTextWrapper');

	            for(var i = -1,l=hh.length;++i <l;){
	                charSum += parseFloat(hh[i].innerText.length);
	                sum += parseFloat(hh[i].clientHeight);
	                if(sum + 60 >= gg){ //  Add 30 for the sake of the lang button
	                    var percent = Math.floor(gg/sum * 10)/10 - 0.3;
	                    charSum *= percent;
	                    ele.html(truncate(eleContent,charSum));
	                    //alert(truncate(unescape(ele.attr('content')),charSum));
	       				break;
	                }    
	            }
        	
        } else if($('#'+currentCard.id).find('.duplet').length){ 	
        		var fixHeight = $('#'+currentCard.id).find('.duplet').eq(1).find('.dupleft')[0].clientHeight,
        			marginBot = 10;
        	for(var i=0;i < 2;i++){
        		var ratio,content,truncateTxt,
        			ele = $('#'+currentCard.id).find('.duplet').eq(i);
        			eleDiv = ele.find('.article').find('div').eq(1);

        			realHeight = ele.find('.dupright')[0].clientHeight;

        			ratio = fixHeight /realHeight;
        			
        			if(ratio < 1){
        				content = unescape(ele.find('img').attr('content'));
		        		truncateTxt = content.length*(ratio-0.1);
		        		eleDiv.html(truncate(content,truncateTxt));
		        		//var filterContent = eleDiv.text().replace(/<(?:.|\n)*?/gm, '');
		        		//eleDiv.text(filterContent);
		        		var fc = truncate(content,truncateTxt);
		        		var lastFive;
		        		lastFive = fc.substring(fc.lastIndexOf('...')-2,fc.lastIndexOf('...')).replace(/<(?:.|\n)*?|\//gm, '') +"...";
		        		lastfive = lastFive.replace(/\//g,"");
		        		fc = fc.substring(0,fc.lastIndexOf('...')-2);
		        		fc+= lastFive;

		        		eleDiv.html(fc);
        			}

	        	
        	}
  
        	
        }
            
    }