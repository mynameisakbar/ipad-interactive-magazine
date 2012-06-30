function giveMeHeader(img){
	var htmlContent = '<table class="look">' +
    '<tr>' +
    '<td>' +
    '<img src="'+img+'" class="imgTitle"/>'+
    '</td>'+
    '</tr>'+
    '</table>';
    return htmlContent;
}

function getLayout(page)
{
    var htmlContent = '<div id="slider" style="height:100%; width:100%;"><table>' +
    '<tr>' +
    '<td>' +
    '<h1 class="topic">' +
    '<b>' + page.article_1.title + '</b>' +
    '</h1>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td onclick="onArticleClick(' + "'" + page.article_1.content + "','" + page.article_1.imgSrc + "','" + page.article_1.title + "'" + ')">' +
    '<div class="singleContent">' +
    page.article_1.summary +
    '</div>' +
    '</td>' +
    '</tr>' +
    '</table><img src="images/common/flip.png" class="flip"/></div>';
    return htmlContent;
}

/*article 2 scrollable images*/
function getScroller(content,imgArr,title)
{
	var imgStr = "",
		header = "",
		width = imgArr.length *300 +'px';

	for(var i = -1, l = imgArr.length;++i <l;){
		imgStr += '<img src="'+imgArr[i]+'" class="item"/>';
	}
	if(title == null || title == ''){
		header = "";
	}
	else if(title != null){
		header = '<div class="articleHeader">'+title+'</div>';
	}

	var htmlContent = [];
	var imgGallery = '<div id="wrapper" style="width:'+width+'">' +
						'<div id="scrollContent1">' +
							imgStr +
						'</div>' +
					'</div>';
	htmlContent.push(imgGallery);

	var content = '<div style="padding:1px"></div><hr/>'+header + '<div class="article">' + content + '</div>'+ '<div id="footer" class="w_box w_footer w_bg_dark">';
	htmlContent.push(content);

	/*var htmlContent = 
		'<div id="header" class="w_box w_header w_bg_dark"></div>' +
			'<div id="wrapper">' +
						'<div id="scrollContent1" style="width:'+width+'">' +
							imgStr +
						'</div>' +
			'</div>' +
		    '<hr />' +
			header +
				'<div class="article">' +
					content +
				'</div>'+
		'<div id="footer" class="w_box w_footer w_bg_dark">' +
		'</div>';*/
		return htmlContent;
}


function getContent (summary, imgSrc, title, link) /*need to ask jonathan on this*/
{
	var htmlForContent = '<div class="wrapper">'+
	'<table class="tab">' +
	'<tr>' +
	'<td colspan="3" height="10%">'+
	'<img src="images/title.png" width="175" height="35" class="tabOfCont"/>'+
	'</td>'+
	'</tr>'+
	'<tr>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(0);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/01.jpg"class="Leftpic"/></a>'+
	'<div class="snippet">Cover Page</div>'+
	'</td>'+
	'<td width="30%" class="classCont"  onClick="carouselMain.setActiveItem(7);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/02.jpg" class="Leftpic"/>'+
	'<div class="snippet">Content Page</div>'+
	'</td>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(11);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/03.jpg" class="Leftpic"/>'+
	'<div class="snippet">吾语IN THE FIRST PLACE</div>'+
	'</td>'+
	'</tr>'+
	'<tr>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(13);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/04.jpg" class="Leftpic"/>'+
	'<div class="snippet">Journal</div>'+
	'</td>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(14);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/05.jpg" class="Leftpic"/>'+
	'<div class="snippet">Journal Shopping</div>'+
	'</td>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(22);contentPanel.setVisible(false); var currentCard = carouselMain.getActiveItem(); magicTruncate(currentCard);">'+
	'<img src="images/contentPage/06.jpg" class="Leftpic"/>'+
	'<div class="snippet">Journal Watch</div>'+
	'</td>'+
	'</tr>'+
	'<tr>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(30);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/07.jpg"class="Leftpic"/></a>'+
	'<div class="snippet">Journal Travel</div>'+
	'</td>'+
	'<td width="30%" class="classCont"  onClick="carouselMain.setActiveItem(32);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/08.jpg" class="Leftpic"/>'+
	'<div class="snippet">Cover Story</div>'+
	'</td>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(40);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/09.jpg" class="Leftpic"/>'+
	'<div class="snippet">For Your Eyes Only</div>'+
	'</td>'+
	'</tr>'+
	'<tr>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(41);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/10.jpg" class="Leftpic"/>'+
	'<div class="snippet">Made For Each Other</div>'+
	'</td>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(43);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/11.jpg" class="Leftpic"/>'+
	'<div class="snippet">Enter The Dragon</div>'+
	'</td>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(45);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/12.jpg" class="Leftpic"/>'+
	'<div class="snippet">Slimming Effect</div>'+
	'</td>'+
	'</tr>'+
	'<tr>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(47);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/13.jpg"class="Leftpic"/></a>'+
	'<div class="snippet">Dream On</div>'+
	'</td>'+
	'<td width="30%" class="classCont"  onClick="carouselMain.setActiveItem(49);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/14.jpg" class="Leftpic"/>'+
	'<div class="snippet">Case Study</div>'+
	'</td>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(51);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/15.jpg" class="Leftpic"/>'+
	'<div class="snippet">Snow White and The Batik Dwarves</div>'+
	'</td>'+
	'</tr>'+
	'<tr>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(53);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/16.jpg" class="Leftpic"/>'+
	'<div class="snippet">The Art of Propaganda</div>'+
	'</td>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(55);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/17.jpg" class="Leftpic"/>'+
	'<div class="snippet">History Through The Wine Glass</div>'+
	'</td>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(58);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/18.jpg" class="Leftpic"/>'+
	'<div class="snippet">Asian Markets to Hold Steady</div>'+
	'</td>'+
	'</tr>'+
	
	'<tr>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(60);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/19.jpg"class="Leftpic"/></a>'+
	'<div class="snippet">Sense Surround</div>'+
	'</td>'+
	'<td width="30%" class="classCont"  onClick="carouselMain.setActiveItem(61);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/20.jpg" class="Leftpic"/>'+
	'<div class="snippet">On Guard</div>'+
	'</td>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(62);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/21.jpg" class="Leftpic"/>'+
	'<div class="snippet">Infiniti & Beyond</div>'+
	'</td>'+
	'</tr>'+
	'<tr>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(65);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/22.jpg" class="Leftpic"/>'+
	'<div class="snippet">Ancient Wisdom For Modern Cooks</div>'+
	'</td>'+
	'<td width="30%" class="classCont" onClick="carouselMain.setActiveItem(67);contentPanel.setVisible(false);">'+
	'<img src="images/contentPage/23.jpg" class="Leftpic"/>'+
	'<div class="snippet">Bullet On 3 Wheels</div>'+
	'</td>'+
	'<td>'+
	'</td>'+
	'</tr>'+
	'</table'+
	'</div>';
	return htmlForContent;
}


function getDetailedPage(content, imgSrc, title)
{
    var imgTag;
    if (imgSrc)
    {
        imgTag = '<img src="' + imgSrc + '" class="newsImage" align="left" />';
    }

    var html = '<div class="imgPanelWrapper"><div class="articleHeader">' + title + '</div>' + '<div class="article"><table><tr><td valign="top">' + imgTag + '</td><td valign="top" style="padding-left: 2%;">' + unescape(content) + '</td></tr></div></div>';
    return html;
}

function getImgLayout(page)
{
    var htmlContent = '<table align="center">' +
    '<tr>' +
    '<td class="paddingRight">' +
    '<img onclick="onImgClick(' + "'" + page.article_1.content + "','" + page.article_1.imgSrc + "','" + page.article_1.title + "'" + ')" src="' + page.article_1.imgSrc + '" class="newsImage" align="center" />' +
    '</td>' +
    '<td onclick="onImgClick(' + "'" + page.article_2.imgSrc + ')">' +
    '<img onclick="onImgClick(' + "'" + page.article_2.content + "','" + page.article_2.imgSrc + "','" + page.article_2.title + "'" + ')" src="' + page.article_2.imgSrc + '" class="newsImage" align="center" />' +
    '</td>' +
    '</tr>' +
    '</table>';
    return htmlContent;
}

function getVideo(content, imgSrc, title)
{
    var imgTag;
    if (imgSrc)
    {
        imgTag = '<video id="videoContent" class="player" poster="images/img03.jpg" src="video/burberry.mp4" controls="controls" height="200" width="300" style="float:left; padding: 2%;"> your browser does not support the video tag</video>';
    }

    var html = '<div class="articleHeader">' + title + '</div>' + '<div class="article">' + imgTag + content + '</div>';
    return html;
}

/*Duplet views of product*/
function getLayoutDuplet(article)
{
    var htmlContent = '<table class="look duplet">' +
    '<tr>' +
    '<td onclick="onArticleClick(' + "'" + escape(article.content) + "','" + article.imgSrc + "','" + article.title + "'" + ')">' +
	'<div class="articleHeaderSingle">' + article.title + '</div>'+
	'<div class="article" style="overflow:hidden"><div class="dupleft"><img src="'+ article.imgSrc + '" class="newsImageDuplet" content="'+escape(article.content)+'" /></div><div class="dupright">'+ article.content + '</div>' +
    '</td>'+
    '</tr>'+
    '</table>';
    return htmlContent;
}

/*Cover Page*/
function getFancy(article){
	var htmlContent = '<div class="fancy">'+
	'<table align=center>' +
    '<tr>' +
    '<td>'+
    /*'<td onclick="onArticleClick(' + "'" + page.article_1.content + "','" + page.article_1.imgSrc + "','" + page.article_1.titleImg + "','" + page.article_1.title + "'" + ')">' +*/
	'<img onclick="onImgClick(' + "'" + article.content + "','" + article.imgSrc + "','" + article.title + "'" + ')" src="'+ article.imgSrc + '" class="fancyImage1"/>'+
	'</td>'+
    '</tr>'+
    '</table>'+
    '</div>';
    return htmlContent;
}

function getLayout3(article)
{
    var htmlContent = '<table class="look">' +
    '<tr>' +
    /*'<td onclick="onArticleClick(' + "'" + page.article_1.content + "','" + page.article_1.imgSrc + "','" + page.article_1.titleImg + "','" + page.article_1.title + "'" + ')">' +*/
	'<img src="' + article.title + '" class="fancyTitle"/>'+
	'<div class="fancyCaption">'+ article.summary + '</div>' +
    '</td>'+
    '</tr>'+
    '</table>';
    return htmlContent;
}

/*pop up cover with caption*/
function getDetailedImg(content, imgSrc)
{
    var imgTag;
    if (imgSrc)
    {
        //imgTag = '<div class="fancyImage2-wrapper"><img src="' + imgSrc + '" class="fancyImage2"/></div>';
        imgTag = '<div class="imgPanelWrapper"><div class="fancyImage2-wrapper"><img class="fancyImage2Pic" src="' + imgSrc + '"/></div>';
    }
    if(content){
   		imgTag += '<div class="popCaption">'+ content +'</div></div>';
	}

    return imgTag;
}

/*article full page*/
function getFancyNC(page){
	var htmlContent = '<div class="fancy">'+
	'<table align=center>' +
    '<tr>' +
    '<td>'+
    /*'<td onclick="onArticleClick(' + "'" + page.article_1.content + "','" + page.article_1.imgSrc + "','" + page.article_1.titleImg + "','" + page.article_1.title + "'" + ')">' +*/
	'<img src="'+ page.article_1.imgSrc + '" class="fancyImage1"/>'+
	'</td>'+
    '</tr>'+
    '</table>'+
    '</div>';
    return htmlContent;
}

function getImageScrollerLayout(article, nheight, owidth, oheight){
	var width;
	var aspect = owidth/oheight;
	var width = nheight*aspect;
	var arr = article.imgSrc;
	var totalWidth = width*arr.length;
	var imgStr = "";
	var src = "";
	var event = "";

	for(i=0;arr[i];i++){
		event = "onImgClick('"+escape(article.imgCap[i])+"', '"+arr[i]+"', 'title')";
		src = '<img style="width:'+width+'px;" onclick="'+event+'" src="'+arr[i]+'">';
		imgStr += src;
	}

	var html = "<div style='width:"+totalWidth+"px'>"+imgStr+"</div>";
	return html;
}

function getThreeImageLayout(article){
	var width;
	var arr = article.imgSrc;
	var imgStr = "";
	var src = "";
	var event = "";

	for(var i=0;arr[i];i++){
		event = "onImgClick('"+escape(article.imgCap[i])+"', '"+arr[i]+"', 'title')";
		src = '<img onclick="'+event+'" src="'+arr[i]+'">';
		imgStr += src;
	}

	var html = "<div class='coverGallery'>"+imgStr+"</div>";
	return html;
}

function getArticleCoverImages(imgArray){
	var str = "";
	var htmlContent = "<div class='coverGallery'>";
	for(var i = 0; imgArray[i]; i++){
	 	str += "<img src='"+imgArray[i]+"'/>";
	}
	str += '</div>';
	htmlContent += str;

	return htmlContent;
}

function getLayout1(article,chiArticle,lang)
{
	var chiVar = "none",
		engVar = "none",
		toggleImage = "images/toggleChinese.jpg";

	if(lang === "eng" || !lang){
		engVar ="block";
	}else if(lang === "chi"){
		chiVar = "block";
		toggleImage = "images/toggleEnglish.jpg";
	}

    var htmlContent = '<table class="look">' +
    '<tr>' +
    '<td>' +
	'<div class="articleHeaderSingle"><img src="images/tap.jpg" style:"float:left;">' + article.title + '<a href="javascript:void(0)" onClick="toggleLang()" title="Toggle Language" style="text-decoration:none;"><span class="showLang" class="tog"><img src="'+toggleImage+'"/></span></a>'+ '</div>'+
	'<div class="articleSingle coverTextWrapper" id="english_'+article.name+'" style="display:'+engVar+'; vertical-align:top;" content="'+ escape(article.content) +'" onclick="onArticle2Click(' + "'" + escape(article.content) + "','"+article.name+"'"+')">'+ article.summary + '</div>' +
	'<div class="articleSingle coverTextWrapper" id="chinese_'+article.name+'" style="display:'+chiVar+'; vertical-align:top;" content="'+ escape(chiArticle.content) +'" onclick="onArticle2Click(' + "'" + escape(chiArticle.content) + "','"+article.name+"'"+')">'+ article.summary + '</div>' +
    '</td>'+
    '</tr>'+
    '</table>';
    return htmlContent;
}

function getLayout1x(article,chiArticle,lang)
{
	var chiVar = "none",
		engVar = "none",
		toggleImage = "images/toggleChinese.jpg";

	if(lang === "eng" || !lang){
		engVar ="block";
	}else if(lang === "chi"){
		chiVar = "block";
		toggleImage = "images/toggleEnglish.jpg";
	}

    var htmlContent = '<table class="look">' +
    '<tr>' +
    '<td>' +
	'<div class="articleHeaderSingle"><img src="images/tap.jpg" style:"float:left;">' + article.title + '<a href="javascript:void(0)" onClick="toggleLang()" title="Toggle Language" style="text-decoration:none;"><span class="showLang" class="tog"><img src="'+toggleImage+'"/></span></a>'+ '</div>'+
	'<div class="articleSingle coverTextWrapper" id="english_'+article.name+'" style="display:'+engVar+'; vertical-align:top;" content="'+ escape(article.content) +'" onclick="onArticle4Click(' + "'" + escape(article.content) + "','"+article.name+"'"+')">'+ article.summary + '</div>' +
	'<div class="articleSingle coverTextWrapper" id="chinese_'+article.name+'" style="display:'+chiVar+'; vertical-align:top;" content="'+ escape(chiArticle.content) +'" onclick="onArticle4Click(' + "'" + escape(chiArticle.content) + "','"+article.name+"'"+')">'+ article.summary + '</div>' +
    '</td>'+
    '</tr>'+
    '</table>';
    return htmlContent;
}

function getCoverCaptionImageWrapper(img){
	return '<div class="coverCaptionImageWrapper"><img src="'+img+'"></div>';
}

function getCoverTextLayout(article){
	var id = article.name;
    var htmlContent = '<table class="look2">' +
    '<tr>' +
    '<td>' +
	'<div class="coverTextWrapper" content="'+ escape(article.content) +'" onclick="onArticle3Click(' + "'" + escape(article.content) +"'"+",'"+id+"'"+')">'+ article.content + '</div>' +
    '</td>'+
    '</tr>'+
    '</table>';
    return htmlContent;	
}


function getCoverTextLayout(article){
	var id = article.name;
    var htmlContent = '<table class="look2">' +
    '<tr>' +
    '<td>' +
	'<img src="images/tap.jpg">'+
	'<div class="articleSingle coverTextWrapper" style="display:block" content="'+ escape(article.content) +'" onclick="onArticle2Click(' + "'" + escape(article.content) +"'"+",'"+id+"'"+')">'+ article.content + '</div>' +
    '</td>'+
    '</tr>'+
    '</table>';
    return htmlContent;	
}

function getCoverTextLayoutWithoutScroller(article){
	var id = article.name;
    var htmlContent = '<table class="look2">' +
    '<tr>' +
    '<td>' +
	'<div class="articleSingle coverTextWrapper" style="display:block" content="'+ escape(article.content) +'" onclick="onArticle4Click(' + "'" + escape(article.content) +"'"+",'"+id+"'"+')">'+ article.content + '</div>' +
    '</td>'+
    '</tr>'+
    '</table>';
    return htmlContent;	
}

function getFlexibleCover(article,chiArticle,lang){
	/*var toggleLang  = '<div class="articleHeaderSingle">' + article.title + '<a href="javascript:void(0)" onClick="toggleLang()" title="Toggle Language" style="text-decoration:none;"><span id="showLang" class="tog">中文</span></a>'+ '</div>';
	var htmlContent = "<div class='flexibleOuterWrapper'><div class='flexibleInnerWrapper'><div class='flexibleTop'><img src='"+article.imgSrc[0]+"'></div><div class='flexibleMiddle'><img src='"+article.imgSrc[1]+"'></div></div>"+toggleLang+"<div class='flexibleBottom coverTextWrapper' content='"+ escape(article.content) +"'>"+article.content+"</div></div>";
	return htmlContent;*/

	var chiVar = "none",
		engVar = "none",
		toggleImage = "images/toggleChinese.jpg";

	if(lang === "eng" || !lang){
		engVar ="block";
	}else if(lang === "chi"){
		chiVar = "block";
		toggleImage = "images/toggleEnglish.jpg";
	}

	var htmlContent = '<table class="look">' +
    '<tr>' +
    '<td>' +
    "<div class='flexibleOuterWrapper'><div class='flexibleInnerWrapper'><div class='flexibleTop'><img src='"+article.imgSrc[0]+"'></div><div class='flexibleMiddle'><img src='"+article.imgSrc[1]+"'></div></div>" +
	'<div class="articleHeaderSingle">' + article.title + '<img src="images/tap.jpg"><a href="javascript:void(0)" onClick="toggleLang()" title="Toggle Language" style="text-decoration:none;"><span class="showLang" class="tog"><img src="'+toggleImage+'"/></span></a>'+ '</div>'+
	'<div class="articleSingle flexibleBottom coverTextWrapper" id="english_'+article.name+'" style="display:'+engVar+'; vertical-align:top;" content="'+ escape(article.content) +'" onclick="onArticle4Click(' + "'" + escape(article.content) + "','" + article.imgSrc + "','" + article.title + "'" + ",'"+article.name+"'"+')">'+ article.content + '</div>' +
	'<div class="articleSingle flexibleBottom coverTextWrapper" id="chinese_'+article.name+'" style="display:'+chiVar+'; vertical-align:top;" content="'+ escape(chiArticle.content) +'" onclick="onArticle4Click(' + "'" + escape(chiArticle.content) + "','" + article.imgSrc + "','" + article.title + "'" + ",'"+article.name+"'"+')">'+ chiArticle.content + '</div>' +
	//'<div class="articleSingle" id="chinese_'+article.id+'" style="display:none; vertical-align:top;" content="'+ escape(chiArticle.content) +'" onclick="onArticle2Click(' + "'" + escape(article.content) + "','" + article.imgSrc + "','" + article.title+ ",'article_"+article.id + "'" + ')">'+ chiArticle.summary + '</div>' +
    '</td>'+
    '</tr>'+
    '</table>';
    return htmlContent;
}

function formatArticle(article){
	var htmlContent = '<div class="article">' + article.content + '</div>';

	return htmlContent;
}

